
// si usamos los decoradores que son funciones 
// y ls decorator Factory devuelve una funciones y se usa ()

// decorador para metdo
function CheckPokemonId () {
  return function( target:any, propertyKey:string, descriptor:PropertyDescriptor ){
    
    //para poner ir al metodo tenemos que declarar nuevamente el descriptor.value
    const originalMethod = descriptor.value

    // los paramtros soin los parametro que se le envian al metodo
    descriptor.value = ( id:number ) => {

      if( id < 1 || id > 800 ) {
        return console.error('El id del pokemon debe estar entre 1 y 800')
      } 

      return originalMethod( id )
    }

    // esto nos permite cambiar el console de metodo por el que vamos a poner
    // descriptor.value = ()=>console.log('hola')

  }
}

function readonly ( isWrite:boolean = true):Function {

  // para los decoradores de propiedad solo son esas 2 
  return function(target:any, propertyKey:string){

    // si lo dejo vacio estoy indicando que no se le peude hacer anda
    const descriptor:PropertyDescriptor ={
      // estoy creando para que se vea la funcion
      get() {
        return this
      },
      // val es el valor de la variable
      set(this, val){
        // Para hacer que no puede moficarse tenemos que hacer lo siguiente
        // primera es la isntancia
        // segunda el propertyKey
        // un objecto indicando el valor y si se modifica o no
        Object.defineProperty( this,propertyKey,{
          value:val,
          writable: !isWrite,
          enumerable: true // esto para que no se vea
        })
      }
    }


    return descriptor

  }

}

class Pokemon {

  @readonly(false)
  public publicAPi: string = 'https://pokemon.co'

  constructor(
    public name:string 
  ){
    
  }

  @CheckPokemonId()
  savePokemonToDB(id:number) {
    console.log('Pokemon guardado')
  }
}

export default Pokemon