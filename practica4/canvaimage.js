var canvas=document.getElementById("miCanvas");
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = "mario.png";

img.onload = function()
{
    ctx.drawImage(img,40,35,25,20,50,50,50,50);
}
    
    

//dibujar la imagen
//drawImage(img,dx,dy);
//drawImage(img,dx,dy,dwidth,dheight);
//drawImage(imagen,sx,s4,swidth,sheigth,dx,dy,diwith,dheigth); //con esto cargamos una porcion de la imagen