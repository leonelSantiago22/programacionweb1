var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
//variables para conocer el posicionamiento de la bola 
var posiciondelabolaenx = canvas.width/2;
var posiciondelabolaeny = canvas.height-60;
var dx =1; 
var dy=-1;
var x = canvas.width/2;
var y=canvas.height-60;
var radiodelapelota = 10;

//variables para el uso de la barra y su movimiento 
var desplazamientoxdelabarra =(canvas.width)-159;
var desplazamientoydelabarra = 550;
var alturadelabarra = 10; 
var anchodelabarra = 70 ;

var teclaprecionada = 0;
var img = new Image();
//estas variables me permiten dibujar los ladrillos ya que son arreglos
var ladrillos = [];
var ladrillosColumnas = 4;
var ladrillosFilas = 7;
var coloresdelosladrillos = ["#78281f","#b03a2e", "#e74c3c", "#ec7063", "#f5b7b1"];
//variables de uso para el ladrillo 
var anchuradelladrillo = 75;
var alturadelLadrillo = 20; 
var paddingdelladrillo = 10; 
var separacionArrLadrillo = 30;
var separacionIzquierdaLadrillo = 30;
//variables para el marcador 
var marcador = 0;


document.addEventListener('keydown',manejadordetecladobajo, false);

function dibujarBola() 
{
    ctx.beginPath();
    //uso de arc 
    //arc (x,y,angulo inicial, angulofinal);
    ctx.arc(posiciondelabolaenx,posiciondelabolaeny,radiodelapelota, 0, Math.PI*2);
    ctx.fillStyle= "#34495E";
    ctx.fill();
    ctx.closePath();
}

function dibujarBarra()
{
    //ctx.clearRect(0,550,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(desplazamientoxdelabarra,canvas.height-alturadelabarra,anchodelabarra, alturadelabarra);
    ctx.fillStyle="#8E44AD";
    ctx.fill();
    ctx.closePath();
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
            estado:5
        }
    }   
}

function dibujarlosLadrillos()
{
    for (c = 0; c<ladrillosColumnas; c++)
    {
        for (r = 0; r<ladrillosFilas; r++)
        {
            if(ladrillos[c][r].estado>0)
            {
                var xladrillo = (c*(anchuradelladrillo+paddingdelladrillo))+separacionIzquierdaLadrillo;
                var yladrillo = (r*(alturadelLadrillo+paddingdelladrillo))+separacionArrLadrillo;
                ladrillos[c][r].x = xladrillo;
                ladrillos[c][r].y = yladrillo;
                ctx.beginPath();
                    ctx.rect(xladrillo,yladrillo,anchuradelladrillo, alturadelLadrillo);
                    ctx.fillStyle = coloresdelosladrillos[ladrillos[c][r].estado-1];
                    ctx.fill();    
                    ctx.closePath();
            }
        }
    }
}

function draw()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    dibujarBarra();
    dibujarBola();
    dibujarlosLadrillos();
    detectarlaColision();

    posiciondelabolaenx+=dx;
    posiciondelabolaeny+=dy;

   if(posiciondelabolaenx+dx > canvas.width-radiodelapelota || posiciondelabolaenx+dx<radiodelapelota)
   {
    dx=-dx;
   }
   if(posiciondelabolaeny+dy<radiodelapelota)
   {
    dy=-dy;
   }
   else if (posiciondelabolaeny+dy>canvas.height-radiodelapelota){
        alert("Fin del juego");
   }
   if(posiciondelabolaenx>desplazamientoxdelabarra && x<desplazamientoxdelabarra+anchodelabarra){
    dy=-dy;
   }
    //detecion del desplazamiento de la barra
    if(teclaprecionada == 39 && desplazamientoxdelabarra<canvas.width-40)
    {
        desplazamientoxdelabarra = desplazamientoxdelabarra + 5;
    }
    if(teclaprecionada == 37 && desplazamientoxdelabarra>0)
    {
        desplazamientoxdelabarra = desplazamientoxdelabarra - 5;
    }
}

function detectarlaColision()
{
    for(let c=0; c<ladrillosColumnas; c++){
        for (let r=0; r<ladrillosFilas; r++) {
            var aux = ladrillos[c][r];
            if(aux.estado>0)
            {
                if(posiciondelabolaenx>aux.x && posiciondelabolaenx<aux.x+anchuradelladrillo && posiciondelabolaeny>aux.y && posiciondelabolaeny<aux.y + alturadelLadrillo)
                {
                    dy = -dy; 
                    aux.estado-=1; 
                    marcador++;
                }
            }
            
        }
    }
}
//dibujarBarra();
//dibujarBola();
//dibujarlosLadrillos();

setInterval(draw,10);