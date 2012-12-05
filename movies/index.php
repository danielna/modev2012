<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
         <!-- Sets initial viewport load and disables zooming  -->
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">

        <!-- Makes your prototype chrome-less once bookmarked to your phone's home screen -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        
        <title>modev USA TODAY mashup :: movies</title>
        <link rel="stylesheet" type="text/css" href="../css/normalize.css">
        <link rel="stylesheet" type="text/css" href="../css/ratchet.css">
        <link rel="stylesheet" type="text/css" href="../css/movies.css">
        <link href='http://fonts.googleapis.com/css?family=Lato:900' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <header class="bar-title">
            <a class="button-prev" href="../" data-transition="slide-in">
                Previous
            </a>
            <h1 class="title">Review Details</h1>
        </header>
        <div class="content">
            <div class="content-padded">
                <div class="usatoday">
                    <div class="ut-title"></div>
                    <div class="ut-score">
                        <div class="break-line">USA TODAY</div>
                        <div class="stars"></div>
                    </div>
                    <div class="ut-url"><a href="" target="_blank"></a></div>
                    <div class="ut-mpaa"></div>
                    <div class="ut-actors"></div>
                    
                    
                </div>
                <div class="rottentomatoes">

                    <img class="poster_url" src=""/>
                    <div class="clearfix"></div>
                    <hr/>
                    <img class="rt" src="../css/img/rotten.png"/>
                    <div class="critics">
                        <h2 class="critics-header">What Critics Say</h2>
                        <div class="critics_consensus"></div>
                    </div>
                    <div class="ratings">
                        <div class="left">
                            <div class="ratings_critics">Critics Rating</div>
                            <div class="ratings_critics_score"></div>
                        </div>
                        <div class="right">
                            <div class="ratings_audience">Audiences Rating</div>
                            <div class="ratings_audience_score"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- JAVASCRIPT -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>        
        <script src="../js/vendor/ratchet/ratchet.js"></script>
        <script src="../js/usatoday.globals.js"></script>
        <script src="../js/usatoday.rottentomatoes.js"></script>
        <script type="text/javascript">
            $(document).ready(function() {
                var obj_details = {
                    title: "<?=$_POST['title']?>",
                    actors: "<?=$_POST['actors']?>",
                    mpaa: "<?=$_POST['mpaa']?>",
                    score: "<?=$_POST['score']?>",
                    url: "<?=$_POST['url']?>"
                };

                $("h1.title").text(obj_details.title);

                for (var det in obj_details)
                {        
                    var temp = obj_details[det];
                    if (det === "url") {
                        $(".usatoday .ut-url a").attr("href", temp);
                        $(".usatoday .ut-url a").text("Read the USA TODAY review!");
                    } else if (det === "score") {
                        $(".usatoday .stars").addClass("num-" + temp.replace('.', ''));
                    } else {
                        $(".usatoday").find(".ut-" + det).append(obj_details[det]);
                    }
                }

                var rottentomatoes = new usatoday.rottentomatoes();
                rottentomatoes.getData(obj_details.title);

                // window.addEventListener('push', usatoday.init());
        });
        </script>
    </body>
</html>