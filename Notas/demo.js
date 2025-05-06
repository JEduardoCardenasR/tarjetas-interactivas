// function sumar (a, b){
//     const suma = a + b;
//     return suma;
// }

// console.log(sumar(2, 3));

// function sumar (a, b){
//     return a + b;
// }

// console.log(sumar(2, 3));

// const sumar = (a, b) => {
//     return a + b;
// }

// console.log(sumar(2, 3));

// const persona ={
//     nombre: 'Juan',
//     amigos: ['María', 'Pedro', 'Juana' ],

//     saludar: function (){
//         console.log('Hola, soy', this.nombre);
//     },

//     despedirse: () =>{
//         console.log('Me despido', persona.amigos[1]);   //Aquí no se puede usar el this porque es una función arrow
        
//     },
// }

// persona.saludar();
// persona.despedirse();

// FUNCIÓN CONSTRUCTORA (Forma antigua de declarar clases)

// function Persona (nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
// }

// Persona.prototype.saludar = function () {
//     console.log("Hola soy", this.nombre);
// }

// const persona1 = new Persona("Joel", 33);
// console.log(persona1); 
// persona1.saludar();

// DECLARACIÓN DE CLASE ACTUAL

// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar() {
//         console.log("Hola soy", this.nombre);
//     }
// }

// const persona1 = new Persona("Joel", 33);
// console.log(persona1);
// persona1.saludar();

// const agregar = document.getElementById('agregar');

// const cb = () => {
//     console.log(('Probando...'));
    
// }

// agregar.addEventListener('click', cb);
