function initMap() {

  var hof = {
    lat: 45.641205,
    lng: 25.589640
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    center: hof,
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: hof,
    map: map
  });
}