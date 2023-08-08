//Fetch API
const url = "https://64b9872a79b7c9def6c12834.mockapi.io/api/user";

const listaClientes = async () =>{
    const respuesta = await fetch("https://64b9872a79b7c9def6c12834.mockapi.io/api/user");
    return await respuesta.json();
};
const listaProductos = () => fetch("https://64b9872a79b7c9def6c12834.mockapi.io/api/prod").then((respuesta) => respuesta.json()).catch((error) => error);

const crearCliente = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
    return fetch((`${url}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            imagen,
            categoria,
            nombre_prod,
            precio_prod,
            descripcion_prod
      
        })
    })
}
const crearUsuario = (nombre, email, password) => {
    console.log(nombre, email, password)
    return fetch((`${url}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            nombre,
            email,
            password
      
        })
    })
}

const eliminarCliente = (id) =>{
    console.log("eliminar a", id)
    return fetch(`https://64b9872a79b7c9def6c12834.mockapi.io/api/prod/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = async (id) =>{
    const respuesta = await fetch(`https://64b9872a79b7c9def6c12834.mockapi.io/api/prod/${id}`);
    return await respuesta.json();
}

const actualizarProducto = async (imagen, categoria, nombre_prod, precio_prod, descripcion_prod,id) =>{
    try {
        const respuesta = await fetch(`https://64b9872a79b7c9def6c12834.mockapi.io/api/prod/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imagen, categoria, nombre_prod, precio_prod, descripcion_prod })
        });
        return respuesta;
    } catch (err) {
        return console.log(err);
    }
}

export const clientServices = {
    listaClientes,
    eliminarCliente,
}
export const listaServices = {
    eliminarCliente,
    listaProductos,
    crearCliente,
    crearUsuario,
    actualizarProducto,
    detalleProducto
}
