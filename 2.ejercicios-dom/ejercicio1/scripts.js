// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let showmeButton = document.querySelector(".showme");
console.log(showmeButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let pilladoH1 = document.querySelector("h1#pillado");
console.log(pilladoH1);

// 1.3 Usa querySelector para mostrar por consola todos los p
let todosLosP = document.querySelectorAll("p");
for (i = 0; i < todosLosP.length; i++) {
  console.log(todosLosP[i]);
}
s;

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let todosLosPokemon = document.querySelectorAll(".pokemon");
for (i = 0; i < todosLosPokemon.length; i++) {
  console.log(todosLosPokemon[i]);
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
let todosLosTestMe = document.querySelectorAll("[data-function='testMe']");
for (i = 0; i < todosLosTestMe.length; i++) {
  console.log(todosLosTestMe[i]);
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
let soloTestMe3 = document.querySelectorAll("[data-function='testMe']");
console.log(soloTestMe3[2]);
