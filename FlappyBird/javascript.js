var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var imagen = new Image();
var anchodeljuego = canvas.width;
var largodeljuego = canvas.height;
//variables que me permiten conocer la posicion de la ave 
var posicionXdelave = canvas.width/2;
var posicionYdelave = canvas.height/2;

var largodelave = 50;
var anchodelave = 35
var largopixelesdelave =20;
var anchopixelesdelave =15;
//variable que  ayudaran a saber las posiciones de las distintas aves 
var Skinaves= [ [113,327], [113,354], [85,489], //aves azules [0][0,1,2]
                [113,406], [113,431], [113,379],   //aves rojas 
                [31,490],  [57,490], [2,490]       //aves amarillas
                ];
//variables para los dos dintintos escenarios
var largodelescenario = canvas.width; 
var anchodelesenario = canvas.height-100;
var escenarios = [[0,0], [146,0]];
//llamado a la imagen donde estan los materiales a usar 

//primero haremos que aparezca el background 

imagen.src ="imagenes/flappybirdimage.png";

imagen.onload = function()
{
    dibujarBackGround();
    dibujarAve();
    dibujarObstaculos();
}
//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
function dibujarBackGround()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(imagen,escenarios[0][0],escenarios[0][1],144,256,0,0,largodelescenario,anchodelesenario);

    //esta parte es para dibujar la parte inferior 
    ctx.drawImage(imagen,291,0,170,57,0,anchodelesenario,largodelescenario,100);
}

function dibujarAve()
{
    ctx.drawImage(imagen,Skinaves[7][0],Skinaves[7][1], largopixelesdelave,anchopixelesdelave, canvas.width/2-(largodelave/2), canvas.height/2, largodelave, anchodelave)
}

function dibujarObstaculos()
{
    ctx.drawImage(imagen, 56,322,27,161,canvas.width/2-(26/2), -100,50,340);
    ctx.drawImage(imagen, 83,322,27,161,canvas.width/2-(26/2), canvas.height-250,50,340);
}