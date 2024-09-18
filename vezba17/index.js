async function fetchData() {
  const fetchBtn = document.getElementById("fetchBtn");
  const pokemonName = document.getElementById("fetchInput").value.toLowerCase();
  const pokemonImg = document.getElementById("fetchImg");
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      console.log("Could not fetch data");
    } else {
      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      pokemonImg.src = pokemonSprite;
      pokemonImg.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
}

dayDisplayButoon.addEventListener("click", (event) => {
  event.preventDefault();
  const currentDate = currentDayOfWeek;

  const array = dateNewArray(data);
  console.log(array);

  const weatherList = [];

  for (let i = 0; i < array[i].length; i++) {
    const dates = array[i][0].dt_txt.split(" ")[0];

    if (dates === currentDate) {
      for (let j = 0; j < array[i].length; j++) {
        weatherList.push({
          humidity: array[i][j].main.humidity,
          temp: array[i][j].main.temp,
          id: array[i][j].weather[0].id,
          description: array[i][j].weather[0].description,
          date: array[i][j].dt_txt,
        });
      }
      // console.log(dates);
      // console.log(currentDate);

      for (let i = 0; i < weatherList.length; i++) {
        console.log(weatherList[i]);
      }
    }

    // weatherList.push({
    //   humidity: array[i][i].main.humidity,
    //   temp: array[i][i].main.temp,
    //   id: array[i][i].weather[0].id,
    //   description: array[i][i].weather[0].description,
    //   date: array[i][i].dt_txt,
    // });
  }
});
