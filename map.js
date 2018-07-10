var map;

function initMap() {

  var hof = {
    lat: 45.641205,
    lng: 25.589640
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: hof,
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: hof,
    map: map
  });
}

// var APPID = "1fb57b463f5e267dec9fa5cbf18bd926";
// var temp;
// var loc;
// var icon;
// var humidity;
//
// function updateByZip(zip) {
//   var url = "http://api.openweathermap.org/data/2.5/weather?" +
//     "zip=" + zip +
//     "APPID=" + APPID;
//   sendRequest(url);
// }
//
// function sendRequest(url) {
//   var xmlhttp = new XMLHTTPRequest();
//   xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.state == 200) {
//       var data = JSON.parse(xmlhttp.responseText);
//       var weather = {};
//       weather.loc = data.name;
//       weather.humidity = data.main.humidity;
//       weather.temp = data.main.temp;
//       update(weather);
//     }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }
//
// function update(weather) {
//   temp.innerHTML = weather.temp;
//   loc.innerHTML = weather.loc;
//   humidity.innerHTML = weather.humidity;
// }
//
// window.onload = function() {
//   temp = document.getElementById('temperature');
//   loc = document.getElementById('location');
//   humidity = document.getElementById('humidity');
//   icon = document.getElementById('icon');
//
//   updateByZip(87110);
// }