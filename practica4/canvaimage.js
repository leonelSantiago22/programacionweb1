
var canvas=document.getElementById("miCanvas");
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = "mario2.png";

img.onload = function()
{
    ctx.drawImage(img,0,275,47,47,0,50,50,50);
    ctx.drawImage(img,47,275,47,47,50,50,50,50);
    ctx.drawImage(img,141,275,47,48,100,50,50,50);
    ctx.drawImage(img,0,138,47,48,100,200,50,50);
    ctx.drawImage(img,416,91,47,48,100,100,50,50);
    ctx.drawImage(img,0,91,47,48,100,150,50,50);
    ctx.drawImage(img,47,91,47,48,150,150,50,50);
    ctx.drawImage(img,0,138,47,48,100,200,50,50);
    ctx.drawImage(img,47,138,47,48,150,200,50,50);
    ctx.drawImage(img,94,138,47,48,150,100,50,50);
    ctx.drawImage(img,230,462,47,48,200,100,50,50);
    //barril rojo
    ctx.drawImage(img,462,230,47,48,0,150,50,50);
    ctx.drawImage(img,509,230,47,48,50,150,50,50);
    ctx.drawImage(img,462,277,47,48,0,200,50,50);
    ctx.drawImage(img,508,277,47,48,50,200,50,50);

    ctx.drawImage(img,276,415,47,48,200,150,50,50);
    ctx.drawImage(img,323,415,47,48,250,200,50,50);
    ctx.drawImage(img,323,416,47,48,250,150,50,50);
    ctx.drawImage(img,276,462,47,48,200,200,50,50);
}
    
    
    

//dibujar la imagen
//drawImage(img,dx,dy);
//drawImage(img,dx,dy,dwidth,dheight);
//drawImage(imagen,sx,s4,swidth,sheigth,dx,dy,diwith,dheigth); //con esto cargamos una porcion de la imagen