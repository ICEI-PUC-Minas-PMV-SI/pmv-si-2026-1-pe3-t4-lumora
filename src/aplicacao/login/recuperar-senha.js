const btnRecuperar = document.getElementById("btn-recuperar");
const inputEmail   = document.getElementById("email");
const errorMsg     = document.getElementById("error-msg");
const successMsg   = document.getElementById("success-msg");

function recuperarSenha() {
  const email = inputEmail.value.trim();

  if (!email) {
    errorMsg.textContent = "Por favor, informe seu e-mail.";
    successMsg.textContent = "";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    errorMsg.textContent = "Por favor, informe um e-mail válido.";
    successMsg.textContent = "";
    return;
  }

  errorMsg.textContent = "";
  successMsg.textContent = "Link de recuperação enviado! Verifique seu e-mail.";
  inputEmail.value = "";
}

btnRecuperar.addEventListener("click", recuperarSenha);

inputEmail.addEventListener("keydown", function(e) {
  if (e.key === "Enter") recuperarSenha();
});