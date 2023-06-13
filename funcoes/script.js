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