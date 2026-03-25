// Script cadastro
const formCadastro = document.getElementById("formulario-cadastro");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

const toggleSenha = document.getElementById("toggleSenha");
const toggleConfirmarSenha = document.getElementById("toggleConfirmarSenha");

// Mostrar / ocultar senha
function togglePassword(input, icon) {
  if(input.type === "password"){
    input.type = "text";
    icon.classList.replace("fa-eye-slash","fa-eye");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye","fa-eye-slash");
  }
}

toggleSenha.addEventListener("click", () => {
  togglePassword(senha, toggleSenha.querySelector("i"));
});

toggleConfirmarSenha.addEventListener("click", () => {
  togglePassword(confirmarSenha, toggleConfirmarSenha.querySelector("i"));
});

// Validação do formulário
formCadastro.addEventListener("submit", function(e){
  e.preventDefault();
  let formValido = true;

  // Limpar erros
  document.querySelectorAll(".erro-msg").forEach(el => el.textContent = "");
  [usuario,email,senha,confirmarSenha].forEach(i => i.classList.remove("erro","valido"));

  // Usuário
  if(usuario.value.trim().length < 3){
    document.getElementById("erroUsuario").textContent = "Usuário precisa ter pelo menos 3 caracteres.";
    usuario.classList.add("erro");
    formValido = false;
  } else usuario.classList.add("valido");

  // Email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regexEmail.test(email.value)){
    document.getElementById("erroEmail").textContent = "Digite um e-mail válido.";
    email.classList.add("erro");
    formValido = false;
  } else email.classList.add("valido");

  // Senha
  if(senha.value.length < 8){
    document.getElementById("erroSenha").textContent = "A senha precisa ter pelo menos 8 caracteres.";
    senha.classList.add("erro");
    formValido = false;
  } else senha.classList.add("valido");

  // Confirmar senha
  if(confirmarSenha.value !== senha.value){
    document.getElementById("erroConfirmarSenha").textContent = "As senhas não coincidem.";
    confirmarSenha.classList.add("erro");
    formValido = false;
  } else confirmarSenha.classList.add("valido");

  // Enviar se estiver tudo certo
  if(formValido) formCadastro.submit();
});