const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const peliculaPequenia = [];
const peliculaMediana = [];
const peliculaGrande = [];

for (i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    peliculaPequenia.push(movies[i]);
  } else if (
    movies[i].durationInMinutes >= 100 &&
    movies[i].durationInMinutes <= 200
  ) {
    peliculaMediana.push(movies[i]);
  } else {
    peliculaGrande.push(movies[i]);
  }
}

console.log("Peliculas pequeñas: ", peliculaPequenia);
console.log("Peliculas medianas: ", peliculaMediana);
console.log("Peliculas grandes: ", peliculaGrande);
