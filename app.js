let luckyCat;
function preload(){
    var url = 'Maneki_Neko.OBJ'
    luckyCat = loadModel(url);
}
function setup() {
    var vw = windowWidth;
    var vh = windowHeight;
	var myCanvas = createCanvas(vw, vh, WEBGL);
    const newLocal = 'p5Container';
    myCanvas.parent(newLocal);
}

function windowResized(){
	resizeCanvas(vw, vh);
}

function draw() {
    background(0);

    push();
    normalMaterial();
    camera(0, 10, -110, 0, -50,0,0,50,0);
    rotateX(280);
    rotateY(frameCount * 0.02);
    model(luckyCat);
    pop();
}
