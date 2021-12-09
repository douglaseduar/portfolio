document.querySelector('#enviar').addEventListener("click", adicionar);

function adicionar(event){
    event.preventDefault();
    var form = document.querySelector('#cadastro');
    descricao = form.descricao.value;
    document.location = 'https://api.whatsapp.com/send?phone=5542999750210&text=' + descricao;
}