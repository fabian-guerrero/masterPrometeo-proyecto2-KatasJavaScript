let cuerpo = document.querySelector("body");

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let divVacio = document.createElement("div");
cuerpo.appendChild(divVacio);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divParaP = document.createElement("div");
let pDentroDiv = document.createElement("p");
divParaP.appendChild(pDentroDiv);
cuerpo.appendChild(divParaP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
let divParaPs = document.createElement("div");
for (i = 0; i < 6; i++) {
  divParaPs.appendChild(document.createElement("p"));
}
cuerpo.appendChild(divParaPs);

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

let soyDinamicoP = document.createElement("p");
let textoSoyDinamico = document.createTextNode("Soy dinámico!");
soyDinamicoP.appendChild(textoSoyDinamico);
cuerpo.appendChild(soyDinamicoP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2Insert = document.querySelector("h2.fn-insert-here");
let textoH2 = document.createTextNode("Wubba Lubba dub dub");
h2Insert.appendChild(textoH2);

// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
let listaDesordenada = document.createElement("ul");
cuerpo.appendChild(listaDesordenada);

for (i = 0; i < apps.length; i++) {
  let itemLista = document.createElement("li");
  let insertItem = document.createTextNode(apps[i]);
  itemLista.appendChild(insertItem);
  listaDesordenada.appendChild(itemLista);
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let removerElementos = document.querySelectorAll(".fn-remove-me");
for (i = 0; i < removerElementos.length; i++) {
  removerElementos[i].remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let divMedio = document.querySelector("div");
divMedio.insertAdjacentHTML("afterend", "<p>Voy en medio!</p>");

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

let insertHereDivs = document.querySelectorAll("div.fn-insert-here");

for (i = 0; i < insertHereDivs.length; i++) {
  let insertHereP = insertHereDivs[i].appendChild(document.createElement("p"));
  let insertHereText = document.createTextNode("Voy dentro!");
  insertHereP.appendChild(insertHereText);
}
