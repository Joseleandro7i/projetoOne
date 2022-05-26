//desenha um retrângulo primeiro
function desenharetrangulo() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    
    pincel.fillStyle = "#5a4724ea";
    pincel.fillRect(40, 33, 10, 81);
}

//desenha agora triângulo perto do top do primeiro retrângulo
function desenhatriangulo() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    
    pincel.fillStyle="#5a4724ea"
    pincel.beginPath();
    pincel.moveTo(40, 26);
    pincel.lineTo(50, 33);
    pincel.lineTo(40, 66);
    pincel.fill();
   
}

//desenha  segundo retângulo
function desenhasegretrangulo() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    
    pincel.fillStyle = "#5a4724ea";
    pincel.fillRect(41, 26, 90, 8);
}

//desenha detalhes da forca
function desenhadetalhes() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    
    pincel.fillStyle = "black";
    pincel.fillRect(41, 26, 90, 1);

    pincel.fillStyle = "black";
    pincel.fillRect(130, 26, 1, 8);

    pincel.fillStyle = "black";
    pincel.fillRect(130, 26, 1, 8);
}
 
