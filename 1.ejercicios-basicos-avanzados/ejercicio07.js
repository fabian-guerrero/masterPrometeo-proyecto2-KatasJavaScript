function greaterNumber(numberOne, numberTwo) {
  if (numberOne === numberTwo) {
    console.log("Ambos numeros son iguales");
  } else if (numberOne > numberTwo) {
    console.log(numberOne + " es mayor que " + numberTwo);
  } else {
    console.log(numberTwo + " es mayor que " + numberOne);
  }
}

greaterNumber(6, 10);
