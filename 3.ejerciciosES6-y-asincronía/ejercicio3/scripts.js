// 3.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

let cuerpo = document.querySelector("body");

const nombres = users.map((user) => {
  return user.name;
});

console.log(nombres);

// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const usersB = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nombresB = users.map((userB) => {
  if (userB.name.slice(0, 1) == "A") {
    userB.name = "Anacleto";
  }

  return userB.name;
});

console.log(nombresB);

// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const listaDesordenada = document.createElement("ul");
cuerpo.appendChild(listaDesordenada);
let textoItem = "";

const mostrarCities = cities.map((cities) => {
  let itemLista = document.createElement("li");
  if (cities.isVisited) {
    textoItem = document.createTextNode(`${cities.name} (Visitado)`);
  } else {
    textoItem = document.createTextNode(`${cities.name}`);
  }
  itemLista.appendChild(textoItem);
  console.log(itemLista);
  listaDesordenada.appendChild(itemLista);
});
