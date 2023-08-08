
import { listaServices } from "../service/client-service.js";

const url = new URL(window.location);
const buscar_prod = url.searchParams.get("buscar");
const buscarp = buscar_prod.toLocaleLowerCase();
//backticks
const crearNuevaLinea = (imagen, nombre_prod, precio_prod, descripcion_prod, buscar_prod) => {
    const linea = document.createElement("div");

    const contenido = `
        <div class="articulos_descripcion">
        <a href="#" class="decoration">
            <div>
                <img class="img_producto" src="${imagen}" alt="Imagen del Producto ${nombre_prod}">
            </div>
            <div class="detalles">
                <h1 class="nombre_prod">${nombre_prod}</h1>
                <h5 class="precio_prod">${precio_prod}</h5>
                <p class="descripcion_prod">${descripcion_prod}</p>
            </div>
        </a>
        </div>
    `;

    linea.innerHTML = contenido;

    return linea;
};

const div = document.querySelector("[data-producto]");

listaServices
    .listaProductos()
    .then((data) => {
        data.forEach(({ imagen, nombre_prod, precio_prod, descripcion_prod}) => { 
        console.log(nombre_prod)
        console.log(nombre_prod.includes('To be'))  
        const nombre = nombre_prod.toLowerCase();
        
        if(nombre.includes(buscarp)){
            document.querySelector(".bloqueo_error").style.display = "none";
            document.querySelector(".bloqueo_title").style.display = "block";
            const nuevaLinea = crearNuevaLinea(imagen, nombre_prod, precio_prod, descripcion_prod, buscar_prod);
            div.appendChild(nuevaLinea); 
            }
        
    })
})
.catch((error) => alert("Oops! Error."));
