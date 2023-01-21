var t = 0;

let weather = {
    apiKey : "5868219589e0287d9c91158d7a224ff4",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&limit=1&appid="+this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        t = temp;

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".desc").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humid").innerText = "Humidity :  " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed :  " + speed + "km/hr";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})
