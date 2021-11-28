import Pokemon from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

console.log(charmander.publicAPi = "hola")

charmander.savePokemonToDB(800)

