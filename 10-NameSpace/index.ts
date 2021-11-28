
// sirve como un agrupàdor pueden ser hasta clases que esten dentro de la

// para usar las funciones que tenemos dentro necesitamos usar export
namespace Validation {

  export const validateText = (text:string):boolean =>{
    return ( text.length > 3 ) ? true : false
  }

  export const validateDate = (myDate: Date):boolean =>{
    return ( isNaN( myDate.valueOf() ) ) ? false : true
  }
}

console.log( Validation.validateText('Adrian') )