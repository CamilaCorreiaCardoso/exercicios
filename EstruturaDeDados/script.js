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

//Uma locadora precisa de um sistema para gerenciar todas as locações e carros que estão disponíveis ou locados. Construa uma estrutura para representar a entidade Carro dessa locadora. A partir desta estrutura, construa três exemplos diferentes de carros. Dentre os atributos do Carro, é indispensável ter a marca do carro, quilômetros rodados, ano do carro, valor de locação, se o carro está locado ou não, placa do carro. Imprima os atributos de cada carro em cada linha.

const carro01 = {
 marca: "hilux",
 km: "18000",
 ano: "2016",
 valor: 450.00,
 estaDisponivel: true,
placa:"JRB01496"
}

const carro02 = {
marca: "hondaCivic",
 km: "38000",
 ano: "2018",
 valor: 480.00,
 estaDisponivel:false,
placa:"JQC4506"
}

const carro03 = { 
    marca: "corola",
    km: "12000",
    ano: "2023",
    valor: 680.00,
    estaDisponivel:false,
    placa:"QTV1624"
}
console.log(carro01)
console.log(carro02)
console.log(carro03)


if (!carro02.estaDisponivel){
    console.log("carro locado")
}

if (carro01.estaDisponivel){
    console.log("carro disponível")
}
