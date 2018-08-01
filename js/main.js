$(function() {
  console.log("ready");
  initNavigation();
  initRoutes();


  function initNavigation() {
    var root = null;
    var useHash = true; // Defaults to: false
    var hash = '#!'; // Defaults to: '#'
    window.router = new Navigo(root, useHash, hash);
  }

  function initRoutes() {
    router
      .on(function() {
        console.log("homePage");
        $("#mainContainer").load("homePage.html", null, homePageComplete);
      });
    router.on({
      'contact': function() {
        console.log("contact");
        $("#mainContainer").load("contact.html");
      }
    });
    router.on({
      'restaurants': function() {
        console.log("restaurants");
        $("#mainContainer").load("restaurants/restaurant.html");
      }
    });
    router.resolve();
  }

  function homePageComplete() {
    $("#myBtn").on('click', initVideo);
  }

  // Pause and play the video, and change the button text


  function initVideo() {
    var $video = $("#myVideo");

    var $btn = $("#myBtn");
    // debugger;
    if ($video[0].paused) {
      $video[0].play();
      $btn.html("Pause");
    } else {
      $video[0].pause();
      $btn.html("Play");
    }
  }
});