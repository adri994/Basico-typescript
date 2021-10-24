// FUNCIONES BASICA

// El retorno de la funciones hay que especificarse
// (()=>{
//   

//   const hero: string = 'hero';

//   function returnName():string {
//     return hero;
//   }

//   const activateBatiSignal = ():string =>{
//     return 'Activado'
//   }
// })

// Parametros obligatorios en las funciones 

// (()=>{

//   const fullName = ( firstName:string, lastName:string ):string =>{

//     return firstName + lastName;
//   }

//   const name = fullName('Adrian','Duran')
//   console.log(name)

// })

// ARGUMENTOS OPCIONES EN LAS FUNCIONES

// (()=>{
//   // el signo ? indica que puede venir o no el parametro
//   const fullName = ( firstName:string, lastName?:string ):string =>{

//     return firstName + lastName;
//   }

//   const name = fullName('Adrian')
//   console.log(name)

// })()

// PARAMETROS POR DEFECTOS

// (()=>{
  
//   const fullName = ( firstName:string, lastName?:string, upper:string = 'existo' ):string =>{

//     return firstName + lastName + upper;
//   }

//   const name = fullName('Adrian')
//   console.log(name)

// })()

// PARAMETROS REST

// (()=>{
//   const fullName = ( firstName:string, ...restArgs:[string,number] ):string =>{

//     return `${firstName} ${restArgs[0]} ${restArgs[1]}`
//   }

//   const name = fullName('Adrian', 'duran', 8)
//   console.log(name)
// })()

// TIPO DE FUNCION

(()=>{

  const addNumber = ( a:number, b:number ) => a + b;
  const greet = ( name:string ) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado`;

  // Esto es la firmma donde indicamos los tipos de parametro y el return
  // let myFunction:(x:number,y:number) =>number;
  // myFunction = addNumber
  // console.log(myFunction(1,2));

  // Esto es la firmma donde indicamos los tipos de parametro y el return
  // let myFunction:(name:string)=>string
  // myFunction = greet
  // console.log(myFunction('Adrian'));

  // Esto es la firmma donde indicamos los tipos de parametro y el return
  let myFunction:()=>string
  myFunction = saveTheWorld
  console.log(myFunction());

})()
