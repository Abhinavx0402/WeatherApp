const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  getWeather(city);
});

async function getWeather(city) {

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    // JSON Parsing
    const data = await response.json();

    // DOM Updates
    cityName.innerText = data.name;
    temperature.innerText = `${data.main.temp}°C`;
    description.innerText = data.weather[0].description;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} km/h`;

  } catch (error) {
    alert("Error fetching weather data");
  }
}