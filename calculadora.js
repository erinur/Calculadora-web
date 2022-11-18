//declarar variables
let numeroActual = "";
let numeroAnterior = "";

//Limpiar e inicia la pantalla
function init() {
  document.getElementById('numero-actual').innerHTML = '0';
  document.getElementById('numero-anterior').innerHTML = "";
}

//Borrar ultimo numero
function borrarUltimo() {
  let a = document.getElementById('numero-actual').innerHTML;
  a = a.slice(0, -1);
  document.getElementById('numero-actual').innerHTML = a;
}

//Añadir numeros a la pantalla
function añadir(operando) {
  numeroActual = document.getElementById('numero-actual').textContent;
  let operadores = (numeroActual.slice(-1) === '+' || numeroActual.slice(-1) === '-' || numeroActual.slice(-1) === '/' || numeroActual.slice(-1) === '*')
  switch (operando) {
    case '.':
      if (numeroActual.indexOf(operando) === -1) {
        numeroActual = numeroActual + operando;}
      break;
    case '+':
      if (operadores) {
      } else {
        numeroActual = numeroActual + operando;}
      break;
      case '-':
      if (numeroActual.slice(-1) === '-') {
      } else {
        numeroActual = numeroActual + operando;}
      break;
      case '*':
      if (operadores) {
      } else {
        numeroActual = numeroActual + operando;}
      break;
      case '/':
      if (operadores) {
      } else {
        numeroActual = numeroActual + operando;}
      break;
    default:
      if (numeroActual === '0') {numeroActual = operando} else {
      numeroActual = numeroActual + operando;}
      break;
  }
  document.getElementById('numero-actual').textContent = numeroActual;
}

//funcion para calcular el resultado
function resultado() {
  let x;
  let y;
  switch (document.getElementById('numero-actual').textContent.indexOf('=') === -1) {
    case true:
      x = document.getElementById('numero-actual').textContent;
      y = eval(x);
      document.getElementById('numero-anterior').textContent = x;
      document.getElementById('numero-actual').textContent = "= " + y;
      break;
    case false:
      x = document.getElementById('numero-actual').textContent;
      x = x.slice(2);
      y = eval(x);
      document.getElementById('numero-anterior').textContent = x;
      document.getElementById('numero-actual').textContent = "= " + y;
      break;
  }
}


