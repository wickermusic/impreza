////////////   Burger Animation &  Menu & Overlay  /////////////


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

/////////////////// Scroll Btn ///////////////////



const scrollButton = document.querySelector('.scroll-btn')
const sectionTwo = document.querySelector('.section-2')

scrollButton.addEventListener('click', () => {
    sectionTwo.scrollIntoView ({behavior: 'smooth'})
})



///////////////////Sticky Navbar /////////////////////
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.fas')

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY >= 200) {
        navbar.style.background = 'rgba(0, 0, 0, 0.7)'
        merchContainer.classList.remove('merch-container-active')
        logo.classList.remove('logo-active')
        icon.classList.remove('fa-tshirt')
        icon.classList.add('fa-home')
    } else if (scrollY < 30) {
        icon.classList.add('fa-tshirt')
        icon.classList.remove('fa-home')
        navbar.style.background = 'none'
    }
})


///////////////  MERCH Animation /////////////////

const merch = document.querySelector('.merch')
const merchContainer = document.querySelector('.merch-container')
const logo = document.querySelector('.logo')

merch.addEventListener('click', () => {
    merchContainer.classList.toggle('merch-container-active')
    logo.classList.toggle('logo-active')
    merchContainer.scrollIntoView ({behavior: 'smooth'})
})





/////////////////////  MERCH WINDOW //////////////////////

const merchOne = document.querySelector('.merch-1')
const merchTwo = document.querySelector('.merch-2')
const merchThree = document.querySelector('.merch-3')
const merchFour = document.querySelector('.merch-4')
const merchFive = document.querySelector('.merch-5')
const merchSix = document.querySelector('.merch-6')

merchOne.addEventListener('click', () => {
    window.location = 'pages/merch/merch-1.html'
})

merchTwo.addEventListener('click', () => {
    window.location = 'pages/merch/merch-2.html'
})

merchThree.addEventListener('click', () => {
    window.location = 'pages/merch/merch-3.html'
})

merchFour.addEventListener('click', () => {
    window.location = 'pages/merch/merch-4.html'
})

merchFive.addEventListener('click', () => {
    window.location = 'pages/merch/merch-5.html'
})

merchSix.addEventListener('click', () => {
    window.location = 'pages/merch/merch-6.html'
})