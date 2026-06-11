let today = new Date();
let actualYear = today.getFullYear();
let actorName = "";
let actualAge = 0;

const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

let actorsAge = [];

function calculateActorsAges(actors) {
  for (const actor in actors) {
    actorName = actors[actor].name;
    actualAge = actualYear - actors[actor].born;
    actorsAge.push({ name: actorName, age: actualAge });
  }

  return actorsAge;
}

actorsAge = calculateActorsAges(actors);
console.log(actorsAge);
