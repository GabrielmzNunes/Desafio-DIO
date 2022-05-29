//tipos primitivos

//boolean
var VouF = false;
console.log(typeof(VouF));

// number
var numeroqualquer = 1;
console.log(typeof(numeroqualquer));

//string
var nome = "Gabriel"
console.log(typeof(nome));

//como declarar variável
var variavel = "Gabriel";
variavel = 'Pinguim';
console.log(variavel);

//detracar let
let variavel2 = 'gabrielzin';
variavel2 = "Pinguimzin";
console.log(variavel2);

//declarar constante
const tagconstante = 'Gabriel';
console.log(tagconstante);

// Escopo global variável fora de um bloco
//Escopo local variável dentro de um bloco

var escopoGloba = 'global';
console.log(escopoGloba);

function escopolocal() {
    let escopolocalinterno = 'local';
    console.log(escopolocalinterno);
}
escopolocal()

// atribuição a uma variável usar =
var atribuição = 'gabriel';

// Comparação utilizar ==
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica ===
var comparacaoidentica = '0' === 0;
console.log(comparacaoidentica);


//operadores aritiméticos + - 

//soma
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 2;
console.log(multiplicacao);

//divisÃo
var divisao = 2 / 2;
console.log(divisao);

//divisao inteira (resto da divisão %)
var divisaointeira = 5 % 2;
console.log(divisaointeira);

//potenciaçào **
var potenciacao = 5 ** 2;
console.log(potenciacao);


// Operadores relacionados

var maiorQue = 5 > 2;
console.log(maiorQue);


var menoQue = 5 < 2;
console.log(menoQue);


var maioOuIgual = 5 >= 2;
console.log(maioOuIgual);

var menorOuIgual = 3 <= 2;
console.log(menorOuIgual);

// Operadores lógicos &&(valores sejam true)  ||(ou, considera que qualquer valor seja true)  !(não - inverte o valor de true para falce ou viceversa)


// &&
var e = true && false;
console.log(e);

// ||
var ou = true || false;
console.log(ou);

// !
var nao = !true;
console.log(nao);

//VETORES E OBJETOS
// arrays = tipos de listas ou matriz de variáveis