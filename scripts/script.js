const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll('.progress-step');
const progressBar = document.querySelector('.progress-bar');
const icons = document.querySelectorAll('.fas');

let currentItem = 0;
next.addEventListener('click',() => {
    currentItem++;
    if(currentItem > circles.length - 1){
        currentItem = circles.length - 1;
    } 

    update();
})

prev.addEventListener('click',() => {
    currentItem++;
    if(currentItem < 0){
        currentItem = 0;
    } 

    update();
})

function update() {
    
}