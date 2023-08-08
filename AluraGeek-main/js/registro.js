import {listaServices} from "../service/client-service.js"
/*Submit del formulario de cargar nuevo usuario.*/
const formAgregarUsuario = document.querySelector(".formulario_contenedor1");

formAgregarUsuario.addEventListener("submit", (evento) => {
    evento.preventDefault();
        const nombre = document.querySelector("[data-tipo=nombre]").value;
        const email = document.querySelector("[data-tipo=email]").value;
        const password = document.querySelector("[data-tipo=password]").value;
        
        listaServices
        .crearUsuario(nombre, email, password)
        .then((respuesta) => {
            window.location.href ="registrar.html"
        }).catch((error) => console.log(error));
        
});
