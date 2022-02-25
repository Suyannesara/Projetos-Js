document.getElementsByTagName('input').addEventListener("click");

function saudar(){

  //ARMAZENANDO VALORES INSERIDOS PELO USUÁRIO
  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let cpf = document. getElementById('cpf').value;

  alert(`Olá ${nome} ${sobrenome}! \nSeu cpf é: ${cpf.substr(0,[3])} . ${cpf.substr(3,[3])} . ${cpf.substr(6,[3])} - ${cpf.substr(9,[2])}`);
}; 

