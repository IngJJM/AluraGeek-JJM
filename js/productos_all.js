import { listaServices } from "../service/client-service.js";
//backticks
const crearNuevaLinea = (imagen, categoria, nombre_prod, precio_prod, id) => {
    const linea = document.createElement("div");
    
    const contenido = `
    <div class="productos_all">
    <a class="link_producto" href="./descripcion_productos.html?id=${id}&categoria=${categoria}">
    <div class="bng_box">
    <img class="img" src="${imagen}" alt="${nombre_prod}">
    </div>
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
    linea.innerHTML = contenido;
  
    return linea;
  };

  
const div = document.querySelector("[data-producto]");

listaServices
  .listaProductos()
  .then((data) => {
    
    data.forEach(({ imagen, categoria, nombre_prod, precio_prod}) => {
      const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod);
      div.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Oops! Error."));
  
