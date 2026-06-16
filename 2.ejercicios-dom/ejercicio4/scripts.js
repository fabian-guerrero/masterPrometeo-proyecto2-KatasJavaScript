// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
let btnToClick = document.getElementById("btnToClick");
btnToClick.onclick = (e) => {
  console.log(e);
};

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let elementosInput = document.querySelectorAll("input");
elementosInput.forEach((elementoInput) => {
  elementoInput.addEventListener("focus", () => {
    console.log(elementoInput.value);
  });

  // 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
  elementoInput.addEventListener("input", () => {
    console.log(elementoInput.value);
  });
});
