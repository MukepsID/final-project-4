let weather = {
    "apiKey": "11c766ad1e4b303fa7b09dcd6167d3a8",
    fetchWeather: function (city) {
     
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            +"&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon,  description } = data.weather[0];
        const { temp } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,speed)

        document.querySelector(".city").innerText = "City: " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "KM/h"
        
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})