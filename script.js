function openMenu(){
    const btn = document.querySelector('.btn-menu')
    const menu = document.querySelector('ul')

    function toggleMenu(){
        menu.classList.toggle('ativo')
    }


    btn.addEventListener('click', toggleMenu)
}
openMenu()

function modal(){
    const btnModal = document.querySelector('.openModal')
    const modal = document.querySelector('.modal')
    const icon = document.querySelector('.fa-circle-xmark')
    
    function openModal(){
        modal.classList.add('ativo')
        modal.addEventListener('click', (e) => {
            if(e.target.id == 'modal'){
                modal.classList.remove('ativo')
            }
        })
    }

    function fecharModal(){
        modal.classList.remove('ativo')
    }

    btnModal.addEventListener('click', openModal)
    icon.addEventListener('click', fecharModal)
}
modal()