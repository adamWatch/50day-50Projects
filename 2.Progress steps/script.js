const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;
let currentValue = 0;
const value = 33.34;

nextBtn.addEventListener('click',() =>{
    currentActive++;

    currentValue += value;
    if(currentValue > 100){
        currentValue = 100;
        nextBtn.disabled = true;
    }else if(currentValue){
        prevBtn.disabled = false;
    }
    
    progress.style.width = `${currentValue}%`;
    
    console.log(currentActive);
    update();
    
})

prevBtn.addEventListener('click',() =>{
    currentActive--;
    currentValue -= value;
    if(currentValue < 0){
        currentValue = 0;
        prevBtn.disabled = true;
    }else if(currentValue){
        nextBtn.disabled = false;
    }
    
    progress.style.width = `${currentValue}%`;
    
    update();
})

function update(){
    circles.forEach((circle,index) =>{
        if(index <currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
}