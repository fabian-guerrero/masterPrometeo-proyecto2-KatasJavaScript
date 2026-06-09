const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

let antes2000 = 0;
let despues2000 = 0;

for (i = 0; i < movies.length; i++) {
  if (movies[i].releaseYear < 2000) {
    antes2000 += 1;
  } else {
    despues2000 += 1;
  }
}

console.log(antes2000 + " peliculas son de antes del año 2000");
console.log(despues2000 + " peliculas son del año 2000 o posteriores");
