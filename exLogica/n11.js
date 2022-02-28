//Ask user for the numbers and type of operation

var n1 = parseFloat(prompt("Tell me the first number: "))
var n2 = parseFloat(prompt("Tell me the second number: "))

var operation = prompt("What operation do you wanna do? (Type only: +, -, *, /")

var resultado

switch (operation){
  case "+":
    resultado = n1 + n2
  break;

  case "-":
    resultado = n1 - n2
  break;

  case "*":
    resultado = n1 * n2
  break;
  
  case "/":
    resultado = n1 / n2
  break;

  default:
    alert("The operation you asked for isn't in this algorithym scope")
  break;
}

alert("The result of your operation is: " + resultado)





