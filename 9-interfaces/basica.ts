(()=>{

  //BASICA

  //   interface Hero {
  //   name: string,
  //   age: number,
  //   powers: string[],
  //   getName?:()=>string
  // }

  // let flash: Hero = {
  //   name: 'Barry',
  //   age: 24,
  //   powers:['velocidad','corre'],
  // }

  // flash = {
  //   name: 'Adrian',
  //   age: 25,
  //   powers:['velocidad','corre'],
  //   getName(){
  //     return `hola`
  //   }
  // }

  // COMPLEJOS

  // interface Client {
  //   name:string,
  //   age?:number,
  //   address:Address
  // }

  // interface Address {
  //   id:number,
  //   zip:string,
  //   city:string
  // }

  // const cliente:Client ={
  //   name: 'Adrian',
  //   age: 15,
  //   address:{
  //     id:12,
  //     zip:'232323',
  //     city:'asas'
  //   }
  // }

  // METODOS EN LOS INTERFACES

  // interface Client {
  //   name:string,
  //   age?:number,
  //   address:Address
  //   // EN LAS INTERFACES ES DIFERENTE QUE EN LOS Tipos
  //   // EN LOS TIPOS ES getFullAdreess(id:string)=>void
  //   getFullAddress(id:string):void
  // }

  // interface Address {
  //   id:number,
  //   zip:string,
  //   city:string
  // }

  // const cliente:Client ={
  //   name: 'Adrian',
  //   age: 15,
  //   address:{
  //     id:12,
  //     zip:'232323',
  //     city:'asas'
  //   },
  //   getFullAddress(id:string){
  //     console.log('hola')
  //   }
  // }

  // CLASES

  // Para las clases usamos el implement para definir las INTERFACES

//   interface Xmen {
//     name: string;
//     realName: string;
//     mutantPower( id: number ):string;
// }

// interface Human {
//     age: number;
// }

// class Mutant implements Xmen, Human {
//     public age: number = 1;
//     public name: string = 'adrian';
//     public realName: string = 'adrian';
    
//     mutantPower( id: number ) {
//         return this.name + ' ' + this.realName;
//     }
// }


// Funcion

interface addTwoNumbers {
  (a: number, b: number): number;
}

let addNumbersFunction: addTwoNumbers;


addNumbersFunction = (a: number, b: number) => {
  return 10;
}


})()