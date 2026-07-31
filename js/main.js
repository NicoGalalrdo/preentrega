function inicio () {
    let name = prompt("Ingresa tu nombre")
    alert ("Hola " + name)
}

inicio()

function sumar (num1, num2){
    return num1 + num2
}


const multiplicar = (a, b) => a * b 

let ejecucion = Number (prompt(
    "¿Que desea realizar?\n" +
    "1. suma\n" +
    "2. Multiplicacion\n" +
    "0. Salir"
));


while(ejecucion != 0) {
let num1 = Number (prompt("Ingrese su primer numero"))
let num2 = Number (prompt("Ingrese su segundo numero"))

    
switch (ejecucion){
    case 1: console.log(sumar (num1, num2))
    alert ("su resultado es igual a " + sumar(num1, num2))    
        break;
    case 2:
         console.log(multiplicar (num1 , num2))
    alert ("su resultado es igual a " + multiplicar(num1, num2))    
         break
    default:
    }

    ejecucion = Number (prompt(
    "¿Que desea realizar?\n" +
    "1. suma\n" +
    "2. Multiplicacion\n" +
    "0. Salir"
));
}
console.log("Saliste del programa")
alert ("Saliste del programa")