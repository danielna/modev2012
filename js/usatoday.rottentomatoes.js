(function () {
usatoday.rottentomatoes = function() {
    
    // shortcuts: now!
    // God forgive me for what I'm doing here.
    var params = {
        movieQstring: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?",
        filters: "&page_limit=1&apikey=mre7h28j4n6cgpbk8nprw8fx&callback=?"
    };

    var getData = function(query) {
        var results = search(query).success(function(response){ 
            if (response.movies){
                $.each(response.movies, function() {
                    var data = {
                        movie_id: this.id,
                        runtime: this.runtime,
                        critics_consensus: this.critics_consensus,
                        poster_url: this.posters.original,
                        ratings_critics: this.ratings.critics_rating,
                        ratings_critics_score: this.ratings.critics_score,
                        ratings_audience: this.ratings.audience_rating,
                        ratings_audience_score: this.ratings.audience_score
                    };
                   for (var d in data)
                    {        
                        var temp = data[d];
                        if (d === "poster_url") {
                            $(".rottentomatoes").find("." + d).attr("src", data[d]);
                        } else if (d === "ratings_critics") {
                            if (parseInt(data["ratings_critics_score"]) > 50) {
                                $(".left").addClass("good");
                            } else {
                                $(".left").addClass("bad");
                            }
                        } else if (d === "ratings_audience") {
                            if (parseInt(data["ratings_audience_score"]) > 50) {
                                $(".right").addClass("good");
                            } else {
                                $(".right").addClass("bad");
                            }
                        } else {
                            $(".rottentomatoes").find("." + d).text(data[d]);
                        }
                    }
                });
            }
        });
    };

     var search = function (query) {
        var url = params.movieQstring + "q=" + query + params.filters;
        
        $.ajax({
            url: url,
            success: function(data){
                alert(data);
            }
        });

        return $.getJSON(url).error(function() {
            console.warn(">> Something went fubar with the getJson");
        });
    };

    return {
        getData: getData
    };
    
};
})();