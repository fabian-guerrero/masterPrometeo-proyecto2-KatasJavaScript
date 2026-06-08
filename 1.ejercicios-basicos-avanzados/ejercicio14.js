const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  const repetidos = [];

  for (let word of list) {
    if (repetidos[word]) {
      repetidos[word] = repetidos[word] + 1;
    } else {
      repetidos[word] = 1;
    }
  }

  return repetidos;
}

console.log(repeatCounter(words));
