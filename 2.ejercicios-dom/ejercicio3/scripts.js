let cuerpo = document.querySelector("body");

// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
let listaDesordenada = document.createElement("ul");
cuerpo.appendChild(listaDesordenada);

for (i = 0; i < countries.length; i++) {
  let itemLista = document.createElement("li");
  let insertItem = document.createTextNode(countries[i]);
  itemLista.appendChild(insertItem);
  listaDesordenada.appendChild(itemLista);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let removerElemento = document.querySelector(".fn-remove-me");
removerElemento.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let prinHereDiv = document.querySelector("div[data-function='printHere']");
let listaDesordenadaCars = document.createElement("ul");
prinHereDiv.appendChild(listaDesordenadaCars);

for (i = 0; i < cars.length; i++) {
  let itemCarsLista = document.createElement("li");
  let insertCarItem = document.createTextNode(cars[i]);
  itemCarsLista.appendChild(insertCarItem);
  listaDesordenadaCars.appendChild(itemCarsLista);
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title 1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title 2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title 3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title 4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title 5", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (i = 0; i < countries2.length; i++) {
  let divContenedor = document.createElement("div");
  divContenedor.classList.add("contenedor-imagenes");
  let h4ParaDiv = document.createElement("h4");
  let imgParaDiv = document.createElement("img");
  imgParaDiv.src = countries2[i].imgUrl;
  divContenedor.appendChild(h4ParaDiv);
  divContenedor.appendChild(imgParaDiv);

  let title = document.createTextNode(countries2[i].title);
  h4ParaDiv.appendChild(title);

  cuerpo.appendChild(divContenedor);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
cuerpo.insertAdjacentHTML(
  "beforeend",
  "<button onclick='eliminarUltimo()'>Eliminar ultimo Elemento</button>",
);

function eliminarUltimo() {
  let contenedoresImagenes = document.querySelectorAll(".contenedor-imagenes");
  contenedoresImagenes[contenedoresImagenes.length - 1].remove();
}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

let contenedoresImagenes = document.querySelectorAll(".contenedor-imagenes");
for (i = 0; i < contenedoresImagenes.length; i++) {
  let contenedorId = `contenedor-${i}`;
  contenedoresImagenes[i].id = contenedorId;
  contenedoresImagenes[i].insertAdjacentHTML(
    "beforeend",
    `<button onclick='eliminarMismo("${contenedorId}")'>Eliminar este elemento</button>`,
  );
}

function eliminarMismo(contenedorId) {
  let divParaBorrar = document.getElementById(contenedorId);
  divParaBorrar.remove();
}
