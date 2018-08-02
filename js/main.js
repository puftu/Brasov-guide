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

        function initMarkerData() {
          window.markerData = [{
              name: "Coresi Shopping Resort",
              picture: "coresi.jpg",
              index: 0,
              id: "coresi",
              rating: 4.6,
              address: "Strada Zaharia Stancu 1, Brașov",
              website: "https://www.coresibrasov.ro/",
              nameWebSite: "coresibrasov.ro",
              phone: "0736 738 787",
              coordonates: {
                lat: 45.672618,
                lng: 25.615557
              }
            },
            {
              name: "Eliana Mall",
              picture: "eliana.jpg",
              index: 1,
              id: "eliana",
              rating: 4.1,
              address: "Strada Bazaltului 2, Brașov",
              website: "https://eliana-mall.ro/",
              nameWebSite: "eliana-mall.ro",
              phone: "0268 549 073",
              coordonates: {
                lat: 45.656823,
                lng: 25.561943
              }
            },
            {
              name: "Unirea Shopping Center",
              picture: "unirea.jpg",
              index: 2,
              id: "unirea",
              rating: 3.6,
              address: "Bulevardul Gării 3A, Brașov",
              website: "http://www.unireashop.ro/",
              nameWebSite: "unireashop.ro",
              phone: "0268 301 030",
              coordonates: {
                lat: 45.661133,
                lng: 25.608403
              }
            },
            {
              name: "Star Shopping Center",
              picture: "star.jpg",
              index: 3,
              id: "star",
              rating: 4.7,
              address: "Strada Nicolae Bălcescu 62, Brașov",
              website: "http://www.starcom.ro/",
              nameWebSite: "starcom.ro",
              phone: "0268 419 323",
              coordonates: {
                lat: 45.643681,
                lng: 25.597442
              }
            },
          ];
        }

        initMarkerData();
        $("#mainContainer").load("shopping/shopping.html", null, initPage);

      }
    });
    router.on({
      'restaurants': function() {
        console.log("restaurants");
        $("#mainContainer").load("restaurants/restaurant.html");
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