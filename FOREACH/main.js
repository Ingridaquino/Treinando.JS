let listaDePessoasAprovadas =[
    'amora@gmail.com',
    'margareth@gmail.com',
    'jaypark@live.com',
    'simondominic@live.com'
];

const enviarEmail =(email) =>{
    console.log(`Email para ${email} foi enviado com sucesso`)
};

listaDePessoasAprovadas.forEach((item, posicao, array) =>{
    enviarEmail(item);
    console.log(`Sua posição é: ${posicao}`);
    console.log(`A quantidade de participantes é: ${array.length}`)
})