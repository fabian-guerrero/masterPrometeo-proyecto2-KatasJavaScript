// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let cuerpo = document.querySelector("body");
const listaContenedora = document.createElement("ul");
cuerpo.appendChild(listaContenedora);

for (i = 0; i < albums.length; i++) {
  let itemLista = document.createElement("li");
  let textoItem = document.createTextNode(albums[i]);
  itemLista.appendChild(textoItem);
  listaContenedora.appendChild(itemLista);
}
