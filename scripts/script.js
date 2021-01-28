const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll('.progress-step');
console.log(circles)
const progressBar = document.querySelector('.progress-bar');
const icons = document.querySelectorAll('.fas');
console.log(icons)

let currentItem = 0;
next.addEventListener('click',() => {
    currentItem++;
    if(currentItem > circles.length){
        currentItem = circles.length;
    } 
    update();
})

prev.addEventListener('click',() => {
    currentItem--;
    if(currentItem < 0){
        currentItem = 0;
    } 
    update();
})

function update() {
    circles.forEach((circle,idx) => {
        if(idx < currentItem) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active");
        }
    })

    icons.forEach((icon,idx) => {
        if(idx < currentItem) {
            icon.classList.add('active-icon');
        } else {
            icon.classList.remove('active-icon');
        }
    })
    const actives = document.querySelectorAll('.active');
    progressBar.style.width = (actives.length - 1)/ (circles.length - 1) * 100 + "%";

    if(currentItem === 0) {
        prev.disabled = true;
    }
    else if(currentItem === circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}