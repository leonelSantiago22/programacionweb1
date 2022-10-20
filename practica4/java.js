var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
//ctx es el pinceñ
var x = canvas.width/2;
var y = canvas.height/2;

dibujodePlanoenejeX();
dibujodePlanoenejeY();

function dibujodePlanoenejeX()
{
    ctx.beginPath();
    ctx.moveTo(x,0); //donde empiza la linea 
    ctx.lineTo(x,canvas.height);//donde termina
    ctx.stroke();

    
}

function dibujodePlanoenejeY()
{
    ctx.beginPath();
    ctx.moveTo(0,y); //donde empiza la linea 
    ctx.lineTo(canvas.width,y);//donde termina
    ctx.stroke();
}
//ctx.drawImage(img,50,50,45,45,x,100,50,50);