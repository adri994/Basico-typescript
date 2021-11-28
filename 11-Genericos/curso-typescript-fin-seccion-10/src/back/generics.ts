import { print, printObject, printArrow } from '../generics/generics';

import { Hero, Villain } from '../interface'

// console.log( printArrow(2.88).toFixed(1) )
// console.log( printArrow('hola') )

const deadpool = {
  name: 'Deadpool',
  realName: 'vista',
  dangerLevel: 130
}

// con esto le indicamos que le enviamos un objecto de tipo Hero y solo tendra las propiedades del objecto
// console.log( printArrow<Hero>(deadpool) )
// console.log( printArrow<Villain>(deadpool) )
