let listSelector = document.getElementById("character-list");
let personajeFoto = document.getElementsByClassName("character-image");
personajeFoto = personajeFoto[0];

const personajes = fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let personajes = data.map((personaje) => {
      return personaje;
    });

    for (let i = 0; i < personajes.length; i++) {
      let opcionPersonaje = `<option value="personaje-${personajes[i].id}" data-posicion="${personajes[i].id}">${personajes[i].fullName}</option>`;
      listSelector.innerHTML += opcionPersonaje;
    }

    let urlDeImagen = personajes[0].imageUrl;
    personajeFoto.src = urlDeImagen;

    listSelector.addEventListener("change", (event) => {
      let idSeleccionado = event.target.selectedIndex;
      urlDeImagen = personajes[idSeleccionado].imageUrl;
      personajeFoto.src = urlDeImagen;
    });
  });
