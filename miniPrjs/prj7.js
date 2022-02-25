//TROCA DE COR DOS BOTÕES VERDE E VERMELHO
document.getElementById('verde').addEventListener("click");
document.getElementById('vermelho').addEventListener("click");

function mudarCorVerde(){
  document.getElementById('verde').style = "background-color: green; color: white;";
};

function mudarCorVermelho(){
  document.getElementById('vermelho').style = "background-color: red; color: white;"
};

// PAG AO SER CARREGADA, INSERE O TEXTO DO JS DENTRO DA DIV VAZIA
window.onload = mostrarTexto();

function mostrarTexto(){
  document.getElementById('resultado').textContent = 'Esse texto foi inserido pelo JavaScript'
};

//BOTÃO QUE AO SER CLICADO MOSTRA TEXTO INSERIDO PELO JS
function mostrarTexto(){
  document.write('Esse texto foi inserido pelo Javascript')
}
