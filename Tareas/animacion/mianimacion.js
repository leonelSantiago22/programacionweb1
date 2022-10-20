var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-50;
var sx=1;
var sy=1;
var indice = 0 ;
var img = new Image();

img.src="scenario.png";
//imgLuigi.src="luiguisprite.png";

img.onload = function()
{
    //ctx.drawImage(img,1,47,41,41,100,50,50,50);
    setInterval(dibujarLuigi,20);
}
function dibujarLuigi()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //ctx.drawImage(img,indice*50,47,41,41,x,100,50,50);
    ctx.drawImage(img,50,51,45,45,x,100,75,75);
    ctx.drawImage(img,136,58,45,45,x-70,110,75,75);
    ctx.drawImage(img,206,52,75,85,x+70,160,95,105);
    //ctx.drawImage(imgLuigi,1,47,105,115,x,y,50,100);
    indice++;
    x= x+sx;

    y=y+sy;
    indice = (indice+1)%10;
    if(x>canvas.width+50 || x<0)
    {
        //sx=-sx;
        x=0
    }
    
}