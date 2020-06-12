let nombre = document.getElementById("nombre")
let rnombre = document.getElementById("rnombre")
let telefono = document.getElementById("telefono")
let rtelefono = document.getElementById("rtelefono")
let direccion = document.getElementById("direccion")
let rdireccion = document.getElementById("rdireccion")
let pizza = document.getElementById("pizza")
let rpizza = document.getElementById("rpizza")
let boton = document.getElementById("boton")
let mycard = document.getElementById("mycard")


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
        rpizza.src="../Challenge_2/Assets/pizza_pepperoni.jpg"

    }else if( piniaMinus ==="con"){

        rpizza.src="../Challenge_2/Assets/pizza-hawaiana.jpg"
    } else{
        rpizza.innerHTML = "Revisa tus datos"
    }

    mycard.classList.remove("none")
    
}

boton.addEventListener("click", orden)