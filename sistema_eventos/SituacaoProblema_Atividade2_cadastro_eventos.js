//Atividadde da Situação Problema e da Atividade 2 da matéria Lógica de programação do curso Desenvolvedor Full Stack do SENAI
//console.clear();
let num_menu =0;
let prompt = require('prompt-sync')();// da biblioteca prompt para pegar dados de entrada do terminal

do{
    //menu de opções do sistema
    console.log("\nSistema de Evento\n");
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
            
        }else
        //opção 2 - cadastro de participantes
        if(num_menu==2){
            console.log("\nCadastro de Participante");
            
        }else
        //opção 3 - lista de participantes e palestrantes por evento
        if(num_menu==3){
            console.log("\nLista de participantes e palestrantes por evento");
        }else
        //opção 4 - fechar
        if(num_menu==4){
            console.log("Fechando o programa.");
        }else{
            console.log("Número inválido, digitar novamente.");
        }

}while (num_menu!=4)

