function inicio () {
    let name = prompt("Ingresa tu nombre")
    alert ("Hola " + name + " Bienvenido a nuestra tienda de ropa")
}

inicio()

const prendas = ["camisa", "pantalón", "zapatos", "gorra", "bufanda"]
console.log(prendas.join(", "))
console.log("tenemos un total de: " + prendas.length + " prendas")

prendas.push ("cinturon")
console.log(prendas.join(", "))
console.log("Se agrego una prenda al final del catologo")
console.log("tenemos un total de: " + prendas.length + " prendas")


prendas.unshift("chaleco")
console.log(prendas.join(", "))
console.log("Se agrego una prenda al inicio del catalogo")
console.log("tenemos un total de: " + prendas.length + " prendas")

const eliminada = prendas.pop()
console.log(prendas.join(", "))
console.log("se elimino la prenda: " + eliminada )
console.log("tenemos un total de: " + prendas.length + " prendas")

console.log("Se reemplazo la prenda de indice 1 por shorts")
prendas.splice(1, 1, "shorts")
console.log(prendas.join(", "))


let buscar = prompt("Ingrese la prenda que desea buscar: ")
if(prendas.includes(buscar)){
    console.log("Se encuentra en nuestro catalogo como prenda con indice: " + prendas.indexOf(buscar))
    alert ("Se encuentra en nuestro catalogo como prenda con indice: " + prendas.indexOf(buscar)) 
}
else{
    console.log("No se encuentra en nuestro catalogo el producto")
    alert ("No se encuentra en nuestro catalogo el producto")
}



for(const prenda of prendas){
    console.log("prenda con indice " + prendas.indexOf(prenda) + ": " + prenda)
}
