var botaoini = document.querySelector(".botaoini");
botaoini.addEventListener("click", function(event){
    event.preventDefault();
});

function iniciarosrecusosdojogo() {
 	var tela = document.querySelector("canvas");
        tela.classList.add("tamanho");
        var botaoini = document.querySelector(".botaoini");
        botaoini.style.display = "none";
        var botaoadi = document.querySelector(".botaoadi");
        botaoadi.style.display = "none";

}

function desenharcamposdojogo(x, y) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.fillRect();


}

desenharcamposdojogo(200, 100);
