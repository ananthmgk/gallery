const image1 = "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image2 = "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image3 = "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image4 = "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image5 = "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const img = document.querySelector('img');
const next = document.querySelector('.right-arrow');
const previous = document.querySelector('.left-arrow');
const close = document.querySelector('.close');

const imageList = [image1,image2,image3,image4,image5];

let i = 0;
let display = [i];
next.addEventListener("click", ()=>{
    if(display >= imageList[imageList.length]) {
        next.classList.add('hideBtn');
    } else if (display === imageList[4]) {
        next.classList.remove('hideBtn');
    } else {
        i++;
        display = imageList[i];
        img.src= display;
    }
});
previous.addEventListener("click", ()=>{
    i--;
    display = imageList[i];
    img.src= display;
    if(display === imageList[0]) {
        previous.classList.add('hideBtn');
    } else if (display === imageList[1]) {
        previous.classList.remove('hideBtn');
    };
});

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    img.src = image1;
});

btn2.addEventListener('click', () => {
    img.src = image2;
});

btn3.addEventListener('click', () => {
    img.src = image3;
});
btn4.addEventListener('click', () => {
    img.src = image4;
});
btn5.addEventListener('click', () => {
    img.src = image5;
});
