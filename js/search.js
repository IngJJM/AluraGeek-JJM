document.querySelector(".search_principal").addEventListener("submit", (evento) => {

    evento.preventDefault();
    const buscador = document.querySelector(".search").value;
    window.location.href =`producto_buscado.html?buscar=${buscador}`;
});
