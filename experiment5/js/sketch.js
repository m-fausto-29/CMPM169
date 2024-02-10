// sketch.js - purpose and description here
// Author: Monserrat Fausto
// Date: 02/08/24

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Globals
let angle = 0;
let angleX = 0;
let angleY = 0;
let radiusX = 300; // Radius along x-axis
let radiusY = 200; // Radius along y-axis
let star;
let bg;
let grass;

function preload(){
    star = loadModel('assets/star.obj'); // preloading .obj file
    // preloading textures
    bg = loadImage('assets/green_hill_v1.jpg'); 
    grass = loadImage('assets/grass.jpg');
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
    // Background
    background(220);
    push();
    noStroke();
    translate(0,0,-1000);
    texture(bg);
    plane(width * 2.3, height * 2.3);
    pop();
    rectMode(CENTER);
    noStroke();
    
    // Initializing values for mouse control
    let dx = mouseX - width/2;
    let dy = mouseY - height/2;
    let v = createVector(dx,dy,0);
    
    // Calculate the position of the center sphere using spherical coordinates
    let centerX = radiusX * sin(angleY);
    let centerY = 0; // No variation along y-axis
    let centerZ = radiusY * cos(angleY); // Use y-radius for z-coordinate
    
    
    // Ring Shape
    push();
    ambientLight(255,215,0); // gold ambient light
    directionalLight(255,255,0,v); // directional light based on mouse control
    specularMaterial(100, 240, 0);// yellow fill
    rotateY(angle); // rotate along the y axis
    scale(0.5) // adjusting the scale
    torus(200, 45); // ring shaped figure
    pop();
    
    // Star Shape
    push();
    ambientLight(200,0,0); // lighter red ambient light
    directionalLight(210,0,0,v); // directional light based on mouse control
    specularMaterial(255, 0, 0);// red fill
    rotateX(55); // rotating its position to 55 radians
    rotateZ(angle); // rotate along the z axis
    //scale(15, 15, 15); // adjusting model size
    scale(5); // adjusting the scale
    model(star); // inserting star.obj file
    pop();
    
    // Revolving Sphere
    push();
    translate(centerX,centerY,centerZ)
    sphere(30);
    pop();
    
    //Ground
    push();
    //ambientLight(0, 255, 0);
    translate(0,215);
    rotateX(HALF_PI);
    //ambientMaterial(0, 255, 0);
    texture(grass);
    plane(width+200,650);
    pop();
    
    // Update the angles for rotation
    angle += 0.07 // angle speed
    angleX += 0.01;
    angleY += 0.01;
}
