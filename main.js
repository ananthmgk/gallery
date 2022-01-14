const imageList = [
    "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];
let i = 0;

document.addEventListener("DOMContentLoaded", function(){
    const nextBtn = document.getElementById('nextBtn');
    const previousBtn = document.getElementById('previousBtn');

    initialize();

    nextBtn.addEventListener("click", ()=>{
        i++;
        document.getElementById('image').src = imageList[i];
        navigationCheck();
    });
    
    previousBtn.addEventListener("click", ()=>{
        i--;
        document.getElementById('image').src = imageList[i];
        navigationCheck();
    });
    
    document.getElementById('btn1').addEventListener('click', () => {
        i = 0;
        document.getElementById('image').src = imageList[i];
        navigationCheck();
    });
    
    document.getElementById('btn2').addEventListener('click', () => {
        document.getElementById('image').src = image2;
        i = 1;
        navigationCheck();
    });
    
    document.getElementById('btn3').addEventListener('click', () => {
        document.getElementById('image').src = image3;
        i = 2;
        navigationCheck();
    });
    
    document.getElementById('btn4').addEventListener('click', () => {
        document.getElementById('image').src = image4;
        i = 3;
        navigationCheck();
    });
    
    document.getElementById('btn5').addEventListener('click', () => {
        document.getElementById('image').src = image5;
        i = 4;
        navigationCheck();
    });

    function navigationCheck() {
        if (i === 0) {
            previousBtn.style.display = 'none';
            nextBtn.style.display = 'inline';
        } else if (i === imageList.length - 1) {
            previousBtn.style.display = 'inline';
            nextBtn.style.display = 'none';
        } else {
            previousBtn.style.display = 'inline';
            nextBtn.style.display = 'inline';
        }
    }

    function initialize() {
        document.getElementById('image').src = imageList[i];
        navigationCheck();
    }

});
