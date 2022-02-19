//Atividadde da Situação Problema e da Atividade 2 da matéria Lógica de programação do curso Desenvolvedor Full Stack do SENAI
//console.clear();
let prompt = require('prompt-sync')();// da biblioteca prompt para pegar dados de entrada do terminal
let num_menu =0;
//let contador_evento = 1;
let contador_participante = 0;
let num_participante = 0;

//variaveis cadastro evento
var data_evento = ['28/02/2022'];
var nome_evento = ['É dia de Java'];

//variáveis cadastro de participante
var nome_participante = [];
var idade_participante = [];
var tipo_participante = [];



console.log("\nSistema de Evento\n");
do{
    //menu de opções do sistema
    console.group('Menu');
        console.log("1 - Cadastrar novo evento");
        console.log("2 - Cadastrar Participante/Palestrante");
        console.log("3 - Lista de participantes e palestrantes por evento");
        console.log("4 - Fechar");
    console.groupEnd();

    //entrada de valor via terminal
    num_menu = prompt('Digite o número da opção desejada: ');
    //console.log("Digitei:"+num_menu);
//----------------------------------------------------

        //opção 1 - cadastro de evento
        if(num_menu==1){
            console.log("\nCadastro de evento");

            //entrada data informada
            let data_informada = prompt('Informe a data do evento, no formato dd/mm/aaaa: ');
            data_evento.push(data_informada);
            //console.log(data_evento[contador_evento]);
            //pega data atual
            var data = new Date(data_informada.split('/').reverse().join('/'));
            var novaData = new Date();

            if(data <= novaData) {
                console.log("Cadastro não permitido por data inválida. Essa data já passou.");
            }else{
                nome_informado = prompt('Informe o nome do evento: ');
                nome_evento.push(nome_informado);
                //console.log(nome_evento[contador_evento]);
                console.log("Cadastro de evento realizado!");
            }
            
            //contador_evento=+1;
            console.log("\nVoltando ao menu.\n");
        }else
//--------------------------------------------------------
        //opção 2 - cadastro de participantes
        if(num_menu==2){
            console.log("\nCadastro de Participante");
            contador_participante=+1;
            console.log("\nVoltando ao menu.\n");
        }else
//--------------------------------------------------------
        //opção 3 - lista de participantes e palestrantes por evento
        if(num_menu==3){
            console.log("\nLista de participantes e palestrantes por evento");
            console.log("\nVoltando ao menu.\n");
        }else
//--------------------------------------------------------
        //opção 4 - fechar
        if(num_menu==4){
            console.log("Fechando o programa.");
        }else{
            console.log("Número inválido, digitar novamente.");
        }

}while (num_menu!=4)

