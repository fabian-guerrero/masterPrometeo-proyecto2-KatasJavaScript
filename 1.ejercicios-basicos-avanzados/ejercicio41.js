function rollDice(max) {
  return Math.floor(Math.random() * max) + 1;
}

let numeroAleatorio = rollDice(16);
console.log(numeroAleatorio);
