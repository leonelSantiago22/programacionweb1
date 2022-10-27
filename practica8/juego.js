var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = 380;
var pelotaRadio = 10;
var xBarra = canvas.width / 2 - 30;
var alturaBarra = 10;
var anchuraBarra = 70;
var ladrillos = [];
var ladrillosColumnas = 6;
var ladrillosFilas = 8;
var anchuraLadrillo = 75;
var alturaLadrillo = 20;
var paddingLadrillo = 10;
var separacionIzqLadrillo = 30;
var separacionArrLadrillo = 30;
var dy = -1;
var dx = 1;
var marcador = 0;
var tecla = 0;
var colores=["#000000","#FFFFFF","#FFFF00","#0000FF","#FF0000"];//POSICION 0 A 5 
var img1=new Image();
//img1.src="space1.png";
for(let c = 0; c < ladrillosColumnas; c++) {
    ladrillos[c] = [];
    for(let r = 0; r < ladrillosFilas; r++) {
        ladrillos[c][r] = {
            x : 0,
            y : 0,
            estado :5
        };
    }
}

function dibujaLadrillos() {
    for(let c = 0; c < ladrillosColumnas; c++) {
        for(let r = 0; r < ladrillosFilas; r++) {
            if(ladrillos[c][r].estado>0) {
                var xLadrillo = (c*(anchuraLadrillo+paddingLadrillo))+separacionIzqLadrillo;
                var yLadrillo = (r*(alturaLadrillo+paddingLadrillo))+separacionArrLadrillo;
                ladrillos[c][r].x = xLadrillo;
                ladrillos[c][r].y = yLadrillo;
                ctx.beginPath();
                ctx.rect(xLadrillo, yLadrillo, anchuraLadrillo, alturaLadrillo);
                ctx.fillStyle = colores[ladrillos[c][r].estado-1];//menos uno por los indices 
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function dibujarBola() {
    ctx.beginPath();
    ctx.arc(x, y, pelotaRadio, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function dibujaBarra() {
    ctx.beginPath();
    ctx.rect(xBarra, canvas.height-alturaBarra, anchuraBarra, alturaBarra);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
} 

img1.onload=function(){
    setInterval(draw,15);
}
//setInterval(draw,15);
document.addEventListener('keydown', manejadorTecladoAbajo, false);

function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.draw(img1,canvas.width,canvas.height);
    dibujaBarra();
    dibujaLadrillos();
    dibujarBola();
    dibujarMarcador();
    detectarColision();

    x += dx;
    y += dy;
    if(x+dx > canvas.width-pelotaRadio || x+dx < pelotaRadio) {
        dx = -dx;
    }
    if(y+dy < pelotaRadio) {
        dy = -dy;
    } else if(y+dy > canvas.height-pelotaRadio) {
        if(x > xBarra && x < xBarra+anchuraBarra){
            dy = -dy;
        }
        //alert("Fin del juego");
    }
    if(tecla == 39 && xBarra <= 525) {
        xBarra += 2;
    }
    if(tecla == 37 && xBarra >= 5) {
        xBarra -= 2;
    }
}

function detectarColision() {
    for(let c = 0; c < ladrillosColumnas; c++) {
        for(let r = 0; r < ladrillosFilas; r++) {
            var b = ladrillos[c][r];
            if(b.estado > 0) {
                if(x > b.x && x < b.x+anchuraLadrillo && y > b.y && y < b.y+alturaLadrillo) {
                    dy=-dy;
                    b.estado-=1;
                    marcador++;
                }
            }
        }
    }
}

function dibujarMarcador() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Marcador: " + marcador, canvas.width / 2 - 60, 20);
}

function manejadorTecladoAbajo(e){
    if(e.keyCode==39){
       // console.log("mover a la derecha ");
        tecla=39;    
    }
    if(e.keyCode==37){
        //console.log("mover a la izquierda ");
        tecla=37;
    }
}



// dibujarBola();
// dibujaBarra();
// dibujaLadrillos();