
const URL = "../Json/productos.json";
const formularioElectrodomesticos = document.getElementById("formularioElectrodomesticos")
const Electrodomesticos = document.getElementById("idElectrodomesticos")
const resultado= document.getElementById("resultado")


formularioElectrodomesticos.addEventListener("submit", BuscarElectrodomestico )


async function BuscarElectrodomestico(event){
    
  event.preventDefault();
  const nombre = Electrodomesticos.value.toLowerCase();


  try{
    const respuesta = await fetch(URL);

    if(!respuesta.ok){
      throw new Error("La peticion no es correcta")
    }

    const Electrodomestico = await respuesta.json();

    const producto = Electrodomestico.find(
    producto => producto.nombre.toLowerCase() === nombre)

    if (!producto) {
      throw new Error("Electrodoméstico no encontrado");
     }


    console.log(Electrodomestico)
  
    resultado.innerHTML = `
    <article class="card">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
            </article>`
  
  }catch (error) {
    console.error(error);
    Swal.fire({
    title: "Electrodomestico no encontrado",
    text: "No hay en stock",
    icon: "error"
    });
  }}

  
  async function cargarCatalogo() {

    try {

        const respuesta = await fetch(URL);

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los productos");
        }

        const productos = await respuesta.json();

        mostrarProductos(productos);

    } catch (error) {

        console.error(error);

        Swal.fire({
            title: "Error",
            text: "No se pudo cargar el catálogo",
            icon: "error"
        });

    } finally {

        console.log("Carga del catálogo finalizada");

    }
}

function mostrarProductos(productos) {

    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = "";

    productos.forEach(producto => {

        catalogo.innerHTML += `
            <article class="producto">

            
                <h2>${producto.nombre}</h2>

                <p>$${producto.precio}</p>

               

            </article>
        `;

    });
}

cargarCatalogo();
  
setTimeout(() => {
    const imagen = document.getElementById("imagen");

    imagen.innerHTML = `
        <img src="./assets/Flayer2.png" alt="Compra tus electrodomésticos" id="flayer">
        <img src="./assets/Flayer.png" alt="Compra tus electrodomésticos" id="flayer">
        <img src="./assets/Flayer2.png" alt="Compra tus electrodomésticos" id="flayer">
    `;
}, 6000);



