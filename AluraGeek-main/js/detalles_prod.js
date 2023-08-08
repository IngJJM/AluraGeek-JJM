import { listaServices } from "../service/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");
const cate = url.searchParams.get("categoria");

let cont = 0;

//backticks
const crearNuevaLinea = (imagen, nombre_prod, precio_prod, descripcion_prod) => {
    const linea = document.createElement("div");
    imagen.style.width = '156px';
    imagen.style.height = 'auto';
    const contenido = `
    <div>
        <img class="img_producto" src="${imagen}" alt="Imagen del Producto ${nombre_prod}">
    </div>
    <div class="detalles">
        <h1 class="nombre_prod">${nombre_prod}</h1>
        <h5 class="precio_prod">${precio_prod}</h5>
        <p class="descripcion_prod">${descripcion_prod}</p>
    </div>
    `;

    linea.innerHTML = contenido;

    return linea;
};

const crearSimilitud = (imagen, categoria, nombre_prod, precio_prod, id) => {
    const linea_2 = document.createElement("div");

    const contenido_2 =`
    <div class="contenedor block_principal">
    <a class="link_producto" href="./descripcion_productos.html?id=${id}&categoria=${categoria}">
    <img src="${imagen}" alt="Imagen del Producto ${nombre_prod}">
    <div>
      <ul>
        <li class="nombre_producto">${nombre_prod}</li>
        <li class="precio_producto">${precio_prod}</li>
        <li>Ver producto</li>
      </ul>   
    </div>
    </a>
 </div>
    `;
    linea_2.innerHTML = contenido_2;

    return linea_2;
};


const div = document.querySelector("[data-detalle]");
const div_1 = document.querySelector("[data-similar]");


listaServices
    .detalleProducto(id)
    .then((data) => {

        const nuevaLinea = crearNuevaLinea(data.imagen, data.nombre_prod, data.precio_prod, data.descripcion_prod);
        div.appendChild(nuevaLinea).className = "div_acd";

    })
    .catch((error) => alert("Oops! Error."));



    

listaServices
    .listaProductos()
    .then((data) => {
      data.forEach(({ imagen, categoria, nombre_prod, precio_prod, id}) => {   
        if(cate == categoria){
            if (screen.width > 768 && cont < 6) {
                const nuevaLinea = crearSimilitud(imagen, categoria, nombre_prod, precio_prod, id);
                div_1.appendChild(nuevaLinea);
                cont++
            }else if (screen.width <= 768 && cont < 4) {
                const nuevaLinea = crearSimilitud(imagen, categoria, nombre_prod, precio_prod, id);
                div_1.appendChild(nuevaLinea);
                cont++
            }
        }
    });
})
.catch((error) => alert("Oops! Error."));
