(()=>{
  // let flash = {
  //   name: 'Barry',
  //   age: 24,
  //   powers:['velocidad','corre']
  // }
  // puedes cambiarlo pero ajuro hay que declarar cada uno de los valoresç
  // no puedes meter otra propiedad al objectos

  // flash = {
  //   name2:'otro nombre'
  // }

  // PARA PONERLE TIPADO A LOS OBJECTO
  //podemos usar el ? para indicar que puede venir o no
  // getName inidcamos que puede ser opcional, que es una funcion y que devuelve un string

  // let flash: { name:string,age:number,powers:string[], getName?: ()=>string } = {
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

  // TYPE
  // Nos permites establecer la estructuras para nuestro objectos

  // type Hero ={
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

  // Multiple tipos de permitidos

  type Hero = {
    name: string,
    age: number,
    powers: string[],
    getName?: ()=>string
  }

  let customVariables: ( string | number | Hero ) = 'adrian'
  console.log(customVariables)

  customVariables = '20'
  console.log(customVariables)

  customVariables = {
    name: 'adrian',
    age: 4,
    powers: ['mama', 'papa'],

  }
})()