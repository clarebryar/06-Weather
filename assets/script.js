//this one is to get the lat and lon of a city: 


//this one is for the lat and lon to get the weather: 
var apiLatLon = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a4b52d54f93021519848eaf25cda8f87'

//this one gets the weather icons you'll use: 
var apiIcons = 'https://api.openweathermap.org/img/w/{icon}.png'  
var cityNameInputEl = document.querySelector("#cityname");
var searchButton = document.querySelector('#searchButton')

var searchHandler = function (event) {
    event.preventDefault();
 var cityName = cityNameInputEl.value.trim();
if (cityName) {
    getCity(cityName)
    console.log(cityName)
} else {
    document.querySelector('#notvalidcity').textContent = "sorry can't find that city"
}
}

function getCity (cityName) {
    var apiCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + ',US&limit=5&appid=a4b52d54f93021519848eaf25cda8f87';   
    fetch(apiCity).then(function (response) {
        console.log(response.status);
       return response.json()
       .then(function (data) { 
        console.log(data);
        
    })
})
};



searchButton.addEventListener('click', searchHandler);