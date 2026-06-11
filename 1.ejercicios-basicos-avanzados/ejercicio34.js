const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

let moviesDuration = 0;
let promedioPeliculas = 0;
let moviesAmount = 0;

function averageMovieDuration(movies) {
  for (const movie of movies) {
    moviesDuration += movie.duration;
    moviesAmount += 1;
  }
  promedioPeliculas = moviesDuration / moviesAmount;
  return promedioPeliculas;
}

console.log(averageMovieDuration(movies));
