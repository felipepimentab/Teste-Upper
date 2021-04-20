const http = new XMLHttpRequest();

const user = {
    nome : document.querySelectorAll('.usuario-nome'),
    email : document.querySelectorAll('.usuario-email'),
    avatar : document.querySelectorAll('.usuarios__card--avatar'),
    paginas : document.querySelector('.adm-usuarios__pag'),
    paginaAtual : null,
    totalDePags : null,
};

http.open('GET', 'https://reqres.in/api/users?page=1');
http.send();
http.onload = () => {
    dados = JSON.parse(http.response)
    for(let i = 0; i < dados.data["length"]; i++){
        user.nome[i].innerHTML = `${dados.data[i].first_name} ${dados.data[i].last_name}`;
        user.email[i].innerHTML = `${dados.data[i].email}`;
        user.avatar[i].innerHTML = `<img src="${dados.data[i].avatar}" class="foto-de-perfil">`;
    }
    user.paginas.innerHTML = `Mostrando ${dados.per_page} de ${dados.total}`;
    user.paginaAtual = dados.page;
    user.totalDePags = dados.total_pages;
}