(()=>{

  // DESESTRUCUTRACION DE OBJECTO

  type Avenger = {
    nick: string,
    ironman: string,
    vision: string,
    activo: boolean,
    poder: number
  }

  const avenger: Avenger = {
    nick: 'hola',
    ironman: 'adrian',
    vision: 'duran',
    activo: true,
    poder: 1000
  }

  // Para hacer la desestructuracion de objecto
  // Usar Crtl Espacio para ver toda la informacion
  
  const printAvenger = ( {vision, poder}:Avenger ) =>{
    console.log(vision)
  }

  // printAvenger(avenger)

  // DESESTRUCTURACION DE ARRAYS

  const valueArr:[string, boolean, number] = ['hola', true, 895]

  const [ vista, vista1, vista2 ] = valueArr
})()