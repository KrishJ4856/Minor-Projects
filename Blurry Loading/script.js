const body = document.querySelector("body");
const imgSection = document.querySelector("#imgSection")
const loading = document.querySelector("#loading");


const myIntervalId = setInterval(blurLoad, 20);
var imageBlur = 10;
var loadingOpacity = 1;
function blurLoad(){
    const loadingText = loading.innerHTML;
    const percentIndex = loadingText.indexOf('%');
    loading.innerHTML = String((Number(loadingText.slice(0,percentIndex)) + 1) + "%");
    if(loading.innerHTML == "100%"){
        clearInterval(myIntervalId);
    }
    imageBlur = imageBlur - 0.1;
    imgSection.style.filter = `blur(${imageBlur}px)`;
    loadingOpacity = loadingOpacity - 0.01;
    loading.style.opacity = loadingOpacity;
}
