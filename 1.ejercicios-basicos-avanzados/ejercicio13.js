const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function nameFinder(nameList, elemento) {
  for (i = 0; i < nameList.length; i++) {
    if (nameList[i] === elemento) {
      encontrado = true;
      posicion = i;
      break;
    } else {
      encontrado = false;
    }
  }

  if (encontrado == true) {
    return (
      "Se encontro el elemento " + elemento + " en la posicion " + posicion
    );
  } else {
    return "No se encontro el elemento " + elemento;
  }
}

const busquedaElemento = nameFinder(names, "Bruce");
console.log(busquedaElemento);
