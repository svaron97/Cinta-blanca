
let nombre = document.getElementById("nombre")
let rnombre = document.getElementById("rnombre")
let telefono = document.getElementById("telefono")
let rtelefono = document.getElementById("rtelefono")
let direccion = document.getElementById("direccion")
let rdireccion = document.getElementById("rdireccion")
let pizza = document.getElementById("pizza")
let rpizza = document.getElementById("rpizza")
let boton = document.getElementById("boton")
let card = document.getElementById("card")


/* let preguntapinia = pizza.value
let piniaMinus = preguntapinia.toLowerCase()
console.log(piniaMinus); */


const orden =() => {

    rnombre.innerHTML = nombre.value
    rtelefono.innerHTML = telefono.value
    rdireccion.innerHTML = direccion.value
    rpizza.innerHTML = pizza.value

    let preguntapinia = pizza.value
    let piniaMinus = preguntapinia.toLowerCase()

    if( piniaMinus === "sin"){
        rpizza.innerHTML = "👀 "

    }else if( piniaMinus ==="con"){

        rpizza.innerHTML = "😎"
    } else{
        rpizza.innerHTML = "Revisa tus datos"
    }

    card.classList.remove("none")
    
}

boton.addEventListener("click", orden)


