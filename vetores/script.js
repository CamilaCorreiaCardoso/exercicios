let listadenumeros = [ 4, 8, 9, 13, 54,60 ]
//console.log(listadenumeros)
//console.log(listadenumeros[3])
//console.log(listadenumeros.length)
//listadenumeros[0]= listadenumeros[0]+1
console.log(listadenumeros)

//loop for
for(let i =0;i<listadenumeros.length;i++){
    listadenumeros[i]= listadenumeros[i]+1

}
console.log(listadenumeros)

//for(let i =0;i<listadenumeros.length;i++){
  // console.log(`i=${i}`)
//}

for(let i =0;i<=1;i++){
    console.log(`i=${i}`)
    console.log(listadenumeros [i])
 }


 //laço de repetição MAP OU MAPPING
 const listadestrings = [ "alegria","felicidade","paz", "pix", "dinheiro","money"]
 console.log("listadestrings",listadestrings)
 const novalistadestring =listadestrings.map((str,i)=>{
    console.log(str,i)
    return i
 })
 console.log("novalistadestring",novalistadestring)

//laço de repetição FOR EACH
const listadelocais = [ "gramado","maldivas","grécia", "paris", "canadá","brasil"]
console.log("listadelocais", listadelocais)
const novalistadelocais=listadelocais.forEach((str,i)=>{
   console.log(str,i)
   return str
})
console.log("novalistadelocais",novalistadelocais)

