var lista = ['aluno1','aluno2',100];
//consumindo o array
console.log(lista)

//consumindo um elemento especifico do array
 console.log(lista[2]);

 //descobrindo o tamanho do array
 console.log(lista.length);

 //saber se um elemento está ou não no array
 console.log(lista.indexOf('aluno3'));
 console.log(lista.indexOf('aluno1'));

 //alterar uma informação dentro do array
 lista[0]='Helo';
 console.log(lista);
 lista[1]='Lorenzo';
 console.log(lista);
 lista[2]=3;
 console.log(lista);
 
 //inserir novo elemneto dentro do array 
 lista.push('Clementina');
 console.log(lista);
 
 //excluir o 1º elemento do array
 lista.shift();
 console.log(lista);
 
 //excluir o ultimo elemento do array
 lista.pop();
 console.log(lista);

 //retornar os itens dentro do array com um separador
 console.log(lista.join(';'));