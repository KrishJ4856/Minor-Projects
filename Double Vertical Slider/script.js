//selecting the leftItems and rightItems
const leftItems =  document.querySelectorAll(".leftItems");
const rightItems = document.querySelectorAll(".rightItems");

//selecting the buttons
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

//variables
var leftClick = 0;
var rightClick = 0;
var translateY;

//specifying the bg-color of the left elements as per their id value
leftItems.forEach((item) => {
    item.style.backgroundColor = item.id;
})

// Changing src of img of buttons on mouseover and mouseleave
upBtn.addEventListener('mouseover', () => {
    upBtn.children[0].src = './img/uparrow-filled.png'
})
upBtn.addEventListener('mouseleave', () => {
    upBtn.children[0].src = './img/uparrow-empty.png'
})
downBtn.addEventListener('mouseover', () => {
    downBtn.children[0].src = './img/downarrow-filled.png'
})
downBtn.addEventListener('mouseleave', () => {
    downBtn.children[0].src = './img/downarrow-empty.png'
})

//function to run on clicking the upBtn
upBtn.addEventListener('click', moveLeft);
upBtn.addEventListener('click', moveRight);

function moveLeft(){
    leftClick++;
    translateY = leftClick * 100;
    if(leftClick == 4){
        document.getElementsByClassName(`${leftClick}`)[0].style.transform = 'translateY(' + -translateY * 1 + '%)';
        document.getElementsByClassName("1")[0].style.transform = 'translateY(' + 0 * 1 + '%)';
        leftItems.forEach((item) => {
            item.style.transform = 'translateY(' + 0 * 1 + '%)';
        })
        leftClick = 0;
    }
    else{
        document.getElementsByClassName(`${leftClick}`)[0].style.transform = 'translateY(' + -translateY * 1 + '%)';
        document.getElementsByClassName(`${leftClick+1}`)[0].style.transform = 'translateY(' + -translateY * 1 + '%)';
    }
}

//function to run on clicking the downBtn
downBtn.addEventListener('click', moveRight);
downBtn.addEventListener('click', moveLeft);

function moveRight(){
    rightClick++;
    translateY = rightClick*100;
    if(rightClick == 4){
        document.getElementsByClassName(`${rightClick}`)[0].style.transform = 'translateY(' + translateY * 1 + '%)';
        document.getElementsByClassName("5")[0].style.transform = 'translateY(' + 0 * 1 + '%)';
        rightItems.forEach((item) => {
            item.style.transform = 'translateY(' + 0 * 1 + '%)';
        })
        rightClick = 0;
    }
    else{
        document.getElementsByClassName(`${rightClick + 4}`)[0].style.transform = 'translateY(' + translateY * 1 + '%)';
        document.getElementsByClassName(`${rightClick+1 + 4}`)[0].style.transform = 'translateY(' + -translateY * 1 + '%)';
    }
}