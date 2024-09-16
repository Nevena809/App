const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const currentBtn = document.getElementById("currentBtn");
const daysBtn = document.getElementById("daysBtn");

const card = document.querySelector(".card");
const cards = document.querySelector(".cards");
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
      element = 0;
      display5DaysWeatherInfo(daysWeatherData);
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
  descDisplay.classList.add("descDisplay");

  weatherEmoji.innerHTML = getWeatherEmoji(id);
  card.appendChild(weatherEmoji);
  weatherEmoji.classList.add("weatherEmoji");
}

function display5DaysWeatherInfo(data) {
  card.innerHTML = "";
  cards.innerHTML = "";
  card.style.display = "flex";

  let dateArray = [];
  for (let i = 0; i < data.list.length; i++) {
    const dates = new Date(data.list[i].dt_txt).toISOString().split("T")[0];
    dateArray.push(dates);
  }

  dateArray = new Set(dateArray);
  dateArray = Array.from(dateArray);

  let array = [];

  for (let j = 0; j < dateArray.length; j++) {
    let array2 = [];
    for (let i = 0; i < data.list.length; i++) {
      const dates = data.list[i].dt_txt.split(" ")[0];
      if (dates === dateArray[j]) {
        array2.push(data.list[i]);
      }
    }
    array.push(array2);
  }

  console.log(array);

  let sum = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum[i] = (sum[i] || 0) + array[i][j].main.temp;
    }
    const n = array[i].length;
    const avg = sum[i] / n;

    const temperature = (avg - 273.15).toFixed(1);
    sum[i] = temperature;
  }

  console.log(sum);

  for (let i = 0; i <= data.list.length; i = i + 8) {
    const cardDays = document.createElement("div");
    cardDays.classList.add("cardDays");
    cards.classList.add("cards");

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const humidity = data.list[i].main.humidity;
    const temp = data.list[i].main.temp;
    const id = data.list[i].weather[0].id;
    const description = data.list[i].weather[0].description;
    const day = new Date(data.list[i].dt_txt);
    let currentDayOfWeek = daysOfWeek[day.getDay()];

    const humidityDisplay = document.createElement("p");
    const tempDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const dayDisplay = document.createElement("p");

    dayDisplay.innerHTML = `
    ${currentDayOfWeek}  `;
    cardDays.appendChild(dayDisplay);
    dayDisplay.classList.add("dayDisplay");

    weatherEmoji.innerHTML = getWeatherEmoji(id);
    cardDays.appendChild(weatherEmoji);
    weatherEmoji.classList.add("weatherEmoji");

    for (let i = 0; i < sum.length; i++) {
      tempDisplay.innerHTML = `${sum[i / 8]}°C`;
      cardDays.appendChild(tempDisplay);
      tempDisplay.classList.add("tempDisplay");
    }

    // console.log(sum[0]);

    descDisplay.innerHTML = description;
    cardDays.appendChild(descDisplay);
    descDisplay.classList.add("descDisplay");

    humidityDisplay.innerHTML = `Humidity: ${humidity}%`;
    cardDays.appendChild(humidityDisplay);
    humidityDisplay.classList.add("humidityDisplay");

    cards.appendChild(cardDays);
    cards.classList.add("cards");
  }
  const name = data.city.name;
  const cityDisplay = document.createElement("h1");

  cityDisplay.innerHTML = name;
  card.appendChild(cityDisplay);
  cityDisplay.classList.add("cityDisplay");

  card.appendChild(cards);
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

// function temperatureDisplayIn5Days(data) {
//   let dateArray = [];
//   console.log(data.list);

//   for (let i = 0; i < data.list.length; i++) {
//     const dates = new Date(data.list[i].dt_txt.split(" ")[0]);
//     dateArray.push(dates);
//   }
//   console.log(dateArray);
// }
