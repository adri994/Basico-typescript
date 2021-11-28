function printConsole(constructor:Function) {
  console.log(constructor)
}

// Para ser un factory constructor debe retornar una funcion
// se va ejecutar cada vez que compile la clase
const printToConsoleConditional = (condicion:boolean):Function =>{

  if(condicion) return printConsole
  else return () =>{}
  
}

// este decorador se ejecuta en el momento que se define la clase
// hace referencia al constructor
// @printConsole

// Para los factory contructor hacemos lo mismo que con el decorador anterior pero tenemos que pioner ()
@printToConsoleConditional(true)
class Pokemon {

  public publicAPi: string = 'https://pokemon.co'

  // hace la declara en el mismo parametro
  constructor(
    public name:string 
  ){
    
  }

  savePokemonToDB(id:number) {
    console.log('Pokemon guardado')
  }
}

export default Pokemon