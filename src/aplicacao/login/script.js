const usuarios = [
  { email: "lumora@email.com", senha: "lumora123" },
  { email: "teste@email.com", senha: "teste123" }
];

const btnLogin   = document.getElementById("btn-login");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("password");
const errorMsg   = document.getElementById("error-msg");

function fazerLogin() {
  const emailDigitado = inputEmail.value.trim();
  const senhaDigitada = inputSenha.value.trim();

  if (!emailDigitado || !senhaDigitada) {
    errorMsg.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  const usuarioEncontrado = usuarios.find(
    u => u.email === emailDigitado && u.senha === senhaDigitada
  );

  if (usuarioEncontrado) {
    errorMsg.textContent = "";
    localStorage.setItem("usuarioLogado", emailDigitado);
    window.location.href = "../frontpage/index.html";
  } else {
    errorMsg.textContent = "E-mail ou senha incorretos. Tente novamente.";
  }
}

btnLogin.addEventListener("click", fazerLogin);

inputSenha.addEventListener("keydown", function(e) {
  if (e.key === "Enter") fazerLogin();
});