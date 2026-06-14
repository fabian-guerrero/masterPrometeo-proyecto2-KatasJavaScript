const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(lista, indice1, indice2) {
  const listaElementos = lista;
  let elemento1 = listaElementos[indice1];
  let elemento2 = listaElementos[indice2];

  listaElementos[indice1] = elemento2;
  listaElementos[indice2] = elemento1;

  return listaElementos;
}

let listaNueva = swap(fantasticFour, 0, 3);
console.log(listaNueva);
