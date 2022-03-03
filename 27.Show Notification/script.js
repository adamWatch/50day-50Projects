const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

const colors = ['red', 'green', 'orange', 'purple'];
const messages = ['One', 'Two', 'Three', 'Four','Five','Six'];

function getRandom(list){

   return list[Math.floor(Math.random() * list.length)]        

}

btn.addEventListener('click', ()=>{

    const spanEl = document.createElement('span');

    spanEl.classList.add(`${getRandom(colors)}`)
    spanEl.innerText = `Messages ${getRandom(messages)}`

    container.appendChild(spanEl);

    setTimeout(()=>{
        const spans = document.querySelectorAll('span');
        spans[spans.length-1].remove();
    }, 2000)

})