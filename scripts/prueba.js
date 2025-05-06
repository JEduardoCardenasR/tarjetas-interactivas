function suma (a,b){
    return a+b
  }

  module.exports = suma // Esto es para lo local (js node js - que admite commonJS (No admite   ECMAScript6) )

  export default suma //ECMA Script - esto es para front end (en el programa local usar el module.exports = suma)

//   Los navegadores no admiten importaciones y exportaciones (hay que usar bundlers -unión de ambos archivos)

