$(function() {
  initMarkers();
  initRestaurantsTemplate();
  $(".clickable").on("click", addMarker);

})

function initMarkers() {
  // window.markers =
}

function initMap() {

  window.map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: 45.642291,
      lng: 25.588908
    },
    zoom: 16
  });
}

function addMarker(event) {
  var restaurantId = $(this).data("markerIndex");
  var marker = new google.maps.Marker({
    position: markers[restaurantId].coordonates,
    map: new google.maps.Map(document.querySelector('#map'), {
      center: markers[restaurantId].coordonates,
      zoom: 18,

    })
  });
}

function initRestaurantsTemplate() {
  var rendered = Mustache.render($('#restautantTemplate').html(), {
    "restaurant": markers
  });
  $('.restaurantContainer').html(rendered);
}