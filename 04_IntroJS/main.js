/* Challenge 1
var nombre = prompt("Cual es tu nombre");
var telefono = prompt("Cual es tu telefono")
var direccion = prompt("Cual es tu direccion")

console.log("Tu nombre es: " + nombre)
console.log("Tu numero de telefono es: "+ telefono)
console.log("Tu direccion es: " + direccion) */

/* Challenge 2 */

var nacimiento = prompt("Cual es tu año de nacimiento")
var today = new Date()
var año = today.getFullYear()
var calculoedad = año - nacimiento
console.log(typeof(Date))

console.log(" Tienes " + calculoedad + " años")

