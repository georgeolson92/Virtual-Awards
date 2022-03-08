// Set to true if debugging needed
var debug = false;

// Initialize YouTube embed script
var tag = document.createElement("script");
tag.id = "iframe-api";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-iframe", {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

// Function tracking the YouTube player state
function onPlayerStateChange(e) {
  if (e.data == 1 && ytSeconds > 0) {
    e.target.seekTo(ytSeconds);
    ytSeconds = 0;
  }

  if (e.data === 0) {
    if (debug) {
      console.debug("ended!");
    }
    endVideo();
  }
}

// Function that jumps to a section in video. First checks if the video is already playing, if not then it starts video and plays at given time in seconds
function seekTo(seconds) {
  if (player.getPlayerState() == 1) {
    if (debug) {
      console.debug(
        "Video currently playing, set timestamp to " + seconds + "seconds."
      );
    }
    player.seekTo(seconds);
  } else {
    if (debug) {
      console.debug(
        "Video now starting, set timestamp to " + seconds + "seconds."
      );
    }
    ytSeconds = seconds;
    player.playVideo();
  }
}

//Function that pauses video
function pauseVideo() {
  if (debug) {
    console.debug("Video paused.");
  }
  player.pauseVideo();
}

//Function that ends the video
function endVideo() {
  $(".ytplayer").fadeOut("1000", function () {});

  $(".ytplayer-info").fadeOut("1000", function () {});

  $(".curtainanimation-left").each(function () {
    $(this).animate(
      {
        left: "0%",
      },
      800
    );
  });

  $(".curtainanimation-right").each(function () {
    $(this).animate(
      {
        right: "0%",
      },
      800
    );
  });

  $(".thanks").fadeIn("1000", function () {});

  $(".sharethis-inline-share-buttons .st-btn").fadeIn("1000", function () {});

  $(".sharethis-inline-share-buttons .st-label").fadeIn("1000", function () {});
}

//End of function definitions

$(document).ready(function () {
  $(".magic")
    .delay(800)
    .queue(function (next) {
      $(this).css("opacity", "1");
      $("#btnOpen").css("opacity", "1");
      next();
    });
  $(".thanks").hide();
  $(".player").hide();
  $(".player-info").hide();
  $(".ytplayer-info").hide();
  $("#categoryLink").addClass("ytplayer-down");

  $("#btnOpen").click(function () {
    $(".magic").css("opacity", "0");

    $("#btnOpen").css("opacity", "0");

    $(".spot").hide();

    $(".ytplayer").fadeIn("1000", function () {});

    $(".ytplayer-info").fadeIn("1000", function () {});

    $(".curtainanimation-left").each(function () {
      if ($(this).offset().left < 0) {
        $(this).css("left", "45%");
      } else if ($(this).offset().left > $("#container").width()) {
        $(this).animate(
          {
            left: "10%",
          },
          800
        );
      } else {
        $(this).animate(
          {
            left: "-45%",
          },
          800
        );
      }
    });

    $(".curtainanimation-right").each(function () {
      if ($(this).offset().right < 0) {
        $(this).css("right", "45%");
      } else if ($(this).offset().right > $("#container").width()) {
        $(this).animate(
          {
            right: "10%",
          },
          800
        );
      } else {
        $(this).animate(
          {
            right: "-45%",
          },
          800
        );
      }
    });

    $(".magic")
      .delay(1000)
      .queue(function (next) {
        $(".magic").hide();
        $("#btnOpen").hide();
      });
  });

  $(".card a").click(function () {
    $("#categoryLink").removeClass("ytplayer-up");
    $("#categoryLink").addClass("ytplayer-down");
    $(".ytplayer-info").removeClass("ytplayerinfo-up");
    $(".ytplayer-info").addClass("ytplayerinfo-down");
  });

  $("#categoryLink").click(function () {
    if ($("#categoryLink").hasClass("ytplayer-down")) {
      $("#categoryLink").removeClass("ytplayer-down");
      $("#categoryLink").addClass("ytplayer-up");
      $(".ytplayer-info").removeClass("ytplayerinfo-down");
      $(".ytplayer-info").addClass("ytplayerinfo-up");
    } else {
      $("#categoryLink").removeClass("ytplayer-up");
      $("#categoryLink").addClass("ytplayer-down");
      $(".ytplayer-info").removeClass("ytplayerinfo-up");
      $(".ytplayer-info").addClass("ytplayerinfo-down");
    }
  });

  $(".ytplayer-up").click(function () {
    $("#categoryLink").removeClass("ytplayer-up");
    $("#categoryLink").addClass("ytplayer-down");

    $(".ytplayer-info").removeClass("ytplayerinfo-up");
    $(".ytplayer-info").addClass("ytplayerinfo-down");
  });
});
