//SABER SE O BOTÃO FOI CLICADO - ENVENT LISTENER
document.getElementById('confirmar').addEventListener("click");

//CONFIRMAR DADOS DO CADASTRO NA TELA 
function confirmar(){
  //COLOCAR DADOS DOS CAMPOS EM CONSTANTES
  const nomeCompleto = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const dtNascimento = document.getElementById('dtNascimento').value;

  //MOSTRANDO DADOS NA TELA
  document.write( 
    "Seus dados são: <br>" +
    "Nome: " + nomeCompleto + "<br>" +
    "Email: " + email + "<br>" +
    "Data de nascimento: " + dtNascimento
  );
};