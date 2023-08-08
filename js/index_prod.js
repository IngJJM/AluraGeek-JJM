import { listaServices } from "../service/client-service.js";
//backticks
const crearNuevaLinea = (imagen, categoria, nombre_prod, precio_prod, id) => {
  const linea = document.createElement("div");

  const contenido = `
  <div class="contenedor block_principal">
    <a class="link_producto" href="./descripcion_productos.html?id=${id}&categoria=${categoria}">
    <img src="${imagen}" alt="${nombre_prod}">
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

const mariobros = "Mario Bros collection";
const consolas = "Consolas";
const diversos = "Diversos";

const div_mb = document.querySelector("[data-producto-mb]");
const div_cl = document.querySelector("[data-producto-cl]");
const div_dv = document.querySelector("[data-producto-dv]");

let cont_mb = 0;
let cont_cl = 0;
let cont_dv = 0;

listaServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ imagen, categoria, nombre_prod, precio_prod, id }) => {
      if (screen.width > 768) {
        if (categoria === mariobros && cont_mb < 6) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_mb.appendChild(nuevaLinea);
          cont_mb++;
        }
        if (categoria === consolas && cont_cl < 6) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_cl.appendChild(nuevaLinea);
          cont_cl++;
        }
        if (categoria === diversos && cont_dv < 6) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_dv.appendChild(nuevaLinea);
          cont_dv++;
        }
      }
      else if (screen.width <= 768) {
        if (categoria === mariobros && cont_mb < 4) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_mb.appendChild(nuevaLinea);
          cont_mb++;
        }
        if (categoria === consolas && cont_cl < 4) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_cl.appendChild(nuevaLinea);
          cont_cl++;
        }
        if (categoria === diversos && cont_dv < 4) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_dv.appendChild(nuevaLinea);
          cont_dv++;
        }
      }

      });
  })
  .catch((error) => alert("Oops! Error. De carga"));
