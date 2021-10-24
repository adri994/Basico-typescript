"use strict";
// const sayHello = (msg:string) =>{
//   console.log(msg)
// } 
// sayHello('hola')
// Boolean
// let isSuperman:boolean = true;
// let isBatman:boolean = false;
// isSuperman = ( isBatman ) ? true : false
// console.log(isSuperman)
// number
// const avenger: number =10
// let villanos: number =40;
// if(avenger > villanos){
//   console.log('estamos en problemas')
// }else {
//   console.log('salvados')
// }
// villanos = Number('55A'); // esto esta bien porque NAN es considerado un numero
// String
// const batman: string = 'Bruce'
// Any (no usar el any)
// let avenger:any = 123
// let exists;
// let power;
// avenger = 'Dr Stranger'
// Para indicar que es un string sin poner un tipado
// console.log( (avenger as string).charAt(0) )
// ARRAY
// let number:(number |string)[] = [1,2,3,4,5,6,7,8,9,'a',10]
// let number1:number[] = [1,2,3,4,5,6,7,8,9,10]
// Tuplas
// Tuplas nos permite decir cual es el el tipo en cada posicion del array Ejempplo
// let arrays:[string,number] = ['Adrian',50]
// indica que la primera posicion tiene que ser un string y el segun un number
// arrays[0] = 5
//EMUN
// la enumeraciones nos permite tener un sentido semanticos
// enum AudioLevel {
//   min = 1,
//   medium,
//   max = 10
// }
// console.log(AudioLevel.min)
// console.log(AudioLevel.medium)
// console.log(AudioLevel.max)
// VOID
// Voy consiste que la funcion no devuelve undefined solo eso no puede devolver mas nada porque sino dara un error
// const callSuperman = ():void =>{
// }
// const a = callSuperman()
// console.log(a)
//NEVER
// Esta funcion simepre tiene que devolver un error siempre, no puede ser numeros ni nada de eso sino errores
// const abc = ():never =>{
//   throw new Error("Ayuda");
// }
// Para que una funcion pueda cosa u otra hacemos lo siguiente
var abc = function () {
    throw new Error("Ayuda");
};
abc();
