/* alert ("Hola") */

var colores = ["negro", "Rojo", "Rosa", "Azul", "Amarillo"]

//Forma vieja de agregar un valor nuevo
colores[2] = "verde"


console.log(colores)
console.log(colores[3])


// Metodo de arreglos

//.push() -> Agrega nuevo valor al final

colores.push("Gris")
console.log(colores)

//.pop() 

colores.pop()
console.log(colores);

//.splice() - > Borra elementos especificos

colores.splice(4,1)
console.log(colores);

var persona = {

    nombre: 'Ricardo',
    cel: '45645647894',
    direccion: 'CDMX',
    email: 'kelebra@devf.mx',
    password: '123456',
    musica: ['rock', 'corridos tumbados', 'cumbia', 'pop', 'k-pop', 'trap'],
    peliculas : {
        accion: ['R&F', 'MI', 'El trasportador'],
        survivalHorror:['Chuky', 'blair wich', 'El exorsista'],
        comedia: ['This is my son','scary movie', 'click' ],
        romanticas: {
            comediasRomanticas: ['La propuesta', 'Zohan'],
            tristeza: ['Titanic', 'Robando a la novia', 'Cartas a Jhon']
        }
    }

}

console.log(persona)
console.log(persona.nombre)
console.log(persona.password)
console.log(persona.musica[1])
console.log(persona.peliculas.romanticas.comediasRomanticas[1])

