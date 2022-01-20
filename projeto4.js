// OUVIR QUANDO O EVENTO VAI OCORRER
document.getElementsByTagName('input').addEventListener("click");

function acender(){
  document.getElementById("apagada").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';

};

function apagar(){
  document.getElementById("apagada").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true" alt="Lampada apagada';

};