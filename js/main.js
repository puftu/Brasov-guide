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
      'shopping': function() {
        console.log("shopping");

        // window.markerData =
        $.ajax({
          url: "data/shopping.json",
        }).then(function(data) {
          console.log(data);
          window.markerData = data;
          $("#mainContainer").load("places/places.html", null, initPage);
        });
      }
    });
    router.on({
      'restaurants': function() {
        console.log("restaurants");
        $.ajax({
          url: "data/restaurants.json",
        }).then(function(data) {
          console.log(data);
          window.markerData = data;
          $("#mainContainer").load("places/places.html", null, initPage);
        });
      }
    });
    router.on({
      'attractions': function() {
        console.log("attractions");
        $.ajax({
          url: "data/attractions.json",
        }).then(function(data) {
          console.log(data);
          window.markerData = data;
          $("#mainContainer").load("places/places.html", null, initPage);
        });
      }
    });
    router.on({
      'hotels': function() {
        console.log("hotels");
        $.ajax({
          url: "data/hotels.json",
        }).then(function(data) {
          console.log(data);
          window.markerData = data;
          $("#mainContainer").load("places/places.html", null, initPage);
        });
      }
    });
    router.on({
      'gallery': function() {
        console.log("gallery");
        $("#mainContainer").load("gallery/gallery.html");
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


// gallery
$(function() {
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});
