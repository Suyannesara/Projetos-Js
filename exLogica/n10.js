// Ask the user its mass and height
var mass = parseFloat(prompt("Write your body mass: "));
var height = parseFloat(prompt("Write your body height: "));

//Calculate 
var imc = mass / (height**2)

//IF

if (imc >= 18.5 && imc <= 25){
  alert("You're in your ideal weight!")
} 
else if (imc < 18.5){
  alert("You're under your ideal weight")
}
else{
  alert("You're above your ideal weight")
}