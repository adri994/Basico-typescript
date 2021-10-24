const sumar = (a:number, b:number):number => a + b

const hero = (hero:string[]):number => hero.length

const superHeroe:string[] = ['batman','superman','flash']

hero(superHeroe)

const llamarBatman = (llamar:boolean = false):void =>{
  if(llamar) console.log('Batiseñal activada')
}

llamarBatman()

const unirHeroe = ( ...persona:string[] ):string =>{
  return persona.join(', ')
}

let noHaceNadaTampoco:(a:number, b:string, c:boolean, d:[]) => void;