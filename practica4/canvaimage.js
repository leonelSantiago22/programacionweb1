var canvas=document.getElementById("miCanvas");
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = "descarga.png";

img.onload = function()
{
    ctx.drawImage(img,20,30,400,500);
}
    
    

//dibujar la imagen
//drawImage(img,dx,dy);
//drawImage(img,dx,dy,dwidth,dheight);
//drawImage(imagen,sx,s4,swidth,sheigth,dx,dy,diwith,dheigth); //con esto cargamos una porcion de la imagen