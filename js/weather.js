$(document).ready(function() {
  var celsius;
  var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  var apiKey = "b25ca364bc04acd2ca3e3aa725eb7097"; //get your own API keys
  getLatLong();

  function getWeatherData() {
    $.ajax({
      url: weatherApiUrl,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        var temprature = Math.round(data.main.temp);
        celsius = temprature;
        // fahrenheit = celsius * 1.8 + 32;
        var icon = data.weather[0].icon;
        var weatherDetail = data.weather[0].main + ", " + data.weather[0].description;
        $('.weatherDetail').html(weatherDetail);
        $('.iconpic>img').attr('src', 'http://openweathermap.org/img/w/' + icon + '.png');
        $('.temp').html(temprature + "&#8451;");
      },
      error: function(err) {
        alert('Oops something went wrong, Please try again.');
        console.log(err);
      }
    });
  }

  function getLatLong() {
    $.ajax({
      url: "https://geoip-db.com/json/",
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        var lat = data.latitude;
        var long = data.longitude;
        $('.city').html(data.city);
        $('.country').html(data.country_name);
        weatherApiUrl += "?lat=" + lat + "&lon=" + long + "&APPID=" + apiKey + "&units=metric";
        getWeatherData();
      },
      error: function(err) {
        alert('Oops something went wrong, Please try again.');
        console.log(err);
      }
    });
  }
});