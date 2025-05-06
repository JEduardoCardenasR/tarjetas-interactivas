
const ToDoList = require("../../src/index.mjs")

describe("La clase ToDoLis", () => {
    it("Debe ser una clase", () => {
        expect(typeof ToDoList.prototype.constructor).toBe("function");
    });

    it("Debe tener implementado el método getTodos()", () => {
        const lista = new ToDoList();
            expect(lista.addTodo).toBeDefined();
    })

    it("Debe tener implementado el método addTodo()", () => {
        const lista = new ToDoList();
            expect(lista.addTodo).toBeDefined();
    })

    it("Debe tener implementado el método deleteTodo()", () => {
        const lista = new ToDoList();
            expect(lista.addTodo).toBeDefined();
    })

    it("El método getTodos() debe retornar un array", ()=>{
        const lista = new ToDoList();
            expect(Array.isArray(lista.getTodos())).toBeTrue();
    })

    it("El método addTodo() debe agregar un nuevo elemento", () =>{
        const lista = new ToDoList();
        lista.addTodo("Hacer la HW de la clase de hoy");
        expect(lista.getTodos()).toContain("Hacer la HW de la clase de hoy");  
    })

    it("El método deleteTodo() debe eliminar la última tarea", ()=>{
        const lista = new ToDoList();
        lista.addTodo("A");
        lista.addTodo("B");
        lista.addTodo("C");
        lista.dleteTodo();
        expect(lista.getTodos()).toContain("A");
        expect(lista.getTodos()).toContain("B");
        expect(lista.getTodos()).not.toContain("C");
    } )
});