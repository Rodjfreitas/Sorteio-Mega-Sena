const paginaPrincipal = document.querySelector('.carregamento');
const paginaSorteio = document.querySelector('.sorteio');
const botaoSorteio = document.querySelector('.sortearbtn');
const botaoReset = document.querySelector('.reiniciarbtn');
var sorteio;
var mega = new Array();
var list = document.createElement('ul');




//Mudar de página ao clicar
function clicarSorteio(){    
    paginaPrincipal.style.display = 'none';
    paginaSorteio.style.display = 'block';
}

//Evento do Clique
botaoSorteio.addEventListener('click',clicarSorteio);

//Resetar a página para que possa sortear novos números no próximo evento de clique
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



//Transferência de informações do Array para Li//
const addLi = function(array){
    for(var i = 0; i < array.length; i++){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i])); 
        list.appendChild(item);               
    }    
    return list;    
}
document.getElementById('mostrar-lista').appendChild(addLi(mega));




