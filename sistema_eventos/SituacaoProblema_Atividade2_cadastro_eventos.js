//Atividadde da Situação Problema e da Atividade 2 da matéria Lógica de programação do curso Desenvolvedor Full Stack do SENAI
//console.clear();
let prompt = require('prompt-sync')();// da biblioteca prompt para pegar dados de entrada do terminal
//contadores
let num_menu =0;
let contador = 0;
let cont = 0; 
let verificador = 0;
let contador_lista = 0;//contador para fazer os laços de repetição para exibir as listas
let indice_lista = 0; //número que aparece na frente do nome na lista
let tem_participante = 0;//para distinguir quando não tiver participante inscrito no evento
let evento_lista=0;//para ter o número do evento 

//contador de número de participantes
var num_participante = [];
num_participante[0]=97;

//variaveis cadastro eventojá com um evento, mas pode cadastrar mais
var data_evento = ['28/02/2023'];
var nome_evento = ['É dia de Java'];

//variáveis cadastro de participante já com alguns exemplos para exibir na lista, mas pode cadastrar mais e tabmém em eventos distintos
var evento_participante = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var nome_participante = ['Ana','Beatriz','Gustavo','Gabriel','João','Guilherme','Juliana','Catia','Rita','Maria','Pedro','Joaquim','Daniel','Jane','Lorenço','Amanda','Adriana','Felipe','Fabio','Yui'];
var idade_participante = [19,35,56,40,18,30,32,25,22,27,36,42,18,19,20,60,19,29,31,33];
var tipo_participante = [2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1];



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

//-----------------------------------------------------------------
        //opção 1 - cadastro de evento
        if(num_menu==1){
            console.log("\nCadastro de evento\n");

            do{
                //entrada data informada
                let data_informada = prompt('Informe a data do evento, no formato dd/mm/aaaa: ');
                
                //pega data atual
                var data = new Date(data_informada.split('/').reverse().join('/'));
                var novaData = new Date();

                if(data <= novaData) {
                    contador = 1;
                    console.log("Cadastro não permitido por data inválida. Essa data já passou.");
                }else{
                    data_evento.push(data_informada);
                    nome_informado = prompt('Informe o nome do evento: ');
                    nome_evento.push(nome_informado);//acrescenta na array
                    num_participante[nome_evento.length-1] = 0;// atribui o valo 0 ao número de participantes inscritos nesse evento que acabou de ser criado
                    console.log("\nCadastro de evento realizado!");
                    contador = 0;
                }
            }while(contador==1)
            
            console.log("Voltando ao menu.\n");
        }else
//----------------------------------------------------------------
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

                        let n = evento_escolhido-1;
                        if(tipo_informado==1){
                            evento_participante.push(n);
                            idade_participante.push(idade_informada);
                            nome_participante.push(nomeP_informado);
                            tipo_participante.push(tipo_informado);
                            console.log("\nCadastro de palestrante realizado!");
                            verificador=0;
                        }else
                        if(tipo_informado==2){
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
//---------------------------------------------------------------
        //opção 3 - lista de participantes e palestrantes por evento
        if(num_menu==3){
            console.log("\nLista de participantes e palestrantes por evento\n");
                //exibe eventos
                console.log("Lista de eventos para consultar: ");
                for( var c=0; c< nome_evento.length; c++){
                    num_indice = c+1;
                    console.log(num_indice+" - "+nome_evento[c]);
                    console.log("Ocorrerá em: "+data_evento[c]+"\n");
                }
    
                do{//verifica escolha do evento está correta
                    var evento_selecionado = prompt('Digite o número do evento desejado: ');
                    if((evento_selecionado>nome_evento.length)||(evento_selecionado==0)){
                        console.log("Número incorreto.");
                        cont=1;
                    }else{
                        cont=0;
                    }
                }while(cont==1)
                
                
                evento_lista = evento_selecionado-1;
                //exibe palestrantes por evento
                console.log("\nLista de Palestrantes do evento "+nome_evento[evento_lista]);
                contador_lista=0;
                indice_lista=0;
                tem_participante=0;
                while(contador_lista< nome_participante.length){
                    if((tipo_participante[contador_lista]==1)&&(evento_participante[contador_lista]==evento_lista)){
                        indice_lista = indice_lista+1;
                        console.log(indice_lista+" - "+nome_participante[contador_lista]+" - Idade: "+idade_participante[contador_lista]);
                        tem_participante=1;
                    }
                    
                    contador_lista = contador_lista+1;
                }// se não tiver nenhum palestrate
                if(tem_participante==0){
                    console.log("Nenhum palestrante cadastrado para esse evento");
                }

                //exibe participantes por evento
                console.log("\nLista de Participantes do evento "+nome_evento[evento_lista]);
                contador_lista=0;
                indice_lista=0;
                tem_participante=0;
                while(contador_lista< nome_participante.length){
                    if((tipo_participante[contador_lista]==2)&&(evento_participante[contador_lista]==evento_lista)){
                        indice_lista = indice_lista+1;
                        console.log(indice_lista+" - "+nome_participante[contador_lista]+" - Idade: "+idade_participante[contador_lista]);
                        tem_participante=1;
                    }
                    contador_lista = contador_lista+1;
                }
                if(tem_participante==0){//se não tiver participantes
                    console.log("Nenhum participante cadastrado para esse evento");
                }

            console.log("\nVoltando ao menu.\n");
        }else
//---------------------------------------------------------------
        //opção 4 - fechar
        if(num_menu==4){
            console.log("Fechando o programa.");
        }else{
            console.log("Número inválido, digitar novamente.");
        }

}while (num_menu!=4)

