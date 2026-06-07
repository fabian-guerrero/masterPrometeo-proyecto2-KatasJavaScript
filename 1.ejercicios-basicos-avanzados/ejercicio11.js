const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let acumulador = 0;
  for (i = 0; i < list.length; i++) {
    if (typeof list[i] == "number") {
      acumulador += list[i];
    } else if (typeof list[i] == "string") {
      acumulador += list[i].length;
    }
  }
  return acumulador / list.length;
}

let promedio = averageWord(mixedElements);
console.log(promedio);
