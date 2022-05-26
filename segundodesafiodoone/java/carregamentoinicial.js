var botaoini = document.querySelector(".botaoini");
botaoini.addEventListener("click", function(event){
    event.preventDefault();
});

  var criarbotaonovojogo = document.querySelector(".botaonovojogo");
    criarbotaonovojogo.style.visibility = "hidden";
    var criarbotaodesistir = document.querySelector(".botaodesitir");
    criarbotaodesistir.style.visibility = "hidden";

function iniciarosrecusosdojogo() {
 	              
        var botaoini = document.querySelector(".botaoini");
        botaoini.style.display = "none";
        var botaoadi = document.querySelector(".botaoadi");
        botaoadi.style.display = "none";

        var criarbotaonovojogo = document.querySelector(".botaonovojogo");
        criarbotaonovojogo.style.visibility = "visible";
        var criarbotaodesistir = document.querySelector(".botaodesitir");
        criarbotaodesistir.style.visibility = "visible";
            
        var tela = document.querySelector("canvas");
        tela.classList.add("tamanho");    
          tela.style.background="#46798b";         
        var pincel = tela.getContext("2d");
        pincel.fillStyle = "#341b8f";
         pincel.fillRect(7, 143, 20, 1);
         var iniciarosrecusosdojogo = colocarbotoesrestantes();
         var iniciarosrecusosdojogo = desenharetrangulo();
         var iniciarosrecusosdojogo = desenhatriangulo();
         var iniciarosrecusosdojogo = desenhasegretrangulo();
         var iniciarosrecusosdojogo = desenhadetalhes();
 }

 function colocarbotoesrestantes() {
    

    criarbotaonovojogo.classList.add("botaonovojogo");
    var criarp = document.querySelector(".novojogo");
    criarp.textContent = "novo jogo";

    var criarbotaodesistir = document.querySelector(".botaodesitir");
    criarbotaodesistir.classList.add("botaodesistir");
    var criarpdesistir = document.querySelector(".desistir");
    criarpdesistir.textContent = "desistir";
    
 }
            
 









