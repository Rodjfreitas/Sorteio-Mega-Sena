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
    paginaPrincipal.style.display = 'block';
    paginaSorteio.style.display = 'none';
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




const addLi = function(array){


    for(var i = 0; i < array.length; i++){
        

        item.appendChild(document.createTextNode("numero: "+ sorteio.indexOf(array[i])));
        list.appendChild(item);        
    }
    console.log(list);    
    return list;
    
}

document.getElementById('mostrar-lista').appendChild(addLi(sorteio));







