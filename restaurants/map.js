$(function() {
  initMarkers();
  initRestaurantTemplate();
  $("#gauraDulce").on("click", addMarker);



})

function initMarkers() {
  window.markers = [{
      name: "hirsher",
      picture: "casa-hirscher.png",
      coordonates: {
        lat: 45.641194,
        lng: 25.589639
      }
    },
    {
      name: "gauraDulce",
      picture: "gaura-dulce-9.png",
      coordonates: {
        lat: 45.641176,
        lng: 25.590090
      }
    },
    {
      name: "vinoESapori",
      coordonates: {
        lat: 45.640593,
        lng: 25.586722
      }
    },
    {
      name: "Sergiana",
      coordonates: {
        lat: 45.645223,
        lng: 25.589811
      }
    },
    {
      name: "Bistro",
      coordonates: {
        lat: 45.643226,
        lng: 25.590797
      }
    },
    {
      name: "Festival",
      coordonates: {
        lat: 45.643904,
        lng: 25.594023
      }
    },
    {
      name: "Gratar Urban ",
      coordonates: {
        lat: 45.643902,
        lng: 25.590466
      }
    },
    {
      name: "Trattorian ",
      coordonates: {
        lat: 45.643172,
        lng: 25.590186
      }
    },
  ]
}

function initMap() {

  window.map = new google.maps.Map(document.querySelector('#map'), {
    center: markers[0].coordonates,
    zoom: 17
  });

}

function addMarker(event) {
  var restaurantId = $(this).data("restaurantId");
  console.log(restaurantId);
  var marker = new google.maps.Marker({
    position: markers[restaurantId].coordonates,
    map: map
  });

}

function initRestaurantTemplate() {
  var rendered = Mustache.render($('#restaurantTemplate').html(), {
    "restaurants": markers
  });
  $('.restaurantContainer').html(rendered);
}