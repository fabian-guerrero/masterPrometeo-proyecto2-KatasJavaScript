const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  console.log(list);
  const valoresUnicos = list.filter((item, index, arr) => {
    return arr.indexOf(item) == index;
  });
  return valoresUnicos;
}

const unicos = removeDuplicates(duplicates);
console.log(unicos);
