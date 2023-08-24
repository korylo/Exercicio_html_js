function validaFormulario() {
  let numA = document.getElementById("numeroA").value;
  let numB = document.getElementById("numeroB").value;

  if (numB > numA) {
    /* document.getElementById -- pega o elemento html pelo id
     .innerHTML -- insere uma mensagem no elemento html */
    document.getElementById("mensagem").innerHTML =
      "Formulário válido. O número A é menor que número B";
    // .className-- ele vai inseri uma classe no elemento
    document.getElementById("mensagem").className = "valido";
  } else {
    document.getElementById("mensagem").innerHTML =
      "Formulário inválido. O número B precisa ser maior que número A";
    document.getElementById("mensagem").className = "invalido";
  }
  // o codigo abaixo limpa os campos input onde o usuario digitou
  document.getElementById("numeroA").value = "";
  document.getElementById("numeroB").value = "";
}
