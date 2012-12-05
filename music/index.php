<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
        
        <title>modev USA TODAY mashup :: music</title>
        <link rel="stylesheet" type="text/css" href="css/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/music.css">
    </head>
    <body>
        <h1>music</h1>
        <div class="container">
            
        </div>

        <!-- JAVASCRIPT -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>        
        <script type="text/javascript">
            var obj_details = {
                title: "<?=$_POST['title']?>",
                artist: "<?=$_POST['artist']?>",
                score: "<?=$_POST['score']?>",
                url: "<?=$_POST['url']?>"
            }
            $(".container").append(JSON.stringify(obj_details));
            
        </script>
        <script src="js/usatoday.usatodayfeed.js"></script>
    </body>
</html>