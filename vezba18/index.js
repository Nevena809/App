const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const currentBtn = document.getElementById("currentBtn");
const daysBtn = document.getElementById("daysBtn");

const card = document.querySelector(".card");
const apiKey = "146ebbd2e0e3372876138c9ed29fc9d5";

currentBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const city = cityInput.value;
  if (city) {
    try {
      const currentWeatherData = await getCurrentWeatherData(city);
      displayCurrentWeatherInfo(currentWeatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Enter a city");
  }
});

daysBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const city = cityInput.value;
  if (city) {
    try {
      const daysWeatherData = await get5DayWeatherData(city);
      const index = 0;
      display5DaysWeatherInfo(daysWeatherData, index);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Enter a city");
  }
});

async function getCurrentWeatherData(city) {
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(currentWeatherUrl);

  if (!response.ok) {
    throw new Error("Could not fetch a current weather data");
  } else {
    return await response.json();
  }
}

async function get5DayWeatherData(city) {
  const daysWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  const response = await fetch(daysWeatherUrl);

  if (!response.ok) {
    throw new Error("Could not fetch a weather data");
  } else {
    const p = await response.json();
    console.log(p);

    return p;
  }
}

function displayCurrentWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.innerHTML = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.innerHTML = city;
  card.appendChild(cityDisplay);
  cityDisplay.classList.add("cityDisplay");

  tempDisplay.innerHTML = `${(temp - 273.15).toFixed(1)}°C`;
  card.appendChild(tempDisplay);
  tempDisplay.classList.add("tempDisplay");

  humidityDisplay.innerHTML = `Humidity: ${humidity}%`;
  card.appendChild(humidityDisplay);
  humidityDisplay.classList.add("humidityDisplay");

  descDisplay.innerHTML = description;
  card.appendChild(descDisplay);
  card.classList.add("descDisplay");

  weatherEmoji.innerHTML = getWeatherEmoji(id);
  card.appendChild(weatherEmoji);
  weatherEmoji.classList.add("weatherEmoji");
}

function display5DaysWeatherInfo(data, index) {
  const nameCity = data.city.name;
  const temp = data.list[index].main.temp;
  const day = data.list[index].dt_txt;
  const weather = data.list[index].weather[index].main;
  const weatherId = data.list[index].weather[index].id;
  const weatherDescription = data.list[index].weather[index].description;

  console.log(weatherDescription);
}

function getWeatherEmoji(weatherId) {
  const weatherEmoji = document.createElement("p");
  weatherEmoji.innerHTML = weatherId;

  if (weatherId >= 200 && weatherId < 300) {
    return "🌩";
  } else if (weatherId >= 300 && weatherId < 400) {
    return "🌦";
  } else if (weatherId >= 500 && weatherId < 600) {
    return "🌧";
  } else if (weatherId >= 600 && weatherId < 700) {
    return "🌨";
  } else if (weatherId >= 700 && weatherId < 800) {
    return "🌪";
  } else if (weatherId === 800) {
    return "☀️";
  } else if (weatherId >= 800 && weatherId < 810) {
    return "☁️";
  } else {
    return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.innerHTML = message;
  errorDisplay.classList.add("errorDisplay");

  card.innerHTML = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
