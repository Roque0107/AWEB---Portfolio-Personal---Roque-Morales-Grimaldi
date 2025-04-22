
// Declarar Variables

const main = document.querySelector('.main');
const main__txt = document.querySelector('.main__txt');
const main__txt2 = document.querySelector('.main__txt2');
const btn = document.querySelector('.button');
const color = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange', 'brown', 'black', 'white',"gray","cyan","magenta","lime","olive","navy","teal","maroon","silver","gold","coral"];



// Funciones

function getRandomColor() {
    return Math.floor(Math.random() * color.length);
}


btn.addEventListener('click', function() {

    const randomColor = getRandomColor();
    main.style.backgroundColor = color[randomColor];
    main__txt2.textContent = color[randomColor];
});