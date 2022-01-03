function copiar(){
    let texto = document.getElementById('texto');
    texto.selected();
    document.execCommand("copy");

    alert('Texto copiado:' + texto.value)
}