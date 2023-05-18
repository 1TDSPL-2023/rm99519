//
let listaDeUsuario = [
{
    nomeCompleto : "Edulado Capacho",
    emailUsuario : "dudu@email.com",
    senhaUsuario : "123456"
},
{
    nomeCompleto : "Jose das Couves",
    emailUsuario : "jose@email.com",
    senhaUsuario : "123456"
},
{
    nomeCompleto : "Paulo Cabuloso",
    emailUsuario : "paulo@email.com",
    senhaUsuario : "123456"
},
{
    nomeCompleto : "Leonardo Tufo",
    emailUsuario : "lele@email.com",
    senhaUsuario : "123456"
},
{
    nomeCompleto : "Mathias Aires",
    emailUsuario : "momo@email.com",
    senhaUsuario : "123456"
},
];




localStorage.setItem("key", Object)


const inputEmail = document.querySelector("#idEmail")
const inputSenha = document.querySelector("#idPass")
const msgStatus = document.querySelector("#msg")
//captura de todos os elementos
addEventListener("click", (evt)=>{

    //criando um objeto
    let usuarioLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }
    let usuarioValidado = {};
    //recuperando um elemento do DOM
    if(evt.target.id == "btnSubmit"){
        // listaDeUsuario.forEach((usuario)=>{

        //     if (usuarioLogado.emailUsuarioLogado == usuario.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario) {
        //         console.log("Validado!")
        //     } else {
        //         console.log("Não Validado!")
        //     }

        // });
        for(let x = 0; x < listaDeUsuarios.length; x++){
            if(usuarioLogado.emailUsuarioLogado == listaDeUsuario[x].emailUsuario && usuarioLogado.senhaUsuarioLogado == listaDeUsuario[x].senhaUsuario){
            //passando para o obj oq foi validado
            usuarioValidado = listaDeUsuarios[x];
            break;
            }
        }
        if (usuarioLogado.emailUsuarioLogado == usuarioValidado.emailUsuario && usuarioLogado.senhaUsuarioLogado == usuarioValidado.senhaUsuario) {
            msgStatus.setAttribute("style", "color:green");
            msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} logou com sucesso!</strong></span>`;
        } else {
            msgStatus.setAttribute("style","color:red");
            msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
            
        }
    }
    
});