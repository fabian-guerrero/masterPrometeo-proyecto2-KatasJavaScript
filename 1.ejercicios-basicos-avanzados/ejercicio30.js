const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

const generos = {};

for (let i = 0; i < tracks.length; i++) {
  const cancion = tracks[i];
  const genero = cancion.genre;
  const titulo = cancion.title;

  if (!generos[genero]) {
    generos[genero] = [];
  }

  generos[genero].push(titulo);
}

console.log(generos);
