// ATV1
function calcMedia(){
  //Taking the values of inputs
  var nota1 = parseFloat(document.getElementById('nota1').value)

  var nota2 = parseFloat(document.getElementById('nota2').value)

  var nota3 = parseFloat(document.getElementById('nota3').value)

  //Calculating avarage
  var media = (nota1 + nota2 + nota3) / 3
  

  //Replacing content
  document.getElementById("media").innerHTML = media;
}

//ATV2
function checkPin(){
  let password = document.getElementById('password').value;

  if (password == '2002'){
    document.getElementById('result').innerHTML = "Acesso Permitido"
  }
  else{
    document.getElementById('result').innerHTML = "Senha Inválida"
  }
}

//ATV3

function validateInterval(){
  //Read number
  var number = parseFloat(document.getElementById('value').value)

  //Checking interval
  if (number >=0 && number <= 25){
    document.getElementById('value_result').innerHTML = 	
    "Intervalo [0,25]"
  }
  else if(number >=26 && number <= 50){
    document.getElementById('value_result').innerHTML = 	
    "Intervalo (25,50]"
  }
  else if(number >=51 && number <= 75){
    document.getElementById('value_result').innerHTML = 	
    "Intervalo [50,75]"
  }
  else if(number >=76 && number <= 100){
    document.getElementById('value_result').innerHTML = 	
    "Intervalo (75,100]"
  }
  else{
    document.getElementById('value_result').innerHTML = "Fora de Intervalo"
  }
  
}
  




