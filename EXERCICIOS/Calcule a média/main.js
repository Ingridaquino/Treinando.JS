// document.getElementById("demo").innerHTML = "Hello JavaScript";
const botton = document.getElementById("button");

botton.addEventListener('click', () =>{
    document.getElementById("demo").innerHTML = "Hello JavaScript";

    console.log("Eu passei aqui!")

})

//
//O uso de document.write () após o carregamento de um documento HTML excluirá todos os HTML existentes :
document.write(10 + 5);

/*Você pode pular a windowpalavra - chave.

Em JavaScript, o objeto de janela é o objeto de escopo global, o que significa que variáveis, propriedades e métodos, por padrão, pertencem ao objeto de janela. Isso também significa que especificar a windowpalavra-chave é opcional:*/
window.alert("Wellcome");

