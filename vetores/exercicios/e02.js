

//construa um código que busque o elemento 2 no array utilizando loops para percorrer o aray
  //no final imprima o índice do array onde esse elemento se encontra. Caso o número não seja encontrado, 
 // imprima não encontrado:
 let codigonumero =[ 1,3,4,5,2, ] 

let existeelemento2 = false

codigonumero.map(function(item,i){
if (item===2) {
 existeelemento2 = true
}

else  if (existeelemento2!== true)
{
 existeelemento2 = false
}
})

if  (existeelemento2 === true) {
    console.log("encontrou")
} 
else console.log ("não encontrado")