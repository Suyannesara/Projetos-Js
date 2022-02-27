/*Ask the user n1 and
read n1 and n2
pass n1 and n2 from string -> number */

var n1 = parseFloat(prompt("Tell me the first number: "));
var n2 = parseFloat(prompt("Tell me the second number: "));

if (n1 | n2 == 100){
  return(true)
} 
else if (n1 + n2 == 100){
  return(true)
} 
else {
  return(false)
}

