const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let acumulador = 0;
  for (i = 0; i < numberList.length; i++) {
    acumulador += numberList[i];
  }
  return acumulador;
}

let sumaArray = sumNumbers(numbers);
console.log(sumaArray);
