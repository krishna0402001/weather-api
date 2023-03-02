let weather = {
  apiKey: "ee407451b9c3565e7e38afe0d2212da9",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const c = Math.floor(temp - 273);
    // console.log(name, icon, description, icon, temp, humidity, speed);
    document.querySelector(".city").innerText = " Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = c + "  ° Celcius";
    document.querySelector(".humidity").innerText =
      "Humidity is " + humidity + " %";
    document.querySelector(".wind").innerText =
      "Wind speed is " + speed + "  km/h";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

//button working
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

//enter key
document
  .querySelector(".search-bar")
  .addEventListener("keypress", function (event) {
    if (event === "Enter") {
      event.preventDefault();
      weather.search();
    }
  });
