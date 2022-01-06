let teste = document.getElementsByClassName("teste");

for(let i = 0; i < teste.length; i++){
    let texto = teste[i].innerHTML;
    teste[i].innerHTML = 'Curso ' + texto + ' JS'
}

//ForEach percorre somente Array
 let arr = ["Miguel", 7, "2021", "Sobrinho"]

//  arr.forEach(function(elementos, indice){
//      console.log(elementos, ': ', indice);
//  });


//Alterando um elemento

// arr.forEach(function(elementos, indice){
//     if(elementos === "Sobrinho"){
//         arr[indice] = "Afilhado"
//     }
// });

// console.log(arr)

 // MAP só percorre array (igual forEach), o Map retorna uma nova Array ao contrário do ForEach.
let irma = ["Sarah", 18, "melhor"]
 irma.map(function(elementos, indice){
    if(elementos === "melhor"){
        irma[indice] = "Amiga"
    }
});

console.log(irma)
 