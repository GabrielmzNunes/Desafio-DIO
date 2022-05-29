/* 
// Estruturas condicionais 
// São instruções para realizar determinadas taregaz a partir de uma condição, seja decisão ou repetição;

//Estrutura de decisão
// if ( se )
// else ( se nao acontecer faça ...)
// else if (mais de uma condição)
// ninho de if ()
// if ternário

var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('os dois jogadores são válidos') : console.log('jogadores inválidos ');

//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}

//usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou um ponto');
    placar = jogador2 > jogador1;
}

//usando else
else {
    console.log('ninguem marcou ponto')
}

//usando swith
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('ninguem ganhou');
}
*/

//laços de repetição


let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', ];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' };

//for (repetição de instruçào até um status false) for([expressaoInicial]; [condicao]; [incremento]) {declaracao}
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}
*/

//for/in (arrays)
for (let i in array) {
    console.log(i);
}

//for/in (objects)
for (i in object) {
    console.log(i);

}

//for  of (arrays)
for (i of array) {
    console.log(i);
}

//for off objects
for (i of object.propriedade1) {
    console.log(i);
}

//while (executa uma instrução enquanto determinada condição for verdadeira, verificado antes da execução)
/*
var a = 0;
while (a < 10) {
    a++;
    console.log(a);

}
*/
// Do/while (instrução "até que" determinada condição seja falsa, verificado depois da execução)
var a = 0
do {
    a++;
    console.log(a);
} while (a < 4)