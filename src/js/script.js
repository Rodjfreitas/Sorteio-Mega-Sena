const paginaPrincipal = document.querySelector('.carregamento');
const paginaSorteio = document.querySelector('.sorteio');
const botaoSorteio = document.querySelector('.sortearbtn');
const botaoReset = document.querySelector('.reiniciarbtn');




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