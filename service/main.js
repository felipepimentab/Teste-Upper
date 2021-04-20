const enviar = document.querySelector('.login');
const erro = document.querySelector('[data-erro]');
const loading = document.querySelector('[data-loading]');
enviar.addEventListener('submit', onSubmit);
const http = new XMLHttpRequest();

function onSubmit(evento) {
    erro.classList.remove('msg-ativo');
    loading.classList.add('msg-ativo');
    evento.preventDefault();
    const form = {
        email : document.querySelector('#email').value,
        password : document.querySelector('#senha').value,
    }
    
    http.open('POST', 'https://reqres.in/api/login', true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(JSON.stringify(form));
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200 && JSON.parse(this.response).token == 'QpwL5tke4Pnpja7X4') {
            loading.classList.remove('msg-ativo');
            erro.classList.remove('msg-ativo');
            window.location.href='lista-usuarios.html';
        } else if(http.status == 400) {
            loading.classList.remove('msg-ativo');
            erro.classList.add('msg-ativo');
        }
    }
};

// E-mail: eve.holt@reqres.in
// Senha: cityslicka
// Token: QpwL5tke4Pnpja7X4