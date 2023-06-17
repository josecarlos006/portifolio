let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//receber resultados
const btn = document.querySelector("#send");

    btn.addEventListener("click", function(e) {

        e.preventDefault();

        const nome = document.querySelector("#nome");
        const numero = document.querySelector("#numero");
        const email = document.querySelector("#email");
        const tema = document.querySelector("#tema");
        const mensagem = document.querySelector("#mensagem");
        const value = nome.value;
        const resultado = email.value;
            console.log(value);
            console.log(resultado);

    });