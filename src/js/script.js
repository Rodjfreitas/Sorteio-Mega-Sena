const paginaPrincipal = document.querySelector('.carregamento');
const paginaSorteio = document.querySelector('.sorteio');
const botaoSorteio = document.querySelector('.sortearbtn');
const botaoReset = document.querySelector('.reiniciarbtn');
var sorteio;
var mega = new Array();
var list = document.createElement('ul');
var item = document.createElement('li');




function clicarSorteio(){    
    paginaPrincipal.style.display = 'none';
    paginaSorteio.style.display = 'block';
}


botaoSorteio.addEventListener('click',clicarSorteio);


function clicarReset(){
    location.reload();

}

botaoReset.addEventListener('click',clicarReset);


//Sorteio da Mega//

var i = 0;
while( i < 6){

    sorteio = Math.ceil(Math.random()*60);     
    if(mega.indexOf(sorteio) < 0){        
        mega.push(sorteio);                             
        i++; 
                     
    }  

function ordenarNumeros(a,b){
    return a-b;
}
mega.sort(ordenarNumeros);
}
console.log(mega);


//Transferência de informações do Array para Li//

const addLi = function(array){


    for(var i = 0; i < array.length; i++){
        
        list.appendChild(item); 
        item.appendChild(document.createTextNode(mega[i]));
        
               
    }
    
    console.log(list);    
    return list;
    
}



document.getElementById('mostrar-lista').appendChild(addLi(mega));







