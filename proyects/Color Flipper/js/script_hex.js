
// Declarar Variables

const main = document.querySelector('.main_2');
const main__txt = document.querySelector('.main__txt');
const main__txt2= document.querySelector('.main__txt2');
const btn = document.querySelector('.button');
const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',"A","B","C","D","E","F"];



// Funciones

function getRandomColor(){
    return Math.floor(Math.random() * color.length);
}



btn.addEventListener("click", function() {
   let hexColor = "#";
   for (let i = 0; i < 6; i++){
       hexColor += color[getRandomColor()];
   }
   
   main.style.backgroundColor = hexColor;
   main__txt2.textContent = hexColor;
});