const headerBurger = document.querySelector('.header_burger')
const headerMenu = document.querySelector('.header_menu')
const body = document.body

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    body.classList.toggle('locked')
})