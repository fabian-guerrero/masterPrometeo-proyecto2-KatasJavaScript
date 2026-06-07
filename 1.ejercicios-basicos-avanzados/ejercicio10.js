const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let acumulador = 0;
  for (i = 0; i < numberList.length; i++) {
    acumulador += numberList[i];
  }

  return acumulador / numberList.length;
}

let promedio = average(numbers);
console.log(promedio);
