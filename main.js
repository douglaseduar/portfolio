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

document.querySelector("span").textContent = idade(new Date('2001', '04', '06'), new Date())


const date = new Date();
const currentYear = date.getFullYear();

document.querySelector(".direito").textContent = "© "+ currentYear + " Todos os direitos reservados."    



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo3() {
    for (let i = 100; i <= 600; i++) {
        document.querySelector(".artes").textContent = i
        await sleep(2);
    }

}
async function demo1() {
    for (let i = 0; i <= 22; i++) {
        document.querySelector(".proje").textContent = i
        await sleep(100);
    }
}
async function demo2() {
    for (let i = 0; i <= 5; i++) {
        document.querySelector(".sitess").textContent = i
        await sleep(200);
    }
}

function demo(){
    if(document.querySelector(".proje").textContent == '0'){
        demo3();
        demo1();
        demo2();
    }

}

function frase(msg){
    document.querySelector(".texto1").textContent = msg
}

function frasen(){
    document.querySelector(".texto1").innerHTML = "&nbsp"
}


document.querySelector('#profissional').addEventListener("click", alterar);

function alterar(){
    document.querySelector(".graducao").style.display = 'none' 
    document.querySelector(".curso").style.display = 'none' 
    document.querySelector(".profissional").style.display = 'block' 
    document.querySelector("#profissional").style.textDecoration = 'overline';
    document.querySelector("#graducao").style.textDecoration = 'none';
    document.querySelector("#curso").style.textDecoration = 'none';

}
document.querySelector('#graducao').addEventListener("click", alterar1);

function alterar1(){
    document.querySelector(".graducao").style.display = 'block'
    document.querySelector(".profissional").style.display = 'none' 
    document.querySelector(".curso").style.display = 'none' 
    document.querySelector("#graducao").style.textDecoration = 'overline';
    document.querySelector("#curso").style.textDecoration = 'none';
    document.querySelector("#profissional").style.textDecoration = 'none';

}
document.querySelector('#curso').addEventListener("click", alterar2);

function alterar2(){
    document.querySelector(".graducao").style.display = 'none'
    document.querySelector(".profissional").style.display = 'none' 
    document.querySelector(".curso").style.display = 'block' 
    document.querySelector("#curso").style.textDecoration = 'overline';
    document.querySelector("#profissional").style.textDecoration = 'none';
    document.querySelector("#graducao").style.textDecoration = 'none';
}


rodar();

async function rodar(){
    
    for(let i = 0; i < 1500; i++)
    {
        if(screen.width < 991){

        }else{
        await sleep(10);
        if($('#sites').is(':hover')){
            break
        }

         document.querySelector(".sites").scrollTo(i, 0)
    }}
    await sleep(100);
    rodar()
    
}