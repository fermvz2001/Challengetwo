var pantalla = document.querySelector("#ahorcado");

var pincel = pantalla.getContext("2d");
pincel.font = "bold 22px sans-serif";


var palabras = ["ALURA","ORACLE","ONE","FORNITE","SKIN","THEGREFT","AURONPLAY","MARVEL","SPIDERMAN"];



function sortear(){
    var aleatorio = Math.round(Math.random()*(palabras.length-1));
    var palabraSorteada = palabras[aleatorio];
    return palabraSorteada;
}

function guiones(palabra) {
    for (var index = 0; index < palabra.length; index++) {
        pincel.beginPath();
        pincel.moveTo((500+50*index),380);
        pincel.lineTo((525+50*index),380);
        pincel.stroke();
    }
}


function verificarDatos(texto) {
    var myRegex = /[^A-ZÑ\s]/g;
    var result = myRegex.test(texto);

    if (result) {
        alert("No se permiten vocales con tilde ni caracteres especiales");
        return false;
    }
    else {
        return true;
    }
};



var nuevaPalabra = document.querySelector("#nueva-palabra");

function agregarPalabra() {
    var capturarPalabra = document.querySelector("#input-nueva-palabra");
    var palabraCapturada = capturarPalabra.value.toUpperCase(); 

    if (capturarPalabra.value != "") {    
        if (verificarDatos(palabraCapturada)) {
            if (!palabras.includes(palabraCapturada)) {
                palabras.push(palabraCapturada);
            }
            else {
                alert("Esta palabra ya está ingresada");    
            }
        }

        capturarPalabra.value = "";
    }

    else {
        alert("Recuerda ingresar una nueva palabra en el recuadro");
    }
}

nuevaPalabra.onclick = agregarPalabra;



var numNoAgrup;
var agrupados;
var numAgrup;

var jugar = document.querySelector("#iniciar-juego");

jugar.addEventListener("click",function(){

    numNoAgrup = 0;
    agrupados = [];
    numAgrup = 0;

    pincel.clearRect(0,0,pantalla.width,pantalla.height);
    dibujarBase();
    var palabraAhorcado = sortear();
    guiones(palabraAhorcado);

    document.addEventListener('keydown',function(event){
        const keyName = event.key;
        var patron = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
        letra = keyName.toUpperCase();
        var palabraAhorcadoString = palabraAhorcado.split("");
           
        if (patron.includes(letra)) {

            if (!agrupados.includes(letra)) {

                
                for (var index = 0; index < palabraAhorcadoString.length; index++) {
                    if (letra == palabraAhorcadoString[index]) {
                        pincel.fillStyle = "#2F75B5";
                        pincel.fillText(letra,(505+50*index),375);
                        numAgrup = numAgrup + 1;
                    }
                }
                
                if (numAgrup == palabraAhorcadoString.length) {
                    pincel.fillStyle = "white";
                    pincel.fillText("Ganaste, felicidades!",650,200);
                    pincel.clearRect(0,0,450,pantalla.height);
                    pincel.strokeStyle = "white";
                    pincel.fillText("Para REINICIAR EL JUEGO da click abajo",550,250);
                    pincel.fillText("en el botón respectivo",650,280);
                    reiniciar.classList.remove("invisible");
                }
                
                
                if (!palabraAhorcado.includes(letra)) {
                    if (numNoAgrup == 0) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar0();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 1) {
                        pincel.fillStyle ="red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar1();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 2) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar2();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 3) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar3();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 4) {
                        pincel.fillStyle ="red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar4();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 5) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar5();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 6) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar6();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 7) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar7();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 8) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(550+50*numNoAgrup),50);
                        dibujar8();
                        pincel.fillStyle = "white";
                        pincel.fillText("Fin del juego!",690,200);
                        pincel.strokeStyle = "white";
                        pincel.fillText("Para REINICIAR EL JUEGO da click abajo",550,250);
                        pincel.fillText("en el botón respectivo",650,280);
                        reiniciar.classList.remove("invisible");
                    }
                }

                agrupados.push(letra); 
            }
            
            else {
                alert("NO repetir letras ya seleccionadas");
            }
        }

        else {
            alert("usar letras");
        }        

    });

});



var reiniciar = document.querySelector("#reiniciar-juego");

reiniciar.addEventListener("click",function(){
    location.reload();
});