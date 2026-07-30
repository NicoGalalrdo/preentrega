{mensaje = "Bienvenido a canjes ropa_indumentarias010"
alert (mensaje)}

let contrasena = ""
let usuario = ""
while (usuario !== "Nico123" || contrasena !== "Nico2005"){

    usuario = prompt("Ingresa tu usuario")
    contrasena = prompt ("ingresa tu contrasena")

    if(usuario !== "Nico123" || contrasena !== "Nico2005"){
    console.log("Usuario o contraseña incorrecta")
    
    mensaje = "Contraseña incorrecta, vuelve a intentar"
    alert (mensaje)}
}
console.log("Bienvenido")
mensaje = "Bienvenido"
alert (mensaje)

let cuenta = (prompt("Inegresa el nombre de tu perfil"))
    console.log("Nombre de la cuenta : " + cuenta)
mensaje = "El nombre de tu cuenta se registro como " + cuenta;
alert (mensaje)
let seguidores = Number(prompt("Ingresa tu numero de seguidores"))
if (seguidores >= 10000){
    console.log("Numero de seguidores : " + seguidores )
mensaje = "Numero de seguidores suficientes para un canje"
alert (mensaje)
}else{
    console.log("No tienes suficientes seguidores para un canje")
mensaje = "No tienes suficientes seguidores para un canje"
alert (mensaje)
}


