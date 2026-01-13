const image = document.getElementById("images");
const pokemonName = document.getElementById("pokemonName");
const hp = document.getElementById("p");
const searchPokemon = document.getElementById("search");
const button = document.getElementById("button");

// async function getPokemon() {
//   try {
//     const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     if (!pokemon.ok) {
//       console.log("pokemon api didn't get fetch");
//     }
//     const pokemonData = await pokemon.json();
//     const pokemons = searchPokemon.value;

//     image.src = pokemonData.sprites.front_default;
//     pokemonName.textContent = pokemonData.species.name.toUpperCase();
//     hp.textContent = `HP: ${pokemonData.stats[0].base_stat}`;

//     console.log(searchPokemon.value);
//   } catch (error) {
//     console.log("something went wrong error: ", error);
//   }
// }

// getPokemon();

button.addEventListener("click", async () => {
  const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon.value}`);
  if (!poke.ok) {
    console.log("pokemon api didn't get fetch");
  }
  const responseData = await poke.json();
  image.src = responseData.sprites.front_default;
  pokemonName.textContent = responseData.species.name.toUpperCase();
  hp.textContent = `HP: ${responseData.stats[0].base_stat}`;

  console.log(responseData);
});
