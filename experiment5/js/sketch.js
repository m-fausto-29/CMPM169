// sketch.js - purpose and description here
// Author: Monserrat Fausto
// Date: 02/08/24

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Globals
let angle = 0;
let star;

function preload(){
    star = loadModel('assets/star.obj'); // preloading .obj file
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);
    rectMode(CENTER);
    noStroke();
    
    // Initializing values for smoother mouse control
    let dx = mouseX - width/2;
    let dy = mouseY - height/2;
    let v = createVector(dx,dy,0);
    
    
    // Ring Shape
    push();
    ambientLight(255,215,0); // gold ambient light
    directionalLight(255,255,0,v); // directional light based on mouse control
    specularMaterial(100, 240, 0);// yellow fill
    rotateY(angle); // rotate along the y axis
    torus(200, 45); // ring shaped figure
    pop();
    
    // Star Shape
    push();
    ambientLight(200,0,0); // lighter red ambient light
    directionalLight(210,0,0,v); // directional light based on mouse control
    specularMaterial(255, 0, 0);// red fill
    rotateX(55); // rotating its position to 55 radians
    rotateZ(angle); // rotate along the z axis
    scale(15, 15, 15); // adjusting model size
    model(star); // inserting star.obj file
    pop();
    
    angle += 0.07 // angle speed
}
