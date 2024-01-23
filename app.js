

let numeroAleatorio = 0; 
let numeroDeUsuario ;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 6;

 


// esta funcion sirve para reutlizarla, y hace que puedas cambiar el texto en html de cualquier caja
// al asignarle los parametros elemento y texto
// no hay texto fijo, si no que la funcion recibe lo recibe cuando sea llamada
function asignarTextoElemento(elemento,texto){
    // elemento hace referencia a h1 o p o h2 etc y el texto, hace referencia al texto que se le va pasar a ese elemento
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}
// esta funcion hace que el boton intentar escoja un numero aleatorio al dar intentar
// recursividad
// importante indicarle el final de la recursividad
function generarNumeroAleatorio(){

     let numeroGeneradoPc = Math.floor(Math.random()*numeroMaximo)+1;
     // pregunta si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sorteron los numeros posibles')
      // sino seguimos jugando
      } else {
      //si el numero generado automaticamente esta en la lista la funcion se llama a si misma
      // hace que se detenga el juego
      if (listaNumerosSorteados.includes(numeroGeneradoPc)){
      return generarNumeroAleatorio();
      // si no esta en la lista, lo guarda en la lista y retorna el numero generado
      }else listaNumerosSorteados.push(numeroGeneradoPc);
      return numeroGeneradoPc;
    } 
}
// esta funcion captura el numero que el usuario pone en el input
//para saber si acertó y cambia el mensaje

function verificarIntento(){
    numeroDeUsuario = parseInt(document.getElementById('numero_usuario').value);
    
    if (numeroDeUsuario === numeroAleatorio){
        //para saber si acertó y cambia el mensaje
        // Cuantas veces intentó el usuario (numero de intentos)
        // operador ternario para vez y veces
        // usamos template strings = ${variable}
        asignarTextoElemento('p', `Acertaste en ${numeroIntentos} ${numeroIntentos == 1 ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
    //diversas ayudas
      
      if(numeroDeUsuario > numeroAleatorio){
        asignarTextoElemento('p', 'El numero es menor')
      }else {
        asignarTextoElemento('p','el numero es mayor')
      
      }
      console.log(numeroIntentos)

      //if (numeroIntentos >= intentosMaximos){
       //asignarTextoElemento ('p',`perdite, llegaste a ${numeroIntentos} intentos`)
     //}
      numeroIntentos ++;
       limpiarInput();
       
   }    
}


// funcion para limpiar el input
function limpiarInput(){
    document.getElementById('numero_usuario').value = "";
}

function mensajesIniciales(){
  // esta función hace que el juego vuelva a iniciarse luego de aplicar la funcion reiniciar juego
  //restuara los valores de escriba el nuemro para avidinar
  // e inicializa el numero de intentos
    asignarTextoElemento('h1', 'Adivina el numero secreto!!');
    asignarTextoElemento( 'p',`Escribe  aqui un numero del 1 al ${numeroMaximo}`);
    
    //generar numero aleatorio

    numeroAleatorio = generarNumeroAleatorio();
    //inicializar el numero de intentos
     numeroIntentos = 1;
}

// esta funcion hace que el boton reinciar juego pueda funcionar
// esta funcion inicializa el juego
//limpia el input
// agrega los mensajes para inicar nuevamente
// finalmente desabilita el boton de reiniciar
function reiniciarJuego(){
    //limpiar input
    limpiarInput();
    //Indicar mensajes de intervalos de numeros
   mensajesIniciales();
   document.getElementById('reiniciar').setAttribute('disabled','true');
  
 
   
 //desabilitar el boton
    
}
//Indicar mensajes de intervalos de numeros
mensajesIniciales();

