<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="George Olson, 2020-2022" />
    <title>SALPies 2020: Ta-Da!</title>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/715c69a354.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.typekit.net/rvs6ruk.css" />

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <!-- Favicons -->
    <link rel="apple-touch-icon" href="img/favicons/apple-touch-icon.png" sizes="180x180" />
    <link rel="icon" href="img/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
    <link rel="icon" href="img/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
    <link rel="icon" href="img/favicons/favicon.ico" />

    <!-- Styles -->
    <link href="css/style.css" rel="stylesheet" />

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=5ecd6022cbdf4100127d4004&product=inline-share-buttons" async="async"></script>
    <script type="text/javascript" src="js/scripts.js" async="async"></script>
  </head>

  <!-- Body -->
  <body class="text-center">
    <main role="main" class="inner cover">
      <div class="wrapper">
        <div class="curtain-left curtainanimation-left"></div>
        <div class="curtain-right curtainanimation-right"></div>
        <div class="spot"><img src="img/spotlight.png" alt="Spotlight image for backdrop"/></div>

        <div class="thanks">
          <div class="row">
            <div class="col-lg-12">
              <h2>Thanks for watching!</h2>
            </div>
            <div class="col-lg-12 btn-col">
              <button type="button" onClick="window.location.reload();" class="btn btn-primary btn-open btn-startagain">
                Watch Again
              </button>
              <div class="socialmedia">
                <div class="sharethis-inline-share-buttons"></div>
                <p>Find us online:</p>
                <a href="https://www.facebook.com/studentactivitiesandleadership/"><i class="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/salpconnect"><i class="fab fa-twitter-square"></i></a>
                <a href="https://www.instagram.com/student_leaders_portland_state/"><i class="fab fa-instagram-square"></i></a>
                <a href="#"><i class="fab fa-youtube-square"></i></a>
              </div>
            </div>
          </div>
        </div>

        <?php include 'templates/magic.html'; ?>

        <?php include 'templates/player.html'; ?>

        <div class="row">
          <div class="col-lg-12 btn-col">
            <button type="button" id="btnOpen" class="btn btn-primary btn-open">
              Open Sesame!
            </button>
          </div>
        </div>

        <!-- includes ytplayerinfo-down class by default to keep it down from view until button clicked -->
        <div class="ytplayer-info ytplayerinfo-down">
          <?php include 'templates/categories.html'; ?>
        </div>
      </div>
    </main>
  </body>

</html>