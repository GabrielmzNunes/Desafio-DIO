// O que Sào vetores ou array

/*
//declarar array 
let array1 = ['strig', 1, true];
console.log(array1);
*/


// arrays podem guardar vários tipos de dados
let array = ['string', 1, true, ['array1'],
    ['array2'],
    ['array3']
];
console.log(array[3]);
//esse número 3 é referente ao posicionamento das condições

/*

// Manipulando arrays

//forEach() = itera um array;
array.forEach(function(item, index) { console.log(item, index) });

// push() - adiciona item no fim do array;
array.push('novo item');
console.log(array);

// pop() - remove item no final do array;
array.pop();
console.log(array);

// shift() - remove item no inicio do array;
array.shift();
console.log(array);

// unshift() add item no início do array;
array.unshift('novo item 2');
console.log(array);

// indexOf() - retorna o íncide de um valor;
console.log(array.indexOf[true]);

// splice() - remove ou substitui um item pelo índice;
array.splice(0, 3);
console.log(array);

// slice() - rerona uma parte de um array existente;
let novoArray = array.slice(0, 3);
console.log(array);

// O que são objetos
// são dados com propriedades e valores declarados entre {}

*/
let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { obectInterno: 'objeto interno' } };
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array
console.log(arrayInterno);