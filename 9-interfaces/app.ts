// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima:number;
  acelear():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Enemigo {
  reir?: boolean;
  comer?: boolean;
  llorar?:false
}

const guason:Enemigo = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Enemigo ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Funcion{
  ( ciudadanos:string[] ):number
}

const ciudadGotica:Funcion = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Identidad {
  nombre:string,
  edad:number,
  sexo:string,
  estadoCivil: string,
  imprimirBio():void

}
class Persona implements Identidad {
  public nombre:string = 'adrian';
  public edad:number = 5;
  public sexo:string = 'Masculino';
  public estadoCivil:string=  'Soltero'

  imprimirBio():void{
    console.log('gola mundo')
  }
}