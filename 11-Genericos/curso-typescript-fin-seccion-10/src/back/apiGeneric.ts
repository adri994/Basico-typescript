import { getPokemon } from '../generics/get-pokemon'


getPokemon(7)
  .then(console.log)
  .catch(console.log)
  .finally(()=>console.log('fin de getPokemon'))
