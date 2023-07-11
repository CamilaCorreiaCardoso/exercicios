//Uma arquiteta precisa criar um modelo 3D de sofá para utilizar na planta 3D que ela está desenhando graficamente. Para fazer esse modelo ela está utilizando o Autocad. Internamente, o Autocad internamente utiliza uma estrutura de código para representar esse modelo do sofá (material, cor, quantidade de braços...). Utilize uma estrutura de código para recriar a representação do sofá no código semelhante ao que seria no Autocad.
//Sofá
//material
// cor
// quantidade de braço

const sofa= { 
    material:"couro",
    cor:"vinho"
    
  
}
 console.log("O material é de " + (sofa.material) +" e na cor "+(sofa.cor))
 console.log(`O material é de ${sofa.material} e na cor ${sofa.cor}`)
console.log(sofa)
 
 const sofa1 = {
      material:"seda",
      cor:"turquesa",
      quantidadeDeBraco: 4,
      disponivelParaVenda: false 
 }
