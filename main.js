/*
html >  preload="auto"
        preload="auto"
*/
// Cars
var hoverCars = document.getElementById('cars');
var trafficNoise = document.getElementById('trafficNoise');
trafficNoise.volume = 0.3;

hoverCars.onmouseover = function(){
    trafficNoise.play();
}
hoverCars.onmouseout = function(){
    trafficNoise.pause();
}

document.getElementById("leftSide").addEventListener("click", function(){
    var infoText = document.getElementById("carFact");
    infoText.classList.toggle('infoText');
});

var hoverCloudOne = document.getElementById('cOne');
var hoverCloudTwo = document.getElementById('cTwo');
var hoverCloudThree = document.getElementById('cThree');
var rain = document.getElementById('rain');
rain.volume = 0.3;

// Cloud one
hoverCloudOne.onmouseover = function(){
    rain.play();
}
hoverCloudOne.onmouseout = function(){
    rain.pause();
}
// Cloud two
hoverCloudTwo.onmouseover = function(){
    rain.play();
}
hoverCloudTwo.onmouseout = function(){
    rain.pause();
}
// Cloud three
hoverCloudThree.onmouseover = function(){
    rain.play();
}
hoverCloudThree.onmouseout = function(){
    rain.pause();
}

// animal sounds
// Pigs
var hoverPigsFirst = document.getElementById('pigsFirst');
var hoverPigsLast = document.getElementById('pigsLast');
var pigSound = document.getElementById('pigSound');
pigSound.volume = 0.3;

// First gruop
hoverPigsFirst.onmouseover = function(){
    pigSound.play();
}
hoverPigsFirst.onmouseout = function(){
    pigSound.pause();
}
// Last gruop
hoverPigsLast.onmouseover = function(){
    pigSound.play();
}
hoverPigsLast.onmouseout = function(){
    pigSound.pause();
}

// Sheeps
var hoverSheepsFirst = document.getElementById('sheepsFirst');
var hoverSheepsLast = document.getElementById('sheepsLast');
var sheepSound = document.getElementById('sheepSound');
sheepSound.volume = 0.3;

// First gruop
hoverSheepsFirst.onmouseover = function(){
    sheepSound.play();
}
hoverSheepsFirst.onmouseout = function(){
    sheepSound.pause();
}
// Last gruop
hoverSheepsLast.onmouseover = function(){
    sheepSound.play();
}
hoverSheepsLast.onmouseout = function(){
    sheepSound.pause();
}

// Birds
var hoverTreeFirst = document.getElementById('treeFirst');
var hoverTreeSecond = document.getElementById('treeSecond');
var hoverTreeLast = document.getElementById('treeLast');
var birdSound = document.getElementById('birdSound');
birdSound.volume = 0.3;

// First tree
hoverTreeFirst.onmouseover = function(){
    birdSound.play();
}
hoverTreeFirst.onmouseout = function(){
    birdSound.pause();
}
// Second tree
hoverTreeSecond.onmouseover = function(){
    birdSound.play();
}
hoverTreeSecond.onmouseout = function(){
    birdSound.pause();
}
// Last tree
hoverTreeLast.onmouseover = function(){
    birdSound.play();
}
hoverTreeLast.onmouseout = function(){
    birdSound.pause();
}