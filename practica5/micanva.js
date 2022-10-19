var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-50;
var sx=1;
var sy=1;
var indice = 0 ;
var img = new Image();

img.src="coins.jpg";

img.onload = function()
{
   setInterval(dibujar,80);
}

function dibujar()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img,indice*30,180,105,115,x,y,100,100);
    indice++;
    x= x+sx;

    y=y+sy;
    indice = (indice+1)%9;
    if(x>canvas.width-50 || x<0)
    {
        sx=-sx;
    }
    if(y>canvas.height-50 || y <0)
    {
        sy=-sy
    }
}