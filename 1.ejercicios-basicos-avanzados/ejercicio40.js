const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  let textoEcontrado = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == text) {
      textoEcontrado = true;
      return i;
    } else {
      textoEcontrado = false;
    }
  }

  if (!textoEcontrado) {
    return "Personaje no encontrado";
  }
}

function removeItem(array, text) {
  let arrayPersonajes = array;
  let indiceDeTexto = findArrayIndex(arrayPersonajes, text);
  arrayPersonajes.splice(indiceDeTexto, 1);
  return arrayPersonajes;
}

let indiceArray = findArrayIndex(mainCharacters, "Rey");
let itemRemovido = removeItem(mainCharacters, "Han Solo");
console.log(indiceArray);
console.log(itemRemovido);
