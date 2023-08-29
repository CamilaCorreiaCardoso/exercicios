//Construa um código que imprima todos os itens do array abaixo separados por vírgula.

let listanmr = [ 1, 2, 3, 4, 5,6 ]
console.log(listanmr) 
//console.log(listanmr[0])
//console.log(listanmr[0]+","+listanmr[1]+",")
let texto =""
for(let i =0;i<listanmr.length;i++){
    texto = texto +listanmr[i]+","
    
} 
console.log(texto.slice(0,-1))

