let numero  = 5
if (numero === 7) {
   let a = "seja bem vindo"
    console.log(a)
} else if (numero === 5) {
   let b = "retorne again"
    console.log(b)
}
else {
    let c = "Nenhum dos dois"
    console.log(c)
}
//Faça um programa que some dois numeros e exiba uma mensagem com 
//o resultado apenas se o resultado for maior que 100. Se for menor que 100,
//imprima a mensagem "menor que 100".
let a = 2
let b = 3
let soma = a + b
if (soma > 100) {
  let  d = "Maior que 100"
    console.log(d, soma)
}
else if (soma < 100) {
   let e = "Menor que 100"
    console.log(e)
}
//Faça um programa que multiplica dois números e imprime uma mensagem 
//informando se o resultado deu "positivo" ou "negativo".
a = 5
b = -9
let resultado = a * b
if (resultado > 0) {
  let  d = "positivo"
    console.log(d)
}
else if (resultado === 0) {
   let f = "Neutro"
    console.log(f)
}
else {
   let  e = "negativo"
    console.log(e)
}

//Um número pode ser considerado como par quando o resto da divisão deste número por 2 é 0 (zero). Este mesmo número pode ser considerado como ímpar, quando o resto da divisão deste número por 2 resulta em 1. Faça um programa que verifica se um número é ímpar ou par. Se o número for ímpar, imprima a frase "O número é ímpar". Se o número for par, imprima a frase "O número é par.".
numero = 67
let restoDivisao = numero%2 
if ( restoDivisao == 1 ) {
   console.log( "É um número ímpar")
} else  {
    console.log("É um número par")
}

