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
let cam;
let particles = [];

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
    // Camera
    cam = createCapture(VIDEO);
    cam.hide()
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    // Background
    background(144, 238, 144);
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
    
    //Ring Fill
    push();
    normalMaterial();
    rotateY(angle+30);
    ellipsoid(70, 80, 80, 2, 8);
    pop();
    
    // Star Shape
    push();
    ambientLight(200,0,0); // lighter red ambient light
    directionalLight(210,0,0,v); // directional light based on mouse control
    specularMaterial(255, 0, 0);// red fill
    rotateX(55); // rotating its position to 55 radians
    rotateZ(angle); // rotate along the z axis
    scale(5); // adjusting the scale
    model(star); // inserting star.obj file
    pop();
    
    // Revolving Plane
    push();
    translate(centerX,centerY,centerZ)
    texture(cam); // using webcam as texture
    plane(50);
    // Particles
    let p = new Particle();
    particles.push(p);
    
    for(let i = particles.length-1; i >= 0; i--){
        if(!particles[i].edges()){ // if not outside canvas, appear otherwise remove
        particles[i].update();
        particles[i].show();
        }
        else{
        particles.splice(i,1);
        }
    }
    pop();
    
    //Ground
    push();
    translate(0,215);
    rotateX(HALF_PI);
    texture(grass);
    plane(width+200,650);
    pop();
    
    // Update the angles for rotation
    angle += 0.07 // angle speed
    angleX += 0.01;
    angleY += 0.01;
}
// Particle Class
class Particle{
    constructor(){
      this.pos = p5.Vector.random2D().mult(30); // position
      this.vel = createVector(0,0); //velocity
      this.acc = this.pos.copy().mult(random(0.01, 0.001)); //acceleration
      this.w = random(3, 5); //width
      this.color = [random(128,128), random(238,144), random(230,255)] // randomly generated color
    }
    update(){ // updates the velocity and position of particles
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
    edges(){ // if they reach outside the canvas, indicate when to remove the particles
      if(this.pos.x < -width/2 || this.pos.x > width/2 || this.pos.y < -height/2 || this.pos.y > height/2){
        return true;
      }
      else{
        return false;
      }
    }
    show(){ // appearance of the particles
      noStroke();
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, this.w)
    }
  }
  
