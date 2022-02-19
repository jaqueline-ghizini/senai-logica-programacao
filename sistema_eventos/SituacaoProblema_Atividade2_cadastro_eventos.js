//Atividadde da Situação Problema e da Atividade 2 da matéria Lógica de programação do curso Desenvolvedor Full Stack do SENAI
//console.clear();
let prompt = require('prompt-sync')();// da biblioteca prompt para pegar dados de entrada do terminal
let num_menu =0;
let contador = 0;
let cont = 0; 
let verificador = 0;
let contador_participante = 0;
var num_participante = [];
num_participante[0]=97;

//variaveis cadastro evento
var data_evento = ['28/02/2023'];
var nome_evento = ['É dia de Java'];

//variáveis cadastro de participante
var evento_participante = [];
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

            do{
                //entrada data informada
                let data_informada = prompt('Informe a data do evento, no formato dd/mm/aaaa: ');
                data_evento.push(data_informada);
                //pega data atual
                var data = new Date(data_informada.split('/').reverse().join('/'));
                var novaData = new Date();

                if(data <= novaData) {
                    contador = 1;
                    console.log("Cadastro não permitido por data inválida. Essa data já passou.");
                }else{
                    nome_informado = prompt('Informe o nome do evento: ');
                    nome_evento.push(nome_informado);//acrescenta na array
                    num_participante[nome_evento.length-1] = 0;// atribui o valo 0 ao número de participantes inscritos nesse evento que acabou de ser criado
                    console.log("\nCadastro de evento realizado!");
                    contador = 0;
                }
            }while(contador==1)
            
            console.log("Voltando ao menu.\n");
        }else
//--------------------------------------------------------
        //opção 2 - cadastro de participantes
        if(num_menu==2){
            console.log("\nCadastro de Participante\n");
            console.log("Lista de eventos para participar: ");
            for( var i=0; i< nome_evento.length; i++){
                num_indice = i+1;
                console.log(num_indice+" - "+nome_evento[i]);
                console.log("Ocorrerá em: "+data_evento[i]+"\n");
            }

            do{//verifica escolha do evento está correta
                var evento_escolhido = prompt('Digite o número do evento desejado: ');
                if((evento_escolhido>nome_evento.length)||(evento_escolhido==0)){
                    console.log("Número incorreto.");
                    cont=1;
                }else{
                    cont=0;
                }
            }while(cont==1)
           
            do{//verifica a idade
                let idade_informada = prompt('Informe a idade: ');

                if(idade_informada < 18) {
                    contador = 1;
                    console.log("Cadastro não permitido pela idade. Tem que ser maior que 18.");
                }else{// sendo maior de 18
                    let nomeP_informado = prompt('Informe o nome do participante: ');

                    do{//verifica palestrante ou participante
                        let tipo_informado = prompt('Informe 1- para Palestrate ou 2- para Participante: ');

                        if(tipo_informado==1){
                            console.log("\nCadastro de palestrante realizado!");
                            verificador=0;
                        }else
                        if(tipo_informado==2){
                            let n = evento_escolhido-1;
                            if(num_participante[n]>=100){//verifica limite de participantes
                                console.log("O cadastro não será possível por ter excedido o limite de 100 inscritos para esse evento")
                            }else{ 
                                evento_participante.push(n);
                                idade_participante.push(idade_informada);
                                nome_participante.push(nomeP_informado);
                                tipo_participante.push(tipo_informado);
                                console.log("\nCadastro de participante realizado!");
                                num_participante[n] = num_participante[n]+1;//soma mais um participante inscrito
                                console.log("Númeo de inscritos nesse evento até o momento: "+num_participante[n]);
                            }
                            verificador=0;
                        }else{
                            verificador=1;
                            console.log("Opção incorreta.\n");
                        }
                    }while(verificador==1)
                    
                    contador = 0;
                }

            }while(contador==1)
               
            //contador_participante=+1;
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

