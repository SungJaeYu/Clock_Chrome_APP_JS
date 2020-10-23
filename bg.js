const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const img = new Image();
    img.src = `img/${imgNumber}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
    img.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER)+1;
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();