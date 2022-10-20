var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
var sx=1;
var sy=1;
var indice = 0 ;
var img = new Image();
var dimensionEscenario = 32;
var dimensionCanvas = 64;
var FilasCavas = 16;
var ColumnasCanvas = 9;
var posicionXimagen = 0;
var posicionYimagen = 0;
var i =0;
var j =0;
//declaramos el aray bidimensional 
let Matriz =[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,1,2,3,54,43,43,43,43,43,-1,-1,-1,-1,-1],
             [-1,-1,54, 68, 43, 43,45,57,69,87,87,43,-1,-1,-1,-1],
             [-1,-1,53,14,12, 9, 7, 6, 4, 0,17,18,-1,-1,-1,-1],
             [-1,-1,53,12,13,14,15,16,17,18,-1,-1,-1,-1,-1,-1],
             [-1,-1,84,54,43,18,18,18,18,18,18,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

img.src="luiguisprite.png";

img.onload = function()
{
    dibujarEscenario();
}

function dibujarEscenario()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(j=0; j<9; j++)
    {
        for(i=0; i<16; i++)
        {
            //console.log(i,j, Matriz[j][i]);
            if(Matriz[j][i]!=-1)
            {
                posicionXimagen = (Matriz[j][i]%9)*48;
                posicionYimagen = (Math.floor(Matriz[j][i]));
                //console.log(posicionXimagen,posicionYimagen);
                ctx.drawImage(img,posicionXimagen,posicionYimagen,32,32, i*64, j*64,64, 64);
            }
        }
    }
}