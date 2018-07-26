$(document).ready(function() {
  var celsius;
  var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  var apiKey = "b25ca364bc04acd2ca3e3aa725eb7097";
  weatherApiUrl += "?q=Brasov" + "&APPID=" + apiKey + "&units=metric";
  getWeatherData();

  function getWeatherData() {
    $.ajax({
      url: weatherApiUrl,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        var temprature = Math.round(data.main.temp);
        celsius = temprature;
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
});