
//Base
function dibujarBase() {
    pincel.beginPath();
    pincel.moveTo(10,390);
    pincel.lineTo(110,390);
    pincel.lineTo(60,370);
    pincel.closePath();
    pincel.stroke();
}

//Parante
function dibujar0() {
    pincel.beginPath();
    pincel.moveTo(60,370);
    pincel.lineTo(60,10);
    pincel.stroke();    
}

//Volado
function dibujar1() {
    pincel.beginPath();
    pincel.moveTo(60,10);
    pincel.lineTo(310,10);
    pincel.stroke();
}
//Perfil
function dibujar2() {
    pincel.beginPath();
    pincel.moveTo(310,10);
    pincel.lineTo(310,50);
    pincel.stroke();
}

//Cabeza
function dibujar3() {
    pincel.beginPath();
    pincel.arc(310,90,40,0,2*3.1416);
    pincel.stroke();
}

//Tronco
function dibujar4() {
    pincel.beginPath();
    pincel.moveTo(310,130);
    pincel.lineTo(310,260);
    pincel.stroke();
}


//Pierna izquierda
function dibujar5() {
    pincel.beginPath();
    pincel.moveTo(310,260);
    pincel.lineTo(240,340);
    pincel.stroke();
}

//Pierna derecha
function dibujar6() {
    pincel.beginPath();
    pincel.moveTo(310,260);
    pincel.lineTo(380,340);
    pincel.stroke();
}

//Brazo izquierdo
function dibujar7() {
    pincel.beginPath();
    pincel.moveTo(310,195);
    pincel.lineTo(240,125);
    pincel.stroke();
}

//Brazo derecho
function dibujar8() {
    pincel.beginPath();
    pincel.moveTo(310,195);
    pincel.lineTo(380,125);
    pincel.stroke();
}

