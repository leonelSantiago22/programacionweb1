var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
var sx=1;
var sy=1;
var indice = 0 ;
var img = new Image();
desplazamientox =250;
desplazamientoy = 350;
var teclaprecionada = 0;

var i=0;
dibujarBarra();
function dibujarBarra()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(desplazamientox,desplazamientoy,40,20);
    ctx.fillStyle="#0095DD";
    ctx.fill();
    ctx.closePath();
    if(teclaprecionada == 39 && desplazamientox<700)
    {
        desplazamientox = desplazamientox + 5;
    }
    if(teclaprecionada == 37 && desplazamientox>0)
    {
        desplazamientox = desplazamientox - 5;
    }
    if(teclaprecionada == 40)
    {
        desplazamientoy = desplazamientoy+5;
    }
    if(teclaprecionada == 38)
    {
        desplazamientoy = desplazamientoy-5;
    }
}

document.addEventListener('keydown',manejadordetecladobajo, false);
document.addEventListener('keyup', manejadordeltecladoalto, false);
setInterval(dibujarBarra,100);

function manejadordetecladobajo(e)
{
    console.log("tecla:", e.keyCode)
    if (e.keyCode == 39)
    {
        console.log("Mover hacia derecha");
        teclaprecionada = 39;
        //desplazamientoy = desplazamientoy + 5;
    }
    if(e.keyCode == 37 )
    {
        console.log("mover hacia la izquierda");
        teclaprecionada = 37;
        //desplazamientoy = desplazamientoy - 5;
       
    }
}

function manejadordeltecladoalto(e)
{
    if (e.keyCode == 40)
    {
        console.log("Mover hacia arriba", e.keyCode);
        teclaprecionada = 40; 
    }
    if(e.keycode == 38)
    {
        console.log("Mover hacia abajo", e.keyCode);
        teclaprecionada = 38;
    }
}