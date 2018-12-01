class Persona{
    constructor (nombre, edad, profesion, skills){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
        this.skills = skills
    }

    getSaludo(){
        return `Hola, mi nombre es: ${this.nombre}`
    }

    getEdad(){
        return `Mi edad es: ${this.edad}`
    }

    getProfesion(){
        return `Yo soy: ${this.profesion}`
    }
}

class Programador extends Persona {
    super(nombre, edad, profesion, skills){
    }

    getProfesion(){
        return `Soy muy inteligente porque soy: ${this.profesion}`
    }

    getSkills(){
        return `Se programar en: ${this.skills}`
    }

}