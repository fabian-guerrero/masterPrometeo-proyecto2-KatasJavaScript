const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  for (const mutant in mutants) {
    if (mutants[mutant].power == power) {
      console.log(
        "Se ha encontrado a " + mutants[mutant].name + " con el poder " + power,
      );
    }
  }
}

findMutantByPower(mutants, "magnetism");
