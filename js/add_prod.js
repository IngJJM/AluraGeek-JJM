import {listaServices} from "../service/client-service.js"

/*Muestra la imagen seleccionada para agregar en el nuevo producto
y deja la URL del archivo para usar luego*/

const btnAgregarImagen = document.querySelector(".agregar__imagen");

let imagen = "";

btnAgregarImagen.addEventListener('change', cargar);

function cargar(ev) {
    var arch = new FileReader();
    arch.readAsDataURL(ev.target.files[0]);
    /*imagen = ev.target.files[0];*/
    arch.addEventListener('load',leer);
}

function leer(ev) {
    document.getElementById('box__imagen').style.backgroundImage = "url('" + ev.target.result + "')";
    imagen = ev.target.result;
    document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
}


/*Submit del formulario de cargar nuevo producto.
Chequeo que tenga el archivo de foto seleccionado*/
const formAgregarProducto = document.querySelector(".formulario_contenedor");

formAgregarProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if(!imagen){
        
        document.querySelector(".archivo__faltante").parentElement.classList.add("input__invalido");

    }else{
        
        const nombre_prod = document.querySelector("[data-tipo=nombre_prod]").value;
        const precio_prod = document.querySelector("[data-tipo=precio_prod]").value;
        const categoria = document.querySelector("[data-tipo=categoria]").value;
        const descripcion_prod = document.querySelector("[data-tipo=descripcion_prod]").value;
        
        listaServices
        .crearCliente(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
        .then((respuesta) => {
            //console.log(respuesta)
            //console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
            window.location.href ="productos.html"
        }).catch((error) => console.log(error));

    }
});
