import "./styles.css"

console.log('test message')

// Event Listeners 

const home = document.querySelector('.home-btn')
const menu = document.querySelector('.menu-btn')
const about = document.querySelector('.about-btn')

const content = document.getElementById('content');

home.addEventListener('click', () => {
    content.innerText = homeContent;
})

menu.addEventListener('click', () => {
    content.innerText = menuContent;
})

about.addEventListener('click', () => {
    content.innerText = aboutContent;
})

const homeContent = "Content for home page";
const menuContent = "Content for menu page";
const aboutContent = "Content for about page";