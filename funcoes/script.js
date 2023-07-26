function primeirograu(b, c) {
    f = b + "x+" + c
    return f
}

console.log(primeirograu(5, 3))

function segundograu(a, b, c) {
    f = a + "x²+" + b + "x+" + c
    return f
}
console.log(segundograu(5, 2, 3))
//Para um jogo, precisamos saber se um personagem morreu ou não depois de 
//sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. 
//A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar 
//sua saúde menor ou igual a zero) e '0' caso contrário.

function estaMorto(dano, saude) {
    f = saude - dano
    if (f <= 0) {
        return 1
    }
    else {
        return 0

    }

}

console.log(estaMorto(800, 200))




//Precisamos limitar as posições em que um inimigo pode andar na tela. 
//A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou 
//menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que 
//recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica 
//se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.
function limitarPosicao(posicao) {
    if (posicao <= 0) {
        return 0
    }
    else if (posicao > 100) {
        return 100
    }
    else {
        return posicao
    }

}
console.log(limitarPosicao(100))

//Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C). Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).

//(F - 32 )*(5/9)

function fromFahrenheitToCelsius(fahrenheit){
   resultado= (fahrenheit - 32) *(5/9)
    return resultado
}
console.log(fromFahrenheitToCelsius(50))

console.log(fromFahrenheitToCelsius(80))

console.log(fromFahrenheitToCelsius(90))

//Escreva uma função que receba como parâmetro o ano em que a pessoa nasceu. Esta função deve calcular a idade da pessoa e depois retornar a idade calculada. Execute esta função e imprima a idade na tela como o exemplo: "Sua idade é: 25 anos".

function anoDeNascimento(ano){
    let resposta = 2023 - ano
    return resposta 
}
 console.log("Sua idade é: "+ anoDeNascimento(1995)+ " anos") 
 
 console.log("Sua idade é: "+ anoDeNascimento(1916)+ " anos") 
  
 console.log("Sua idade é: "+ anoDeNascimento(1954)+ " anos") 


//No jogo fotnite o jogador deve ficar dentro da área segura que é um domo que vai diminuindo de tamanho com o tempo. 
//Dependendo de onde o jogador esteja, caso sua posição esteja fora do domo, ele é eliminado da partida, caso ele ainda esteja dentro do domo,
//ele ainda está vivo. Faça uma função que receba três entradas, inicioDomo, fimDomo e posicaoJogador.
//Sendo que todas essas entradas são números inteiros. Caso a posicao do jogador seja maior do que o fim do domo ou menor do que o início do domo, 
//a função deve retornar "Você foi eliminado". 
//Caso a posição do jogador esteja entre o início e o fim do domo, a função deve retornar "Você ainda está na partida".

function fortnite(inicioDomo, fimDomo, posicaoJogador) {

    if ( posicaoJogador > fimDomo|| posicaoJogador < inicioDomo) {
        return "voce foi eliminado"
    }
    else {
        return "you be save"

    }

}

console.log(fortnite(100, 100,40))
