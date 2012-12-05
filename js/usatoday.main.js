$(document).ready(function() {
    
    var init = function() {
        var usaTodayFeed = new usatoday.usatodayfeed();
        usaTodayFeed.getMovies();
        usaTodayFeed.getMusic();

        $(".breakingnews ul.list li a").live("click", function(e) { 
            e.preventDefault();
            var data = $(this).data();
            for (var attr in data) {
                $("#breakingnewsForm").find("input[name=" + attr+ "]").val(data[attr]);
            }
        });

        $(".bookreviews ul.list li a").live("click", function(e) { 
            e.preventDefault();
            var data = $(this).data();
            for (var attr in data) {
                $("#bookreviewsForm").find("input[name=" + attr+ "]").val(data[attr]);
            }
            $("#bookreviewsForm").submit();
        });

        $(".moviereviews ul.list li a").live("click", function(e) { 
            e.preventDefault();
            var data = $(this).data();
            for (var attr in data) {
                $("#moviereviewsForm").find("input[name=" + attr+ "]").val(data[attr]);
            }
            $("#moviereviewsForm").submit();

        });

        $(".musicreviews ul.list li a").live("click", function(e) { 
            e.preventDefault();
            var data = $(this).data();
            for (var attr in data) {
                $("#musicreviewsForm").find("input[name=" + attr+ "]").val(data[attr]);
            }
            $("#musicreviewsForm").submit();
        });
    };

    init();

    window.addEventListener('push', init());
});