
document.getElementById('btn-soma').addEventListener("click");

function somar(){
  let n1 = document.getElementById('soma1').value;
  let n2 = document.getElementById('soma2').value;
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  //SOMA
  let resultadoSoma = n1 + n2;

  document.getElementById('resultado-soma').value = resultadoSoma;
};

