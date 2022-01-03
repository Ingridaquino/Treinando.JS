function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML += num;

}


function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); // Para apagar 1 caracter a cada click 
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
}