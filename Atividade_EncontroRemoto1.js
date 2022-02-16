//ATIVIDADE ENCONTRO REMOTO 

var listaDePecas = ["Amortecedor", "Motor", "Filtro do Ar", "ar"] // vetor ou array

let peso = 200

// 1 - verificação de peso
if (peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça tem o peso adequado")
}

// 2 - caixa suporta até 10 peças
if(listaDePecas.length < 10){ //length diz o tamanho da listas, ou seja a quantidade de iténs na array
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não tem mais espaço na lista")
}

//3 - Verifica quantidade decaracteres no nome
if(listaDePecas[3].length <= 3 ){
    console.log("Erro no cadatro do nome, não está completo, deve ter mais que 3 letras")
}else
if(listaDePecas[3].length > 3 ){
    console.log("Nome está certo para cadastro")
}else
if (listaDePecas[3].length == 0 ){
    console.log("Nome não pode ser vazio")
}

//3 - outra for de resolver, mais completa
var numeroPecas = listaDePecas.length;
var i = 0;
while(i<numeroPecas){
    if(listaDePecas[i].length > 3 ){
        console.log("O nome esttá adequado para o cadastro")
    }else
    if(listaDePecas[i].length == 0 ){
        console.log("Nome não pode ser vazio")
    }else{
        console.log("Nome deve ter mais de 3 caracteres, digite novamente")
    }
    i = i+1;
}

// 3 - outra forma de resolver (professor)
let nomePeca = "Discode freio"
if(nomePeca.length > 3 ){
    console.log("O nome esttá adequado para o cadastro")
}else
if(nomePeca.length == 0 ){
    console.log("Nome não pode ser vazio")
}else{
    console.log("Nome deve ter mais de 3 caracteres, digite novamente")
}