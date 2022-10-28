var canvas=document.getElementById("miCanvas");
var ctx=canvas.getContext("2d");
var imagen=new Image();
var anchodeljuego=canvas.width;
var largodeljuego=canvas.height;
//variables que me permiten conocer la posicion de la ave 
var posicionXdelave=canvas.width/2;
var posicionYdelave=canvas.height/2;
var gravedad=8;
var largodelave=50;
var anchodelave=35;
var largopixelesdelave=20;
var anchopixelesdelave=15;
//variable que  ayudaran a saber las posiciones de las distintas aves 
var Skinaves= [ [113,327], [113,354], [85,489], //aves azules [0][0,1,2]
                [113,406], [113,431], [113,379],   //aves rojas 
                [31,490],  [57,490], [2,490]       //aves amarillas
                ];
var avepos = 3;
//variables para los dos dintintos escenarios
var largodelescenario = canvas.width; 
var anchodelesenario = canvas.height-100;
var escenarios = [[0,0], [146,0]];
//llamado a la imagen donde estan los materiales a usar 
var posicionXdelobstaculo = canvas.width;
var pos1= posicionXdelobstaculo-100;
var pos2= posicionXdelobstaculo - (100 * 2);
var pos3 = posicionXdelobstaculo-(100*3); 
var pos4 = posicionXdelobstaculo-(100*4);
var separacionEntreObstaculos = 100;
var separacion = 120;
var iniciodereaparicion = -100;
//primero haremos que aparezca el background 

//ajustes del teclado 
teclaprecionada = 0;
imagen.src ="imagenes/flappybirdimage.png";


function draw()
{
    dibujarBackGround();
    dibujarAve();
    dibujarObstaculos();
    if(posicionYdelave<=largodelescenario+60){
    if(pos1<0)
    {
        pos1=canvas.width;
    }
    if(pos2<0)
    {
        pos2 = canvas.width;
    }
    if(pos3<0)
    {
        pos3 = canvas.width;
    }
    if(pos4<0)
    {
        pos4 = canvas.width;
    }
    if(posicionXdelobstaculo<0)
    {
        posicionXdelobstaculo = canvas.width;
    }
    if(posicionXdelobstaculo>-1 || pos1>-1)
    {
        posicionXdelobstaculo= posicionXdelobstaculo-5;
        pos1-=5;
        pos2-=5;
        pos3-=5;
        pos4-=5;
    }

        
    posicionYdelave = posicionYdelave + gravedad;
     /*   
    document.addEventListener('keyup', (e) => {
        console.log(e)
        if (e.key == 'ArrowUp' || e.key ==38) {
          posicionYdelave -=(3);
            console.log(posicionXdelave);
        }
      },false);
*/

        
    }
}

document.addEventListener('keyup', detectarSalto,false);

function detectarSalto(e)
{

    
    if(e.keyCode==38)
        {
                  posicionYdelave -=(50);
        }

    
}
//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
function dibujarBackGround()
{
    //ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(imagen,escenarios[0][0],escenarios[0][1],144,256,0,0,largodelescenario,anchodelesenario);

    //esta parte es para dibujar la parte inferior 
    ctx.drawImage(imagen,291,0,170,57,0,anchodelesenario,largodelescenario,100);
}

function dibujarAve()
{
    //ctx.clearRect(posicionXdelave, posicionYdelave, largodelave, anchodelave);
   
    ctx.drawImage(imagen,Skinaves[avepos][0],Skinaves[avepos][1], largopixelesdelave,anchopixelesdelave, posicionXdelave, posicionYdelave, largodelave, anchodelave)
    posicionYdelave = posicionYdelave;
}

function dibujarObstaculos()
{
    //ctx.clearRect(posicionXdelobstaculo,0,45, 240);
    ctx.drawImage(imagen, 56,322,27,161,pos1, -100,50,290);
    ctx.drawImage(imagen, 83,322,27,161,pos1, largodelescenario-100,50,200);

    ctx.drawImage(imagen, 56,322,27,161,pos2, -100,50,340);
    ctx.drawImage(imagen, 83,322,27,161,pos2, largodelescenario-100,50,200);

    ctx.drawImage(imagen, 56,322,27,161,pos3, -100,50,340);
    ctx.drawImage(imagen, 83,322,27,161,pos3, largodelescenario-100,50,200);
    
    //ctx.drawImage(imagen, 56,322,27,161,pos4, -100,50,340);
    //ctx.drawImage(imagen, 83,322,27,161,pos4, largodelescenario-100,50,200);

    ctx.drawImage(imagen, 56,322,27,161,posicionXdelobstaculo, -100,50,340);
    ctx.drawImage(imagen, 83,322,27,161,posicionXdelobstaculo, largodelescenario-100,50,200);
}

//nos permite permutar entre imagenes de la ave para parecer que vuela
function aumentarAve()
{
    //ctx.clearRect(posicionXdelobstaculo,0,45, 240);
    avepos++;
    if(avepos>=3)
    {
        avepos = 0;
    }
}

setInterval(draw,55);
setInterval(aumentarAve,5);