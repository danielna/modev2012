(function () {
usatoday.usatodayfeed = function() {
    
    var params = {
        keyname: "api_key",
        breakingnews: {
            url: "http://api.usatoday.com/open/breaking",
            format: "rss",
            opts: {
                expired: "true"
            }
        },
        bookreviews: {
            url: "http://api.usatoday.com/open/reviews/books/recent",
            format: "json",
            opts: {
                count: 10
            }
        },
        moviereviews: {
            url: "http://api.usatoday.com/open/reviews/movies/recent",
            format: "json",
            opts: {
                count: 10
            }
        },
        musicreviews: {
            url: "http://api.usatoday.com/open/reviews/music/recent",
            format: "json",
            opts: {
                count: 10
            }
        }
    };

    var getNews = function() {
        var results = search("breakingnews");
    };

    var getBooks = function() {
        var results = search("bookreviews").success(function(response){ 
            var books = [];
            if (response.BookReviews){
                $.each(response.BookReviews, function() {
                    var data = {
                        title: this.Title,
                        author: this.Author,
                        description: this.Brief,
                        reviewDate: this.ReviewDate,
                        url: this.ReviewUrl
                    };
                    books.push(
                        "<li><a href='books/?' data-title='" + data.title.replace(/'/g, '') + 
                        "' data-author='" + data.author.replace(/'/g, '') + 
                        "' data-reviewDate='" + data.reviewDate +
                        "' data-url='" + data.url.replace(/'/g, '') + 
                        "' data-description='" + data.description.replace(/'/g, '') +
                        "'>"  + data.title.replace(/'/g, '') + "</a></li>"
                        );
                });
            }
            $(".bookreviews ul.list").append(books);
        });
    };

    var getMovies = function() {
        var results = search("moviereviews").success(function(response){ 
            var movies = [];
            if (response.MovieReviews){
                $.each(response.MovieReviews, function() {
                    var data = {
                        title: this.MovieName,
                        actors: this.ActorName,
                        mpaa: this.MPAARating,
                        score: this.Rating,
                        url: this.WebUrl
                    };
                    movies.push(
                        "<li><a href='movies/' data-transition='slide-in' data-title='" + data.title.replace(/'/g, '') + 
                        "' data-actors='" + data.actors.replace(/'/g, '') + 
                        "' data-mpaa='" + data.mpaa +
                        "' data-score='" + data.score +
                        "' data-url='" + data.url.replace(/'/g, '') + 
                        "'>" +
                        data.title.replace(/'/g, '') + 
                        " :: " + data.score + "/5" + 
                        "</a>" + 
                        "<span class='chevron'></span></li>"
                        );
                });
            }
            $(".moviereviews ul.list").append(movies);
        });
    };

    var getMusic = function() {
        var results = search("musicreviews").success(function(response){ 
            var music = [];
            if (response.MusicReviews){
                $.each(response.MusicReviews, function() {
                    var data = {
                        title: this.AlbumName,
                        artist: this.ArtistName,
                        score: this.Rating,
                        url: this.WebUrl
                    };
                    music.push(
                        "<li><a href='music/' data-transition='slide-in' data-title='" + data.title.replace(/'/g, '') + 
                        "' data-artist='" + data.artist.replace(/'/g, '') + 
                        "' data-score='" + data.score +
                        "' data-url='" + data.url.replace(/'/g, '') + 
                        "'>" + 
                        data.title.replace(/'/g, '') + 
                        " - " + data.artist + 
                        " :: " + data.score + "/5" + "</a>" + 
                        "<span class='chevron'></span></li>"
                        );
                });
            }
            $(".musicreviews ul.list").append(music);
        });
    };

    // the rss parsing is bs
     var search = function (category) {
        var query = "?";
        var theseParams = params[category];
        var url = theseParams.url;

        for (var opt in theseParams.opts) {
            query += opt + "=" + encodeURIComponent(theseParams.opts[opt]) + "&";
        }
        query += params.keyname + "=" + usatoday.globals.APP_KEY.usatoday;

        url += query;

        if (theseParams.format === "rss") {
            jQuery.getFeed({
               url: url,
               success: function(feed) {
                var articles = [];
                for (var i=0; i<feed.items.length; i++) {
                    articles.push(
                        "<li><a href='news/' data-title='" + feed.items[i].title.replace(/'/g, '') + 
                        "' data-url='" + feed.items[i].link.replace(/'/g, '') + 
                        "' data-description='" + feed.items[i].description.replace(/'/g, '') + 
                        "'>" + feed.items[i].title.replace(/'/g, '') + "</a></li>"
                        );
                }
                $("." + category + " ul.list").append(articles);
               }
             });
        } else {
            return $.getJSON(url).error(function() {
                console.warn(">> Something went fubar with the getJson for category: " + category);
            });
        }
    };

    
    var returnFeed = function() {
        return "";
    };

    return {
        getNews: getNews,
        getBooks: getBooks,
        getMovies: getMovies,
        getMusic: getMusic
    };
    
};
})();