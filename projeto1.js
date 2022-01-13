let a = 'vermelho';
let b = 'azul'

let c = a;
a = b;
b = c;

console.log(a + ' ' + b);

/* MEU JEITO - COMPLEXO
console.log(a + ' ' + b);

function trocarOrdem (){
  a = 'azul'
  b = 'vermelho'
};

trocarOrdem();
console.log(a + ' ' + b)*/