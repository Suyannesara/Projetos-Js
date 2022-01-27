document.getElementById('btn-soma').addEventListener("click");

let n1 = document.getElementById('soma1').value;
let n2 = document.getElementById('soma2').value;
n1 = parseInt(n1);
n2 = parseInt(n2);
/*
function somar(){
  let n1 = document.getElementById('soma1').value;
  let n2 = document.getElementById('soma2').value;
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  //SOMA
  let resultadoSoma = n1 + n2;

  document.getElementById('resultado-soma').value = resultadoSoma;
};*/

function somar(n1, n2){
  let resultadoSoma = n1 + n2;
  return resultadoSoma;
  
};
alert(resultadoSoma);


