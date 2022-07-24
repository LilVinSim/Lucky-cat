
let luckyCat;
function preload(){
    luckyCat = loadModel('https://folio-2022.s3.ap-southeast-2.amazonaws.com/Maneki_Neko.OBJ')
}
function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    const newLocal = 'p5Container';
    myCanvas.parent(newLocal);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    //translate(-240, -100, 0);
    normalMaterial();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    model(luckyCat);
}