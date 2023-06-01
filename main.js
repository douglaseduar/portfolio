document.querySelector('#enviar').addEventListener("click", adicionar);

function adicionar(event){
    event.preventDefault();
    var form = document.querySelector('#cadastro');
    descricao = form.descricao.value;
    document.location = 'https://api.whatsapp.com/send?phone=5542999750210&text=' + descricao;
}

function idade(nascimento, hoje) {
    var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
    if ( new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < 
         new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()) )
        diferencaAnos--;
    return diferencaAnos;
}

document.querySelector("span").textContent = idade(new Date(2001, 04, 06), new Date())


const date = new Date();
const currentYear = date.getFullYear();

document.querySelector(".direito").textContent = "© "+ currentYear + " Todos os direitos reservados."    