//declarar variables y conjuntos
let numeroActual = "";
let numeroAnterior = "";
let operaciones = ['+', '-', '*', '/'];

//Limpiar e inicia la pantalla
function init() {
  document.getElementById('numero-actual').innerHTML = '0';
  document.getElementById('numero-anterior').innerHTML = "";
}

//Borrar ultimo numero
function borrarUltimo() {
  numeroActual = document.getElementById('numero-actual').textContent;
  numeroAnterior = document.getElementById('numero-anterior').textContent;
  switch (numeroActual) {
    case '0':
      if (numeroAnterior === "") {
        //en el caso de que el número actual sea cero y la pantalla de operaciones pendientes esté en blanco, todo debería permanecer igual, es decir, con la pantalla limpia e inicializada.
        init();
        } else {
        //en el caso de que el número actual sea cero, pero que la pantalla de operaciones pendientesno esté en blanco, es decir, hay operaciones pendientes, baja las operaciones pendientes como número actual, por si queremos borrar algo.
        numeroActual = numeroAnterior;
        document.getElementById('numero-actual').textContent = numeroActual;
        document.getElementById('numero-anterior').textContent = "";}
    break;
    case '=':
      //en el caso de que estemos borrando el resultado de una operacion, y lleguemos hasta el signo igual, baja las operaciones de las que se había obtenido el resultado como número actual, por si queremos borrar algo. 
      numeroActual = numeroAnterior;
      document.getElementById('numero-actual').textContent = numeroActual;
      document.getElementById('numero-anterior').textContent = "";
    break;
    case "":
      //en el caso de que hayamos borrado todos los números y operadores en la pantalla del número actual, y ya sólo quede la pantalla en blanco, procede a reinicializar la pantalla. 
      init();
    break;
    default:
      //en cualquier otro caso simplemente borra el último caracter u operador presente en la pantalla de número actual.
      numeroActual = numeroActual.slice(0, -1);
      document.getElementById('numero-actual').textContent = numeroActual;
    break;  
  } 
}

//Añadir numeros a la pantalla
function añadir(operando) {
  //establecemos algunas variables para que la función trabaje adecuadamente.
  numeroActual = document.getElementById('numero-actual').textContent;
  numeroAnterior = document.getElementById('numero-anterior').textContent;
  let decimal = (numeroActual.indexOf(operando) === -1);
  //con este primer condicional se establece una longitud máxima de 17 carácteres, para la pantalla de número actual.
  if (numeroActual.length<16){
  switch (operando) {
    //con esta condición se impide que una vez establecido un decimal se puedan añadir más comas al número.
    case '.':
      if (decimal === true) {
        numeroActual = numeroActual + operando;} 
      break;
    //con esta condición se trata de conseguir que el número 0 sea un cero, y no varios ceros, excepto si se añaden decimales.
    default:
      if (numeroActual === '0') {numeroActual = operando} else {
      numeroActual = numeroActual + operando;}
      break;
  }
  document.getElementById('numero-actual').textContent = numeroActual;
  //con esto se dispara una alerta
} else {
    document.getElementById('alertas').textContent = "NÚMERO DEMASIADO LARGO";
    setTimeout(() => {
    document.getElementById('alertas').textContent = "";
    }, 2000);
}
}

//funcion para el funcionamiento de los operadores +, -, *, /
function operar(operador) {
  numeroActual = document.getElementById('numero-actual').textContent;
  numeroAnterior = document.getElementById('numero-anterior').textContent;
  if (numeroActual.slice(0,2) === '= ') {
    document.getElementById('numero-anterior').textContent = numeroActual.slice(2) + " " + operador + " ";
    document.getElementById('numero-actual').textContent = "0";
  } else {
    switch (operador) {
      case '-':
        if (numeroActual === '0') {
          document.getElementById('numero-actual').textContent = operador
        } else if (numeroActual.slice(-1) === '-') {
          numeroActual = numeroActual + " " + operador + " ";
        } else {
          document.getElementById('numero-anterior').textContent = numeroAnterior + numeroActual + " " + operador + " ";
          document.getElementById('numero-actual').textContent = "0";
        }
        break;
      default:
        if (numeroActual === '0' && operaciones.includes(numeroAnterior.slice(-2, -1))) {
          document.getElementById('numero-anterior').textContent = numeroAnterior.slice(0,-2) + " " + operador + " ";;
        } else {
          document.getElementById('numero-anterior').textContent = numeroAnterior + numeroActual + " " + operador + " ";
          document.getElementById('numero-actual').textContent = "0";
        }
        break;
    }
  }
}


//funcion para calcular el resultado
function resultado() {
  let x;
  let y;
  if (document.getElementById('numero-actual').textContent.indexOf('=') === -1) {
      numeroActual = document.getElementById('numero-actual').textContent;
      document.getElementById('numero-anterior').textContent = document.getElementById('numero-anterior').textContent + numeroActual;
  }
  x = document.getElementById('numero-anterior').textContent;
  y = eval(x).toFixed(7);
    //elimina decimales innecesarios, p.e. 14.0000000 => 14, 14.0010000 => 14.001
    if (y == Math.round(y)) {y = y.slice(0,-8)
    } else {
       while (y.slice(-1) === '0' || y.slice(-1) === '.') {  
       y = y.slice(0, -1);}
     }
    //-------------------------------------------------//
  
  document.getElementById('numero-anterior').textContent = x;
  document.getElementById('numero-actual').textContent = "= " + y;
}


