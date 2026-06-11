const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals[country] !== undefined) {
    return capitals[country];
  } else {
    return "No existe el pais en la lista";
  }
}

let capital = getCapital("Spain");

console.log(capital);
