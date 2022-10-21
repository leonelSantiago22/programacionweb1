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
var dimensionImagen = 49;
//declaramos el aray bidimensional 
let Matriz =[[90,90,91,92,93,90,90,90,90,90,90,90,90,90,90,90],
             [90,90,104,105,106,90,90,90,90,90,117,118,119,90,41,42],
             [90,90,90,90,90,90,90,90,90,90,130,131,132,90,90,55],
             [90,90,90,90,90,90,90,90,90,90,90,51,90,90,90,23],
             [90,90,90,26,27,90,90,90,90,90,90,90,90,56,57,58],
             [90,90,90,39,40,90,90,02,03,04,90,90,90,69,70,71],
             [23,23,23,23,23,90,90,23,23,23,23,23,23,23,23,23],
             [54,54,54,54,54,36,37,54,54,54,54,54,54,54,54,54],
             [30,30,30,30,30,77,77,30,30,30,30,30,30,30,30,30]];

img.src="mario3.png";

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
                posicionXimagen = (Matriz[j][i]%13)*17;
                posicionYimagen = (Math.floor(Matriz[j][i]/13)*17);
                //console.log(posicionXimagen,posicionYimagen);
                ctx.drawImage(img,posicionXimagen+1,posicionYimagen+1,14,14, i*64, j*64,64, 64);
            }
        }
    }
}