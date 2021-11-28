


export const printObject = (argument:any) =>{
  console.log( argument )
}

// LA t es ek estandar para indicar que es de tipo genertico
export function print<T>(argument:T){
  return argument
}

export const printArrow = <T>(argument:T):T => argument