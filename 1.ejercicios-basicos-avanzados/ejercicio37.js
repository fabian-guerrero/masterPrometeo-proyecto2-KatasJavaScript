const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

let categorias = [];

for (const movie of movies) {
  categorie = movie.categories;

  for (const categorieItem of categorie) {
    if (!categorias.includes(categorieItem)) {
      categorias.push(categorieItem);
    }
  }
}

console.log(categorias);
