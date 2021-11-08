(()=>{
  class Avenger {

    constructor (
      public name:string,
      public realName:string
    ){
      console.log('Constructor llamado')
    }

    private getFullName (){
      return `${this.name} ${this.realName}`
    }

    protected getFullNameProtected (){
      return `${this.name} ${this.realName}`
    }
  }

  class Xmen extends Avenger {

    // es este caso dejar name y realName sin espeficarle si es publico y privado es buena practica
    // Porque el padre ya lo tiene
    constructor(
      name: string,
      realName: string,
      public isMutant:boolean
    ) {
      // necesito llamar al super para hacer la herencia
      // y enviar los datos dependiendo de quien lo esta heredando
      super(name, realName)
    }

    getNameXmen () {
      // solo puede llamar un metodo de una clase que extendienda de otra si esta en protected y publica no private

      console.log(super.getFullNameProtected())
    }

    get fullName (){
      return this.name
    }

    set fullName (name:string){
      this.name = name
    }
  }

  const wolverine = new Xmen('logan', 'logan', false);

  // GET Y SET
  // console.log(wolverine.fullName)
  // wolverine.fullName = 'mama'


  //CLASES ABSTRACT 
  // Las clases abtractas nos periten hacer un modelo de clase para que clases que extendienda de ella sea de ese tipo
  abstract class Mutante {
    constructor(public name: string, public apellido:string){

    }
  }

  class Heroe extends Mutante {
    print() {
      console.log('Hola heroe')
    }
  }

  class Villanos extends Mutante {
    print() {
      console.log('Hola heroe')
    }
  }

  const xmen = new Heroe('wolverine', 'logan');
  const villanos = new Villanos('magneton', 'magnus');

  console.log(xmen.name)
  console.log(villanos.name)

  const printName = ( character:Mutante) => {
    character.name
  }

  printName(xmen)




})