// Login

const formLogin = document.getElementById('formulario-login');
const inputLogin = document.getElementById('emaillogin');
const inputSenha = document.getElementById('senhalogin');

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    validarLogin();
});

// Validação
function validarLogin() {
    const loginValue = inputLogin.value.trim();
    const senhaValue = inputSenha.value.trim();
    let formValido = true;

    // Login (usuário ou email)
    if(loginValue === '') {
        mostrarErro(inputLogin, 'Digite seu usuário ou e-mail');
        formValido = false;
    } else if(isEmail(loginValue)) {
        mostrarOk(inputLogin);
    } else if(!/^[a-zA-Z0-9_]{3,20}$/.test(loginValue)) {
        mostrarErro(inputLogin, 'Nome de usuário inválido');
        formValido = false;
    } else {
        mostrarOk(inputLogin);
    }

    // Senha
    if(senhaValue === '') {
        mostrarErro(inputSenha, 'Digite sua senha');
        formValido = false;
    } else if(senhaValue.length < 8) {
        mostrarErro(inputSenha, 'A senha deve ter pelo menos 8 caracteres');
        formValido = false;
    } else {
        mostrarOk(inputSenha);
    }

    // Enviar se estiver tudo certo
    if(formValido) formLogin.submit();
}

// Verifica se é email válido
function isEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

// Funções de feedback
function mostrarErro(input, msg){
    const container = input.parentElement;
    const small = container.querySelector('small');
    small.innerText = msg;
    container.classList.add('erro');
    container.classList.remove('ok');
}

function mostrarOk(input){
    const container = input.parentElement;
    const small = container.querySelector('small');
    small.innerText = '';
    container.classList.remove('erro');
    container.classList.add('ok');
}