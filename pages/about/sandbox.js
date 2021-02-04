const burger = document.querySelector('.burger')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay')

burger.addEventListener('click', () => {
    one.classList.toggle('one-active')
    two.classList.toggle('two-active')
    three.classList.toggle('three-active')
    menu.classList.toggle('menu-show')
    menuOverlay.classList.toggle('menu-overlay-show')
    document.body.classList.toggle('body-overflow')
})

menuOverlay.addEventListener('click', () => {
    one.classList.toggle('one-active')
    two.classList.toggle('two-active')
    three.classList.toggle('three-active')
    menu.classList.toggle('menu-show')
    menuOverlay.classList.toggle('menu-overlay-show')
    document.body.classList.toggle('body-overflow')
})