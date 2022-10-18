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
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