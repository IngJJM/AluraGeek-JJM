const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", (event)=>{
    event.preventDefault();
    location.href = "login.html"
});

const btnConsolas = document.querySelector("#btnConsolas");
btnConsolas.addEventListener("click", (event)=>{
    event.preventDefault();
    document.getElementById("consolas_section").scrollIntoView();
});

