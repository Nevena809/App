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
