const body = document.querySelector('body');
const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const imagesURL = ['./images/moon.jpg', './images/sun.jpg', './images/tree.jpg'];

let currentId = 0;

left.addEventListener('click', ()=>{
    if(currentId === 0){
        currentId = 2;
        slider.style.backgroundImage = `url('${imagesURL[currentId]}')`;
        body.style.backgroundImage = `url('${imagesURL[currentId]}')`;
         
    }else{
        currentId--;
        slider.style.backgroundImage = `url('${imagesURL[currentId]}')`;
        body.style.backgroundImage = `url('${imagesURL[currentId]}')`;

    }

});

right.addEventListener('click', () =>{
    if(currentId === 2){
        currentId = 0;
        slider.style.backgroundImage = `url('${imagesURL[currentId]}')`; 
    }else{
        currentId++;
        slider.style.backgroundImage = `url('${imagesURL[currentId]}')`; 
    }
    



})