import { listaServices } from "../service/client-service.js";

const url = new URL (window.location);
const id = url.searchParams.get("id");

const nombre_prod = document.querySelector("[data-tipo=nombre_prod]");
const precio_prod = document.querySelector("[data-tipo=precio_prod]");
const categoria = document.querySelector("[data-tipo=categoria]");
const descripcion_prod = document.querySelector("[data-tipo=descripcion_prod]");
const imagenDiv = document.querySelector(".agregar__imagen-div");

let fileImagen = "";

        const obtenerProducto = () => {

            if(id === null){
                console.log("error")
            }
        
            listaServices.detalleProducto(id)
                .then((prod) => {
                    console.log(id)
                    /*cargo todos los input*/
                    categoria.value = prod.categoria;
                    nombre_prod.value = prod.nombre_prod;
                    precio_prod.value = prod.precio_prod;
                    descripcion_prod.value = prod.descripcion_prod;
                    imagenDiv.style.backgroundImage = `url("${prod.imagen}")`;
                    fileImagen = prod.imagen;
                    
                    /*pongo un escuchador en el boton de carga
                    de imagen para su modificacion*/
                    const btnAgregarImagen = document.querySelector(".agregar__imagen");
                    
                    btnAgregarImagen.addEventListener('change', cargar);
                    function cargar(ev) {
                        var arch = new FileReader();
                        
                        arch.readAsDataURL(ev.target.files[0]);
                        arch.addEventListener('load',leer);
                    }
                    function leer(ev) {
                        document.getElementById('box__imagen').style.backgroundImage = "url('" + ev.target.result + "')";
                        fileImagen = ev.target.result;
                        document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
                    }
                    
                }).catch((error) => console.log(error));
        };
        obtenerProducto();

        document.querySelector(".formulario_contenedor").addEventListener("submit", (evento) => {
            evento.preventDefault();
            modificarProducto();
        });
        
        
        const modificarProducto = async () => {
        
            try{
                const modificado = await listaServices.actualizarProducto(fileImagen,categoria.value,nombre_prod.value,precio_prod.value,descripcion_prod.value,id)
                console.log("antes");
                window.location.href =("productos.html");
                console.log("despues")
        
            }catch(error){
                console.log(error)
            }
        }

        