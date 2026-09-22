const productos = [
  {
    id: 1,
    nombre: "Pantalon",
    descripcion: "Pantalon de algodón para hombre",
    precio: "$15000",
    imagen: "👖",
  },
  {
    id: 2,
    nombre: "remera",
    descripcion: "Remera unisex",
    precio: "$8000",
    imagen: "👕",
  },
  {
    id: 3,
    nombre: "medias",
    descripcion: "Medias de algodón para hombre",
    precio: "$5000",
    imagen: "🧦",
  },
  {
    id: 4,
    nombre: "zapatillas",
    descripcion: "Zapatillas de moda",
    precio: "$60000",
    imagen: "👟",
  },
  {
    id: 5,
    nombre: "zapatos",
    descripcion: "Zapatos de vestir para mujer",
    precio: "$35000",
    imagen: "👠",
  },

];


const carrito = [];

    const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerText = "Mi emprendimiento";

    const texto = document.createElement("p");
texto.innerText = "Explora nuestra tienda";
console.log(texto);

    const subtitulo = document.querySelector("h2");
subtitulo.appendChild(texto);


function imprimirProductos() {

const contenedorProductos = document.getElementById("productos");
contenedorProductos.innerHTML = "";

productos.forEach((producto) => {

const card = document.createElement("article");

card.classList.add("card");
card.innerHTML += `
    

      <span>${producto.imagen}</span>
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p>${producto.precio}</p>
        <button id="${producto.id}">Agregar al carrito</button>

  `;

    contenedorProductos.appendChild(card);

  const btncarrito = document.getElementById(`${producto.id}`);
  btncarrito.addEventListener("click", () => {
    Toastify({
    text: `Producto agregado al carrito: ${producto.nombre}`,
    duration: 3000,
    gravity: "top", 
    position: "center", 
    onClick: function(){} 
}).showToast();
    
    carrito.push(producto);

  }) 
});
}

imprimirProductos();


function agregarProducto () {
    const formParaProductos = document.getElementById("form-agregar-producto")
    formParaProductos.addEventListener("submit", (e) => {
        e.preventDefault();

    const inputNombre = document.getElementById("input-nombre").value;
   

    const inputPrecio = document.getElementById("input-precio").value;
    
    
    const inputImagen = document.getElementById("input-imagen").value;
    

    const inputDescripcion = document.getElementById("input-descripcion").value;
    


    productos.push({nombre: inputNombre, precio: inputPrecio, imagen: inputImagen,
        descripcion: inputDescripcion
    })
    

    imprimirProductos()
});
}

agregarProducto();