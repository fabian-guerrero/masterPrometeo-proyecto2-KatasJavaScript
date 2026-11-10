let contenedorImagen = document.getElementsByClassName("random-image");
contenedorImagen = contenedorImagen[0];

let numeroPokemon = Math.floor(Math.random() * 150) + 1;

const pokemonData = fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let imagenPokemon = data.sprites.other.home.front_default;
    contenedorImagen.src = imagenPokemon;
  });
