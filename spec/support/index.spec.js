// // traernos las clases Activity y Repository

const { Activity, Repository } = require("../../scripts/clases");

let miActividad;
let miRepositorio;

beforeEach(() =>{
    miActividad = new Activity(1, "Montar cicla", "Es saludable", "http://www.google.com/images/bicycle");
    miRepositorio = new Repository();
})

describe("Testeando la clase Activity", ()=>{
    it("Cuando se crea una nueva actividad, esta es una instancia de la clase Activity", ()=>{
        const miActividad = new Activity();
        expect(miActividad).toBeInstanceOf(Activity);
    })

    it("Se crea una actividad con las propiedades id, title, description y imgUrl", ()=>{
        expect(miActividad.id).toBeDefined();
        expect(miActividad.title).toBeDefined();
        expect(miActividad.description).toBeDefined();
        expect(miActividad.imgUrl).toBeDefined();
        expect(miActividad.url).toBeUndefined();
    })
})

describe("Testeando la clase Repository", ()=>{
    it("Cuando se crea un nuevo repositorio, este es una instancia de la clase Repository", ()=>{
        expect(miRepositorio).toBeInstanceOf(Repository);
    })

    it("El repositorio debe tener las propiedades activities y id", ()=>{
        expect(miRepositorio.activities).toBeDefined();
        expect(miRepositorio.id).toBeDefined();
    })

    it("El repositorio debe tener las propiedades activities y id inicializadas en [] y 1", ()=>{
        expect(miRepositorio.activities).toEqual([]);
        expect(miRepositorio.id).toBe(1);
    })

})

// class ToDoList {}

// module.exports = ToDoList;