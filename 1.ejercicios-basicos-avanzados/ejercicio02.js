const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;
console.log(jedi);

nombre = "Leia";
apellido = "Organa";
edad = 20;
console.log(
  "Soy " +
    nombre +
    " " +
    apellido +
    " , tengo " +
    edad +
    " años y soy una princesa de Alderaan.",
);

const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
console.log(
  "El precio total de dos sables de luz es: " + (sable1.precio + sable2.precio),
);

let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};
console.log(precioBaseGlobal);
let nave1PrecioFinal = precioBaseGlobal + nave1.precioBase;
let nave2PrecioFinal = precioBaseGlobal + nave2.precioBase;
console.log("El precio final de " + nave1.nombre + " es " + nave1PrecioFinal);
console.log("El precio final de " + nave2.nombre + " es " + nave2PrecioFinal);
