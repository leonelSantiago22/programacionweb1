var canvas  = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var imagen = new Image();
var anchodeljuego = canvas.width;
var largodeljuego = canvas.clientHeight;

//llamado a la imagen donde estan los materiales a usar 

//primero haremos que aparezca el background 

imagen.src("imagenes/flappybirdimage.png");