var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
//variables para conocer el posicionamiento
var posiciondelabolaenx = 200;
var posiciondelabolaeny = 540;
var desplazamientoxdelabarra =180;
var desplazamientoydelabarra = 550;

var teclaprecionada = 0;
var img = new Image();
//estas variables me permiten dibujar los ladrillos ya que son arreglos
var ladrillos = [];
var ladrillosColumnas = 4;
var ladrillosFilas = 7;
//variables de uso para el ladrillo 
var anchuradelladrillo = 75;
var alturadelLadrillo = 20; 
var paddingdelladrillo = 10; 
var separacionArrLadrillo = 30;
var separacionIzquierdaLadrillo = 30;


document.addEventListener('keydown',manejadordetecladobajo, false);

function dibujarBola() 
{
    ctx.beginPath();
    //uso de arc 
    //arc (x,y,angulo inicial, angulofinal);
    ctx.arc(200,540,10, 0, Math.PI*2);
    ctx.fillStyle= "#34495E";
    ctx.fill();
    ctx.closePath();
}

function dibujarBarra()
{
    ctx.clearRect(0,550,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(desplazamientoxdelabarra,desplazamientoydelabarra,40,20);
    ctx.fillStyle="#8E44AD";
    ctx.fill();
    ctx.closePath();
    if(teclaprecionada == 39 && desplazamientoxdelabarra<canvas.width-40)
    {
        desplazamientoxdelabarra = desplazamientoxdelabarra + 5;
    }
    if(teclaprecionada == 37 && desplazamientoxdelabarra>0)
    {
        desplazamientoxdelabarra = desplazamientoxdelabarra - 5;
    }
}



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

//funcion que nos permite rellenar los ladrillos 
for(c = 0; c<ladrillosColumnas; c++)
{
    ladrillos[c] = [];
    for(r=0;  r<ladrillosFilas; r++)
    {
        ladrillos[c][r] = {
            x:0,
            y:0, 
            estado:1
        }
    }   
}

function dibujarlosLadrillos()
{
    for (c = 0; c<ladrillosColumnas; c++)
    {
        for (r = 0; r<ladrillosFilas; r++)
        {
            if(ladrillos[c][r].estado==1)
            {
                var xladrillo = (c*(anchuradelladrillo+paddingdelladrillo))+separacionIzquierdaLadrillo;
                var yladrillo = (r*(alturadelLadrillo+paddingdelladrillo))+separacionArrLadrillo;
                ladrillos[c][r].x = xladrillo;
                ladrillos[c][r].y = yladrillo;
                ctx.beginPath();
                ctx.rect(xladrillo,yladrillo,anchuradelladrillo, alturadelLadrillo);
                ctx.fillStyle = "#BB6755";
                ctx.fill();    
                ctx.closePath();
            }
        }
    }
}

dibujarBarra();
dibujarBola();
dibujarlosLadrillos();

setInterval(dibujarBarra,50);