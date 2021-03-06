console.log("linked");

const apiKey = "3d6d91ee3b7dd01993df98095dbd1320";

const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const uvIndex = document.getElementById("uvIndex");
const forecast = document.getElementById("forecast");

const history = document.getElementById("historyItems");

const url0 = "http://api.openweathermap.org/data/2.5/weather?q=";
const url1 = "&appid="

const searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("click", citySearch);


function citySearch () {
    var searchInput = document.getElementById("searchInput");
    var searchInput = searchInput.value;
    var finalUrl = url0 + searchInput + url1 + apiKey;
    console.log(searchInput);
    fetch(finalUrl)
    .then(response => {
        return response.json();
    })
    .then(users => {
        console.log(users);
    });
}

