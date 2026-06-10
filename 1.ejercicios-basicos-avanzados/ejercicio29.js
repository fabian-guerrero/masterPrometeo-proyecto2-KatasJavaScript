const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

const starWarsDecadas = [];
const decada70 = [];
const decada80 = [];
const decada90 = [];
const decada00 = [];
const decada10 = [];

for (i = 0; i < starWarsMovies.length; i++) {
  let releaseYear = starWarsMovies[i].releaseYear;
  if (releaseYear >= 1970 && releaseYear < 1980) {
    decada70.push(starWarsMovies[i]);
    starWarsDecadas.decada1970 = decada70;
  } else if (releaseYear >= 1980 && releaseYear < 1990) {
    decada80.push(starWarsMovies[i]);
    starWarsDecadas.decada1980 = decada80;
  } else if (releaseYear >= 1990 && releaseYear < 2000) {
    decada90.push(starWarsMovies[i]);
    starWarsDecadas.decada1990 = decada90;
  } else if (releaseYear >= 2000 && releaseYear < 2010) {
    decada00.push(starWarsMovies[i]);
    starWarsDecadas.decada2000 = decada00;
  } else if (releaseYear >= 2010 && releaseYear < 2020) {
    decada10.push(starWarsMovies[i]);
    starWarsDecadas.decada2010 = decada10;
  }
}

console.log(starWarsDecadas);
