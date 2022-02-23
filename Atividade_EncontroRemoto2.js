let numeroDeAlunos = 10;

//rodada
for (let contador = 0; contador<=numeroDeAlunos; contador++){
    //console.log(contador);

    if(contador==0)
    {
        console.log("O numero atual é igual a zero: ", +contador);
    }else
    if(contador%2 == 0){
        console.log("O numro "+contador+" é par.");
    }else{
        console.log(`O numro ${contador} é impar.`);
    }
}

