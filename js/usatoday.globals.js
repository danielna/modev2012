var usatoday = {};

usatoday.globals = {
    APP_KEY: 
        {
            usatoday: "modev2013",
            rottentomatoes: "mre7h28j4n6cgpbk8nprw8fx",
            harpercollins: "mh9t39p9edqqqf2w2ayb94qx",
            emusic: "87dsp66dy5648u7wj7jw5e46",
            jambase: "dgevzh5h56889j8e43c44hrq",
            rdio: "ncjpuc353zyz95vhhv7d5m5y"
        },
    init_home: function() {

        console.log("init");

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
    }
};