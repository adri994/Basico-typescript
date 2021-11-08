
// Clase clasica

class Avenger {

  // private name: string
  // public tema:string
  // public realName?:string

  // Las propiedad staticas las llamas haciendo a la clase no la instancia
  // Ejemplo ç: Avenger.avAge
  static avAge:number =35

  // Forma tradicional de declara las variables
  // constructor (name:string, tema:string, realName?:string){
  //   this.name = name
  //   this.tema = tema
  //   this.realName = realName
  // }

  // METODS STATIC
  static getAvAge() {
    // aqui no puede hacer ninguna referencia a las demas propiedades
    return `hola static`
  }

  // Forma reducida
  // aqui no necesitamos reclarar antes porque lo haremos en el mismo contructor
  constructor (
    private name: string,
    public tema:string,
    public realName?:string,

  ){
    // Para cambiar una clase staticas
    Avenger.avAge = 80
  }

  private bio(){
    return `No puedes llamar este metodo afuera de la clase`
  }

  public bio2() {
    return `Puedo llamar este metodo afuera de clase`
  }
}

const avenger:Avenger = new Avenger( 'adrian', 'duran' )

// Ejemplo de clases static
console.log(Avenger.avAge)

console.log(avenger.bio2())