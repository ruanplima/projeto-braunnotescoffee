const btn = document.querySelector('.btn-menu')
const menu = document.querySelector('ul')

function toggleMenu(){
    menu.classList.toggle('ativo')
}


btn.addEventListener('click', toggleMenu)