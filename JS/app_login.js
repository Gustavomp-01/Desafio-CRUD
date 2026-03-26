let usuario_aceito = "admin";
let senha_aceita = 1234;

// Busca formulário de Login
const formLogin = document.querySelector("#formlogin");

// Adicionar o evento ouvinte
formLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();

    // Ao clicar no login ele deve checar se o usuário e senha estão corretos e carregar a página de admin.
    efetuarlogin();

});

function efetuarlogin(){

    const user = formLogin.user.value;
    const password = formLogin.senha.value;

    if(user == usuario_aceito && password == senha_aceita){
        window.location.replace("Admin.html");
    }else{
        alert("Usuário ou senha incorretos ! Tente novamente.");
    }
}