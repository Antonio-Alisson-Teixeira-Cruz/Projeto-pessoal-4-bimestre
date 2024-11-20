function soma(num1, num2){
    return num1 + num2   
}

function subtracao(num1, num2){
    return num1 - num2
}

function multiplicacao(num1, num2){
    return num1 * num2
}

function divisao(num1, num2){
    return num1 / num2
}

function quadrado(num){
    return num * num
}

let menu 

do{
    menu =  prompt(`Qual operação quer realizar?
    1 - Soma
    2 - Subtração
    3 - Multiplicação 
    4 - Divisão
    5 - Elevar ao quadrado
    6 - Sair`)

    switch(menu){
        case '1':
            let soma1 = prompt('Qual o primeiro número da soma?')
            let soma2 = prompt('Qual o segundo número da soma?')

            alert('O resultado da soma foi ' + soma(soma1, soma2))
            break

        case '2':
            let subtracao1 = prompt('Qual o primeiro número da subtração?')
            let subtracao2 = prompt('Qual o segundo número da subtração?')

            alert('O resultado da subtração foi ' + subtracao(subtracao1, subtracao2))
            break

        case '3':
            let multiplicacao1 = prompt('Qual o primeiro número da multiplicação?')
            let multiplicacao2 = prompt('Qual o primeiro número da multiplicação?')

            alert('O resultado da multiplicação foi ' + multiplicacao(multiplicacao1, multiplicacao2))
            break

        case '4':
            let divisao1 = prompt('Qual será o número que será dividido')
            let divisao2 = prompt('Qual será o número divisor?')

            alert('O resultado da divisão foi ' + divisao(divisao1, divisao2))
            break

        case '5':
            let quadrado1 = prompt('Qual o número que será elevado ao quadrado?')

            alert('O número ' + quadrado1 + ' elevado ao quadrado é ' + quadrado(quadrado1))
            break

        case '6':
            alert('Saindo...')
            break

        default:
            alert('Opção inválida.')
    }
}while(menu != '6')
