function tocar (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'  ) {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
}
}


const listaDeTeclas=document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    // template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocar(idAudio);
    }
    tecla.onkeydown=function(evento){ 
        
        if(evento.code ==='space'|| evento.code ==='Enter'){
            tecla.classList.add('ativa');
        }
        
    }
    
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }
} 



// contador=0;
// while (contador<listaDeTeclas.length) {
//     const instrumento=listaDeTeclas[contador].classList[1];
   
//     listaDeTeclas[contador].onclick=function(){
//         tocar(`#som_${instrumento}`);
//     };
//     contador=contador + 1;
// }


