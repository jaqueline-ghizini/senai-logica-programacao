// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";


//------------------------------------------------//

//Listagem de estudantes
let listaDeEstudantes = ["Helena", "Chico", "Mário"]; //armazenar uma lista de estudantes
let quantidadeDeEstudantes = listaDeEstudantes.length; //obter o resultado da quantidade de elementos que a listaDeEstudantes possui
console.log(quantidadeDeEstudantes);

//Com o FOR. Através do comando FOR é possível percorrer a partir do índice zero até o seu total, imprimindo os valores contidos a cada passo da iteração
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) { 
	const alunoCorrente = listaDeEstudantes[indice];
	console.log(alunoCorrente);
}

//Com o do:
let inicio = 0;
do {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
} while (inicio < quantidadeDeEstudantes);

//Com o while:
while (inicio < quantidadeDeEstudantes) {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
}

// também seja possível inserir um novo item ou remover.
listaDeEstudantes.push("José");
listaDeEstudantes.push("Maria");
let quantidadeDeEstudantes = listaDeEstudantes.length;
// coloca um linite para adicionar outros estudantes
if (quantidadeDeEstudantes < 5) {
    listaDeEstudantes.push("João");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}

//------------------------------------------------//

// laço em for com contagem de 1 até 10
for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}