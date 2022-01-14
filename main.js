const image1 = "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image2 = "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image3 = "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image4 = "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image5 = "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const imageList = [image1,image2,image3,image4,image5];
let i = 0;

document.addEventListener("DOMContentLoaded", function(){
    const nextBtn = document.getElementById('nextBtn');
    const previousBtn = document.getElementById('previousBtn');

    nextBtn.addEventListener("click", ()=>{
        i++;
        document.getElementById('image').src = imageList[i];
        if (i === imageList.length - 1) {
            nextBtn.style.display = 'none';
        }

        if (i === 1) {
            previousBtn.style.display = 'inline';
        }
    });
    
    previousBtn.addEventListener("click", ()=>{
        i--;
        document.getElementById('image').src = imageList[i];
        if (i === 0) {
            previousBtn.style.display = 'none';
        }

        if (i === imageList.length - 2) {
            nextBtn.style.display = 'inline';
        }
    });
    
    document.getElementById('btn1').addEventListener('click', () => {
        document.getElementById('image').src = image1;
        i = 0;
    });
    
    document.getElementById('btn2').addEventListener('click', () => {
        document.getElementById('image').src = image2;
        i = 1;
    });
    
    document.getElementById('btn3').addEventListener('click', () => {
        document.getElementById('image').src = image3;
        i = 2;
    });
    
    document.getElementById('btn4').addEventListener('click', () => {
        document.getElementById('image').src = image4;
        i = 3;
    });
    
    document.getElementById('btn5').addEventListener('click', () => {
        document.getElementById('image').src = image5;
        i = 4;
    });

});
