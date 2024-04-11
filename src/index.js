import "./styles.css"

console.log('test message')

// Event Listeners 

const home = document.querySelector('.home-btn');
const menu = document.querySelector('.menu-btn');
const about = document.querySelector('.about-btn');

const content = document.getElementById('content');

home.addEventListener('click', () => {
    console.log('something')
    content.innerHTML = generateContent('Home');
})

menu.addEventListener('click', () => {
    content.innerHTML = generateContent('Menu');
})

about.addEventListener('click', () => {
    content.innerHTML = generateContent('About');
})

function generateContent(field) {
    return (
    `
        <div class="main">
            <h1 class="title">${field}</h1>
            <div class="section-1">Section 1</div>
            <div class="section-2">Section 2</div>
            <div class="section-3">Section 3</div>
        </div>
    `
    )
}