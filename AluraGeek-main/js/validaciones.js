export function valida(input){
    const tipoInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoInput, input);
    }
};

const tipoError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesError ={
    nombre: {
        valueMissing: "Este Campo no puede estar vacio"
    },
    mensaje: {
        valueMissing: "Este Campo no puede estar vacio",
    },
    email: {
        valueMissing: "Este Campo no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "Este Campo no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximó 12, debe contener una letra mayuscula, una letra minuscula, un numero y no debe poseer caracteres especiales",
    },
}

function mostrarMensajeError(tipoInput, input){
    let mensaje = "";
    tipoError.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesError[tipoInput][error];
        }
    })
    return mensaje;
};
