var canvas=document.getElementById("miCanvas");
var ctx=canvas.getContext("2d");
var imagen=new Image();
var anchodeljuego=canvas.width;
var largodeljuego=canvas.height;
//variables que me permiten conocer la posicion de la ave
var posicionXdelave=canvas.width/2;
var posicionYdelave=canvas.height/2;
//gravedad de caida del ave
var gravedad=8;
//dimensiones del ave para dibujar en el juego
var largodelave=50;
var anchodelave=35;
var largopixelesdelave=20;
var anchopixelesdelave=15;
//variable que  ayudaran a saber las posiciones de las distintas aves
var Skinaves= [ [113,327], [113,354], [85,489], //aves azules [0][0,1,2]
                [113,406], [113,431], [113,379],   //aves rojas
                [29,490],  [58,490], [2,490]       //aves amarillas
                ];
//iniciamos con el ave roja
var avepos = 3;
//variables para los dos dintintos escenarios
var largodelescenario = canvas.width;
var anchodelesenario = canvas.height-100;
var escenarios = [[0,0], [146,0]];
var escenario = 0;
//var pipesarriba = [[56,322];
//var pipesabajo =  [[83,322]];
//llamado a la imagen donde estan los materiales a usar
var posicionXdelobstaculo = canvas.width;
var pos1= posicionXdelobstaculo-100;
var pos2= posicionXdelobstaculo - (150 * 2);
var pos3 = posicionXdelobstaculo-(150*3);
var pos4 = posicionXdelobstaculo-(150*4);
var separacionEntreObstaculos = 150;
var separacion = 120;
var iniciodereaparicion = -100;
//primero haremos que aparezca el background

//variable que me permite hacer pausas
var pausa = true;
//comienzo del juego
var  estadodelJuego = false;
//ajustes del teclado
var teclaprecionada = 0;
//llamada a la imagen
imagen.src ="imagenes/flappybirdimage.png";
//marcador que nos permite llevar el conteo
var marcador=0;
//inicio del juego

//var imagenMario = new Image();
//imagenMario.src = "imagenes/mario.png";

//var estadoMario = false;

//Funcion donde se une todo para llamar el juego
function draw()
{
    dibujarBackGround();  //Me permite dibujar el backgroud
    dibujarObstaculos();  //Me permite dibujar los pipes
    dibujarMarcador();    //Me permite dibujar el marcador
    dibujarAve();         //Me permite dibujar el ave
    //que es la ave este dentro de los juegos
    dibujarPausa();      //Me permite dibujar el botton de pausa que esta arriba a la iquieda
    if(pausa !=false)    //si no hay pausa
    {
    if(posicionYdelave<=largodelescenario+60 && posicionYdelave>=0) //saber si el ave esta dentro del area de juego
    {
      aumentarmarcador();       //Aumentar marcador al pasar por un tubo
      animacionDevolar();       //Permite parecer como si el ave volara
      detectarColision();     //Detectar las coliciones
      recorrido_de_los_pipes(); //Mover los tubos de izquierda a derecha
      posicionYdelave = posicionYdelave + gravedad; //me permite  que el ave se mantenga bajando para asi poder detectar las caidas
  }else {
    document.removeEventListener('keyup', detectarSalto,false);   //Cuando pierde desabilitamos las teclas
    pantalladederrota();       //mandamos a llamar la pantalla de derrota
    setTimeout(recargarpagina,2000);  //
  }
  }
}

function recorrido_de_los_pipes()
{
  if(pos1<0)    //si el tubo llega al final de la pantalla lo retornamos al final de la misma
  {
      pos1=canvas.width;                                      //lo regresamos al inicio
      alturadeltubo1partedeabajo = getRandomInt(min,max);     //Para generar la altura aleatoria del tubo de la parte de abajo
      alturadeltubo1partedearriba = getRandomInt(min,max2);   //Gereamos la altura del tubo 1 de la parte de arriba
  }
  if(pos2<0)                                                  //si el tuvo 2 esta dentro de la panttalla
  {
      pos2 = canvas.width;                                    //lo regresamos al inicio
      alturadeltubo2partedeabajo = getRandomInt(min,max)      //generamos la altura aleatoria para el tuvo de abajo
      alturadeltubo2partedearriba = getRandomInt(min,max2);   //generamos la altura aleatoria para el tubo de arriba
  }
  if(posicionXdelobstaculo<0)                                //saber si el tubo princial ya llego al final
  {
      posicionXdelobstaculo = canvas.width;
  }

  if(posicionXdelobstaculo>-1 || pos1>-1)                 //recorrido de los tubos a lo largo de la imagen
  {
      posicionXdelobstaculo= posicionXdelobstaculo-5;
      pos1-=5;                                            //disminuimos las posiciones de los tubos
      pos2-=5;
  }
}

document.addEventListener('keyup', detectarSalto,false);  //funcion que nos permite activar el teclado

function detectarSalto(e)                               //escuchar las entrada del teclado
{
    //tecla enter es de codigo 13
    //console.log(e.keyCode);
    if(e.keyCode==38)              //conocer si preciono la flecha de hacia arrina
    {
            posicionYdelave -=(50);   //salto del ave
    }
    if(e.keyCode==13)             //saber si presiono la tecla enter para inciar el juego
    {
          estadodelJuego = !estadodelJuego; //negamos el estado del juego
    }
    if(e.keyCode==80)             //letra P para conocer si hace pausa
    {
        pausa = !pausa;         //negamos loa pausa
    }
}

function dibujarPausa()
{
  //333,141
  //346,141
  //346-333= 13
  //333,156
  //156-141 = 15
  if(pausa!=false)
  {
    ctx.drawImage(imagen,333,141,15,15,canvas.width-40, 10, 30,32);     //dibujamos el recuadro de play
  }else{
      ctx.drawImage(imagen,120,305,15,15,canvas.width-40, 10, 30,32); //dibujamos el recuadro de pausa
  }
}

//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
function dibujarBackGround()
{
    //ctx.clearRect(0,0,canvas.width, canvas.height);
    //dibujamos los distintos escenarios
    ctx.drawImage(imagen,escenarios[escenario][0],escenarios[escenario][1],144,256,0,0,largodelescenario,anchodelesenario);

    //esta parte es para dibujar la parte inferior
    //dibujamos la parte inferior
    ctx.drawImage(imagen,291,0,170,57,0,anchodelesenario,largodelescenario,100);
}



function dibujarAve()
{
    //ctx.clearRect(posicionXdelave, posicionYdelave, largodelave, anchodelave);
    //dibujamos el ave
    ctx.drawImage(imagen,Skinaves[avepos][0],Skinaves[avepos][1], largopixelesdelave,anchopixelesdelave, posicionXdelave, posicionYdelave, largodelave, anchodelave)
    posicionYdelave = posicionYdelave;
}
//me permite dibujar los dibujarObstaculos
let alturadeltubo2partedeabajo=150;
let alturadeltubo1partedeabajo=100
let alturadeltubo1partedearriba = 100;
let alturadeltubo2partedearriba = 150;
//variables para controlas las diversos largos de los tubos
function dibujarObstaculos()
{
    //llamamos a la funcion para tener numeros aleatorios
    //tubos derechos
    ctx.drawImage(imagen, 56,322,27,161,pos1, 0,50,alturadeltubo1partedearriba);    //dibujamos los primeros tubos este es el de la parte de arriba
    //dibujamos los tubos en la parte de abajo este es el primer tubo
    //largodelescenario-alturadeltubo1partedeabajo+100
    //el largo del escenario controla donde terminan las nubes le restamos la altura del tubo y le sumamos 100 para colocar
    //el tubo arras de piso
    ctx.drawImage(imagen, 83,322,27,161,pos1, largodelescenario-alturadeltubo1partedeabajo+100,50,alturadeltubo1partedeabajo);
    //tubos izquierdo
    ctx.drawImage(imagen, 56,322,27,161,pos2, 0,50,alturadeltubo2partedearriba);
    ctx.drawImage(imagen, 83,322,27,161,pos2, largodelescenario-alturadeltubo2partedeabajo+100,50,alturadeltubo2partedeabajo);

}
//generar numeros aleatorios entre 2 valores
// Notesé que también en este caso `min` será incluido y `max` excluido
let min = 100;
let max =230;
let max2=210;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


//nos permite permutar entre imagenes de la ave para parecer que vuela
var auxiliardevuelo = avepos+2
var restablecedor = avepos;
//funcion de animacion de volar
function animacionDevolar()
{
    //ctx.clearRect(posicionXdelobstaculo,0,45, 240);
    avepos++;           //aumentamos el ave para dar el efecto de vuelo
    if(avepos>=auxiliardevuelo)   //evita que pasemos a la siguiente ave
    {
        avepos = restablecedor;   //restablecemos a la posicion correcta del arreglo
    }
}

function animaciondeperder()
{
  while(posicionYdelave<= largodelescenario+60) //mandamos al ave al final de la pagina
  {
    posicionYdelave = posicionYdelave + (gravedad); //bajamos el ave drasticamente
  }
  setTimeout(recargarpagina,2000);      //reinicamos la pagina web
}

function recargarpagina()
{
    location.reload(true);
}

//restablecemos los valores a los iniciales
function recargarpagina2()
{
  document.addEventListener('keyup', detectarSalto,false);
   marcador=0;
   anchodeljuego=canvas.width;
   largodeljuego=canvas.height;
  //variables que me permiten conocer la posicion de la ave
   posicionXdelave=canvas.width/2;
   posicionYdelave=canvas.height/2;

   gravedad=8;


   largodelave=50;
   anchodelave=35;
   largopixelesdelave=20;
   anchopixelesdelave=15;
  //variable que  ayudaran a saber las posiciones de las distintas aves

   avepos = 0;
  //variables para los dos dintintos escenarios
   largodelescenario = canvas.width;
   anchodelesenario = canvas.height-100;
   escenarios = [[0,0], [146,0]];
  //var pipesarriba = [[56,322];
  //var pipesabajo =  [[83,322]];
  //llamado a la imagen donde estan los materiales a usar
   posicionXdelobstaculo = canvas.width;
   pos1= posicionXdelobstaculo-100;
   pos2= posicionXdelobstaculo - (150 * 2);
   pos3 = posicionXdelobstaculo-(150*3);
   pos4 = posicionXdelobstaculo-(150*4);
   separacionEntreObstaculos = 150;
   separacion = 120;
   iniciodereaparicion = -100;
   //primero haremos que aparezca el background
   pausa = true;
   estadodelJuego = false;
  //ajustes del teclado
   teclaprecionada = 0;
  //location.reload(true);

}

function detectarColision()
{
    //pipes de arriba
    //saber si chocamos con los diferentes partes del tubo
    //el -25 es por el ancho del ave que es de 50
    //cada variable me permite comparar si estoy tocando el espacio del tubo
    if(pos2-25==posicionXdelave && posicionYdelave<=alturadeltubo2partedearriba || pos2+25==posicionXdelave && posicionYdelave<=alturadeltubo2partedearriba)
    {
      //console.log("Defeat");

      animaciondeperder();
    }

    //tubo de arriba
    if(pos1-25==posicionXdelave && posicionYdelave<=alturadeltubo1partedearriba || pos1+25==posicionXdelave && posicionYdelave<=alturadeltubo1partedearriba)
    {
      //console.log("Defeat");
      animaciondeperder();
    }
    //pipes de abajo
    if(pos2-25==posicionXdelave && posicionYdelave>=(canvas.height-100)-alturadeltubo2partedeabajo-50||pos2+25==posicionXdelave && posicionYdelave>=(canvas.height-100)-alturadeltubo2partedeabajo-50)
    {
      //console.log("Defeat");
      animaciondeperder();
    }
    if(pos1-25==posicionXdelave && posicionYdelave>=(canvas.height-100)-alturadeltubo1partedeabajo-50||pos1+25==posicionXdelave && posicionYdelave>=(canvas.height-100)-alturadeltubo1partedeabajo-50)
    {
      //console.log("Defeat");
      animaciondeperder();
    }
}
//dibujamos el marcados
function dibujarMarcador(){
    ctx.font="bold 48px serif";
    ctx.fillStyle="#FDFEFE";
    ctx.fillText(marcador,canvas.width/2,40);
    //centramos el marcados a una buena posicion
    //ctx.font="20px ComicSans";
    //ctx.fillStyle="#000000";
    //ctx.fillText("Vidas="+vida,520,20);
}

// pantalla de derrota
function pantalladederrota()
{
  ctx.font="bold 48px serif";
  ctx.fillStyle="#FDFEFE";
  ctx.fillText(marcador,canvas.width/2,canvas.height/2);
  //392,58
  ctx.drawImage(imagen,392,58,100,24,canvas.width/2-150,canvas.height/2,300,100);
}


function aumentarmarcador()
{
    if(pos1 == posicionXdelave)
    {
      marcador++;
    }
    if (pos2 == posicionXdelave) {
      marcador++;
    }
    if (marcador>=30)
    {
      escenario=1;
    }
    if(marcador==20 )
    {
      avepos = 0;
      auxiliardevuelo = avepos+2
      restablecedor = avepos;
    }
    if (marcador==60) {
        avepos = 6;
        auxiliardevuelo = avepos+2;
        restablecedor = avepos;
    }

    // /console.log(marcador);
}


function pantalladeInicio()
{
  dibujarBackGround();
  dibujarObstaculos();
  dibujarAve();
  //imagen de Flappy bird
  ctx.drawImage(imagen,348,89,93,27, canvas.width/2-150, canvas.height/2-250, 300,100);
  //imagen de get Ready
  ctx.drawImage(imagen,293,57,96,25, canvas.width/2-125, canvas.height/2-120, 250,80);

  //imagen de Play
  ctx.drawImage(imagen,291,109,58,31, canvas.width/2-50, canvas.height/2+10, 100,50);

  //imagen de Tap
  ctx.drawImage(imagen,351,116,57,32, canvas.width/2-50, canvas.height/2+80, 100,50);
}

//nos permite conocer si el juego esta en inicio o no
//ademas de llamar a la funcion principal
function mainprincipal()
{
  pantalladeInicio();
  //document.removeEventListener('keyup', detectarSalto,false);
  if(estadodelJuego != false)   //conocer si estamos iniciando el juego
  {
    draw();
  }
}

var velocidad = 45;
setInterval(mainprincipal,velocidad);
