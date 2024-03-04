//------------------------Criando uma Seleção fixa no menu Lateral--------------------------------------------
var menuItem = document.querySelectorAll('.item-menu')
function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'))
        this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)

//------------------------------------------botão para ir para o carrinho ------------------------------------  
 var botaoCarrinho = document.getElementById('sacola');
 botaoCarrinho.addEventListener("click", function(){
     window.location.href = "sacola.html";
 });

//------------------------------------------Expandir o menu --------------------------------------------------              
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menulateral')
var btnXx = document.querySelector('#btn-X')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

btnXx.addEventListener('click', function(){
   menuSide.classList.toggle('expandir')
})

//------------------------------------------Barra de Pesquisa------------------------------------------------
function aumentar_input(){
    document.getElementById("pesq_input").style.width = "50%";
}
    
function diminuir_input(){
    document.getElementById("pesq_input").style.width = "80%";
}