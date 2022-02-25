//Fahrenheit to Celsius

var tempF = parseFloat(prompt("Write the temperature in Farenheit: "));

var tempC =  (5 * (tempF - 32) / 9).toFixed(2);

alert(`The temperature in Celsius is: ${tempC}`);