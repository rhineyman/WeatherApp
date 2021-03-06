const cityName =document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const uvIndex = document.getElementById("uvIndex");
const forecast = document.getElementById("forecast");

const history = document.getElementById("historyItems");

const apiKey = "3d6d91ee3b7dd01993df98095dbd1320";
const cityUrl0 = "http://api.openweathermap.org/data/2.5/weather?q=";
const cityUrl1 = "&appid=";
const uviUrl0 = "http://api.openweathermap.org/data/2.5/uvi?lat=";
const uviUrl1 = "&lon="

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", citySearch);


function citySearch () {
    var searchInput = document.getElementById("searchInput");
    var searchInput = searchInput.value;
    var cityUrl = cityUrl0 + searchInput + cityUrl1 + apiKey;
    console.log(searchInput);
    fetch(cityUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temp").textContent = "Temperature: " + data.main.temp + " K";
        document.getElementById("humidity").textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById("windSpeed").textContent = "Wind Speed: " + data.wind.speed + "mph";
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        console.log(lat, lon);
        var uviUrl = uviUrl0 + lat + uviUrl1 + lon + cityUrl1 + apiKey;
        fetch(uviUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (uviData){
            document.getElementById("uvIndex").textContent = "UV Index: " + uviData.value;


            console.log(uviData);



        });
    });
}

