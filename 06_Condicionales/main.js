/* alert("hola") */

/* var num = prompt ("Ingresa un numero: ")
var numreal = Number(num)
var operacion = numreal % 2

if(operacion === 0){
    console.log(numreal + " Es par")
}else if(operacion === 1){
    console.log(numreal + " Es impar");
}else{
    console.error("Es un error");
} */

/* var correcta = "perritosalchicha123"
var usuario = prompt("Pon la contraseña correcta")

if (usuario === correcta){
    console.log("Bienvenido");
} else {
    location.reload()
    console.error("Revisa la contraseña nuevamente");
} */


// Operadores logicos

/* var edad = Number(prompt("Ingresa tu edad"))

if(edad >= 18 && edad <= 70){
    console.log("Puedes sacar tu licencia");
}else if(edad === 16 || edad === 17 ){
    console.log("Puedes sacar permiso");

}else if(edad <= 15 || edad >=71){
    console.log("No puedes conducir");
}else {
    console.error ("Datos incorrectos, intentanlo de nuevo")
} */


//------Piedra papel o tijera


/* var jugador1 = prompt("Jugador 1 que eliges: piedra, papel o tijera").toLowerCase()
var jugador2 = prompt("Jugador 2 que eliges: piedra, papel o tijera").toLowerCase()


if(jugador1 === jugador2){
    console.log("Es un empate porque ambos escogieron "+ jugador1);
}else if (jugador1 === "tijera" && jugador2 === "papel") {

    console.log("Jugador 1 escogió " + jugador1+ " y " + "el jugador 2 escogió " + jugador2 + " por lo tanto gana jugador 1");

}else if (jugador1 === "piedra" && jugador2 === "tijera") {

    console.log("Jugador 1 escogió " + jugador1+ " y " + "el jugador 2 escogió " + jugador2 + " por lo tanto gana jugador 1");

}else if (jugador1 === "papel" && jugador2 === "piedra") {

    console.log("Jugador 1 escogió " + jugador1+ " y " + "el jugador 2 escogió " + jugador2 + " por lo tanto gana jugador 1");

}else if (jugador1 === "tijera" && jugador2 === "piedra") {

    console.log("Jugador 1 escogió " + jugador1+ " y " + "el jugador 2 escogió " + jugador2 + " por lo tanto gana jugador 2");

}else if (jugador1 === "piedra" && jugador2 === "papel") {

    console.log("Jugador 1 escogió " + jugador1+ " y " + "el jugador 2 escogió " + jugador2 + " por lo tanto gana jugador 2");

}else if (jugador1 === "papel" && jugador2 === "tijera") {

    console.log("Jugador 1 escogió " + jugador1+ " y " + "el jugador 2 escogió " + jugador2 + " por lo tanto gana jugador 2");

}else{
    console.error("Revisa que los datos sean correctos")
}
 */


// Jugar contra maquina

var userAnswer = prompt("Ingresa piedra, papel o tijera").toLowerCase()

var pcAnswer = ""

var options = Math.floor((Math.random() * 3) + 1)

if(options === 1){
    pcAnswer = "piedra"
}
if(options === 2){
    pcAnswer = "papel"
}
if (options === 3){
    pcAnswer = "tijera"
}

if(userAnswer === pcAnswer){
    console.log("Es un empate porque " + userAnswer + " " + pcAnswer)

}else if(pcAnswer === "papel" && userAnswer === "piedra" || pcAnswer === "tijera" && userAnswer === "papel" || pcAnswer === "piedra" && userAnswer ==="tijera"){
    console.log("Gana la PC porque: ")
    console.log("User: " + userAnswer);
    console.log("PC: " + pcAnswer);
}else if(userAnswer === "papel" && pcAnswer === "piedra" || userAnswer === "tijera" && pcAnswer === "papel" || userAnswer === "piedra" && pcAnswer ==="tijera"){
    console.log("Gana el user porque: ")
    console.log("User: " + userAnswer);
    console.log("PC: " + pcAnswer);
}else{
    console.error("Ingresa bien tus opciones")
}

