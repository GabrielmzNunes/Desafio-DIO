function calculadora() {
    const operacao = prompt('escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)\n 5 - Divisão inteira(%) \n 6 - Potenciação (**) ');


    if (!operacao || operacao >= 7 || operacao <= 0) {
        alert('Erro, insira um número de 1 a 6');
        calculadora();
    } else {

        let n1 = Number(prompt('insira o primeiro valor para calcular: '));
        let n2 = Number(prompt('Insira um segundo valor para calcular: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Insira um valor inteiro');
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`a elevação do ${n1} por ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            // aqui faz com que a calculadora não pare

            function novaOperacao() {
                let opcao = prompt('deseja fazer outra operação? 1 - sim / 2 - não')
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert(`Até mais, obrigado!`)
                } else {
                    alert(`Digite uma opção válida`)
                }
            }
        }
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisao();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }

        /*
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        } */

    }
}

calculadora();