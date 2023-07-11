numero = 5
if (numero === 7) {
    a = "seja bem vindo"
    console.log(a)
} else if (numero === 5) {
    b = "retorne again"
    console.log(b)
}
else {
    c = "Nenhum dos dois"
    console.log(c)
}
//Faça um programa que some dois numeros e exiba uma mensagem com 
//o resultado apenas se o resultado for maior que 100. Se for menor que 100,
//imprima a mensagem "menor que 100".
a = 2
b = 3
soma = a + b
if (soma > 100) {
    d = "Maior que 100"
    console.log(d, soma)
}
else if (soma < 100) {
    e = "Menor que 100"
    console.log(e)
}
//Faça um programa que multiplica dois números e imprime uma mensagem 
//informando se o resultado deu "positivo" ou "negativo".
a = 5
b = -9
resultado = a * b
if (resultado > 0) {
    d = "positivo"
    console.log(d)
}
else if (resultado === 0) {
    f = "Neutro"
    console.log(f)
}
else {
    e = "negativo"
    console.log(e)
}

//Um número pode ser considerado como par quando o resto da divisão deste número por 2 é 0 (zero). Este mesmo número pode ser considerado como ímpar, quando o resto da divisão deste número por 2 resulta em 1. Faça um programa que verifica se um número é ímpar ou par. Se o número for ímpar, imprima a frase "O número é ímpar". Se o número for par, imprima a frase "O número é par.".
const numero = 67
let restoDivisao = numero%2 
if ( restoDivisao == 1 ) {
   console.log( "É um número ímpar")
} else  {
    console.log("É um número par")
}

