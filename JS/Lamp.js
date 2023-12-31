let clickCount = 0;
let lampBroken = false;

document.querySelector('.lamp-image').addEventListener('click', function(){
    handleLampClick();
})

document.querySelector('.btn-turn-on').addEventListener('click', function(){
    if(!lampBroken)
        turnOnLamp();
})

document.querySelector('.btn-turn-off').addEventListener('click', function(){
    if(!lampBroken)
        turnOffLamp();
})

function getImageLamp(){
    return document.querySelector('.lamp-image');
}

function handleLampClick(){
    clickCount++;
    if (clickCount == 2)
        breakLamp();
}

function breakLamp(){
    getImageLamp().src = "img/quebrada.jpg";
    clickCount = 0;
    lampBroken = true;
}

function turnOnLamp(){
    getImageLamp().src = "img/ligada.jpg";
}

function turnOffLamp(){
    getImageLamp().src = "img/desligada.jpg";
}