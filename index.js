const btnMobile = document.getElementById('btn-mobile')



function toggleMenu(event) {
if(event.type === 'touchstart'){Event.preventDefault()}
const nav = document.getElementById('nav')
nav.classList.toggle('active');
const active = nav.classList.contains('active')
event.currentTarget.setAttribute('aria-expanded', active)
if(active){event.currentTarget.setAttribute('aria-label', 'fechar Menu')
}else{
    event.currentTarget.setAttribute('aria-label', 'Abri Menu')
}
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

