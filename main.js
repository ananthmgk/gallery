const a = document.getElementById("image1");
const b = document.getElementById("image2");
const c = document.getElementById("image3");


const displayer = document.querySelector('.show');
const next = document.querySelector('.right-arrow');
const previous = document.querySelector('.left-arrow');
let display=" ";
next.addEventListener("click", ()=>{
    display++;
    displayer.innerHTML= display;
});

previous.addEventListener("click", ()=>{
    display--;
    displayer.innerHTML= display;
});