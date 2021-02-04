$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

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

const myButton = document.querySelector('.button') 
const form = document.querySelector('.form')

myButton.addEventListener('click', () => {
    form.classList.toggle('form-active')
})