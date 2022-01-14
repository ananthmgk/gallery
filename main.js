const image1 = "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image2 = "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image3 = "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image4 = "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image5 = "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const imageList = [image1,image2,image3,image4,image5];
let i = 0;
let display = imageList[0];

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.right-arrow').addEventListener("click", ()=>{
        if(display >= imageList[imageList.length]) {
            next.classList.add('hideBtn');
        } else if (display === imageList[4]) {
            next.classList.remove('hideBtn');
        } else {
            i++;
            display = imageList[i];
            document.querySelector('img').src= display;
        }
    });
    
    // previous
    document.querySelector('.left-arrow').addEventListener("click", ()=>{
        i--;
        display = imageList[i];
        document.querySelector('img').src= display;
        if(display === imageList[0]) {
            previous.classList.add('hideBtn');
        } else if (display === imageList[1]) {
            previous.classList.remove('hideBtn');
        };
    });
    
    document.querySelector('#btn1').addEventListener('click', () => {
        document.querySelector('img').src = image1;
        i = 0;
    });
    
    document.querySelector('#btn2').addEventListener('click', () => {
        document.querySelector('img').src = image2;
        i = 1;
    });
    
    document.querySelector('#btn3').addEventListener('click', () => {
        document.querySelector('img').src = image3;
        i = 2;
    });
    
    document.querySelector('#btn4').addEventListener('click', () => {
        document.querySelector('img').src = image4;
        i = 3;
    });
    
    document.querySelector('#btn5').addEventListener('click', () => {
        document.querySelector('img').src = image5;
        i = 4;
    });

});
