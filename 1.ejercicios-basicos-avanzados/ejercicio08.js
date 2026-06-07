const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let stringMasLargo = "";
  for (let i = 0; i < stringList.length; i++) {
    if (stringMasLargo.length < stringList[i].length) {
      stringMasLargo = stringList[i];
    }
  }

  console.log("La palabra mas larga del array es: " + stringMasLargo);
}

findLongestWord(avengers);
