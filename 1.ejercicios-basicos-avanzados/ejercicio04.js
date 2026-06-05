const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);

aldeanos.push("Cervasio");
console.log(aldeanos);

aldeanos[0] = "Bambina";
console.log(aldeanos);

console.log(aldeanos.reverse());

const aldeanosCopia = aldeanos.map((aldeano) => {
  if (aldeano === "Narciso") {
    return "Canela";
  }
  return aldeano;
});

console.log(aldeanosCopia);

console.log(aldeanos.pop());
