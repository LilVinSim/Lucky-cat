
let luckyCat;
function preload(){
    var url = 'dist/Maneki_Neko.OBJ'
    luckyCat = loadModel(url)
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
    normalMaterial();
    camera(0, 0, -180 );
    rotateX(280);
    rotateY(frameCount * 0.01);
    model(luckyCat);
}
