const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan == false) {
    let fruit = fruits.shift();
    foodSchedule[i].name = fruit;
    foodSchedule[i].isVegan = true;
  }
}

console.log(foodSchedule);
