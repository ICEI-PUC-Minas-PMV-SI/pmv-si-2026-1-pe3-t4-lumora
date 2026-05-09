const btnCadastrar   = document.getElementById("btn-cadastrar");
const inputNome      = document.getElementById("nome");
const inputEmail     = document.getElementById("email");
const inputSenha     = document.getElementById("password");
const inputConfirmar = document.getElementById("confirm-password");
const errorMsg       = document.getElementById("error-msg");

function cadastrar() {
  const nome      = inputNome.value.trim();
  const email     = inputEmail.value.trim();
  const senha     = inputSenha.value.trim();
  const confirmar = inputConfirmar.value.trim();

  if (!nome || !email || !senha || !confirmar) {
    errorMsg.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    errorMsg.textContent = "Por favor, informe um e-mail válido.";
    return;
  }

  if (senha.length < 6) {
    errorMsg.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  if (senha !== confirmar) {
    errorMsg.textContent = "As senhas não coincidem.";
    return;
  }

  errorMsg.textContent = "";
  localStorage.setItem("usuarioLogado", email);
  window.location.href = "../frontpage/index.html";
}

btnCadastrar.addEventListener("click", cadastrar);