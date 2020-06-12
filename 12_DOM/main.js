
let titulo = document.getElementById("titulo")
let texto = document.getElementById("texto")
let boton = document.getElementById("boton")
let pregunta = document.getElementById("pregunta")
let respuesta = document.getElementById("respuesta")

console.log(pregunta)
console.log(titulo)
console.log(texto)




const cambio = () => {

    titulo.innerHTML = "Titulo cambiado de JS"
    texto.innerHTML = "Texto cambiado desde JS"
    respuesta.innerHTML = pregunta.value

}


boton.addEventListener("click", cambio)
