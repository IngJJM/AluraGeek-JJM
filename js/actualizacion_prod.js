import { listaServices } from "../service/client-service.js";
//backticks
const crearNuevaLinea = (imagen,nombre_prod,precio_prod,id) => {
    const linea = document.createElement("div");
    
    const contenido = `
    <div class="articulo">
    <div class="bng_box">
    <div class="articulo_edicion">
        <a class="position_icon" href="editar_productos.html?id=${id}"><img class="icon" src="./img/editar.png" alt=""></a>
        <button type="button" id="${id}" class="btn_borrar"><img src="./img/borrar.png"/></button>
    </div>
    <img class="img" src="${imagen}" alt="Imagen del producto">
    </div>
    <div class="lista_descripcion">
        <ul>
            <li class="nombre_producto">${nombre_prod}</li>
            <li class="precio_producto">${precio_prod}</li>
            <li class="number_producto">${id}</li>
        </ul>
    </div>
    </div>
    `;
    linea.innerHTML = contenido;
    
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      listaServices
        .eliminarCliente(id)
        .then((respuesta) => {
          
          window.location.href = "./productos.html";
        })
        .catch((err) => alert("Ocurrió un error"));
    });
  
    return linea;
  };

  
const div = document.querySelector("[data-producto]");

listaServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ imagen,nombre_prod,precio_prod,id }) => {
      const nuevaLinea = crearNuevaLinea(imagen,nombre_prod,precio_prod,id);
      div.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Oops! Error."));
  
