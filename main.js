const imageList = [
    "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];
let i = 0;

document.addEventListener("DOMContentLoaded", function(){
    const nextBtn = document.getElementById('nextBtn');
    const previousBtn = document.getElementById('previousBtn');
    const img = document.getElementById('image');
    
    initialize()
    
    nextBtn.addEventListener("click", ()=>{
        i++;
        img.src= imageList[i];
        navigationCheck();
    });
    
  
    previousBtn.addEventListener("click", ()=>{
        i--;
        img.src= imageList[i];
        navigationCheck();
    });

    zoomInBtn.addEventListener("click", ()=> {
        document.getElementById("image").style.width = (document.getElementById("image").clientWidth + 100) + "px";
        document.getElementById("image").style.height = (document.getElementById("image").clientWidth + 100) + "px";
    });
    
    zoomOutBtn.addEventListener("click", ()=> {
        document.getElementById("image").style.width = (document.getElementById("image").clientWidth - 100) + "px";
        document.getElementById("image").style.height = (document.getElementById("image").clientWidth - 100) + "px";
    });
    

    function navigationCheck() {
        if (i === 0) {
            previousBtn.style.display = 'none';
            nextBtn.style.display = 'inline';
        } else if (i === imageList.length-1) {
            nextBtn.style.display = 'none';
            previousBtn.style.display = 'inline';
        } else {
            previousBtn.style.display = 'inline';
            nextBtn.style.display = 'inline';
        }
    };

    function initialize() {
        document.getElementById('image').src = imageList[i];
        navigationCheck();
    };

});
