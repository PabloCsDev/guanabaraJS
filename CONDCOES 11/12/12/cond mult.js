var numero = prompt("Digite um número para ser multiplicado por 2:");

numero = parseFloat(numero);

if (isNaN(numero)) {
  document.write("Você não digitou um número válido.");
} else {
  var resposta = numero * 2;

  document.write("A resposta do sistema é: " + resposta);
}
