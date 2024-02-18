// sketch.js - Experiment 6: Grammars and Text Art 
// Author: Monserrat Fausto
// Date: 2/17/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

let str = "The heart may be weak and sometimes it might even give in, but I've learned that deep down there's a light that never goes out";
let str1 = "A scattered dream is like a far off memory, a far off memory is like a scattered dream...";
let str_arr = [];

let font;

function preload() {
  font = loadFont("Inconsolata.otf");
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
    let strs = str.split(" ");
    for (let i = 0; i < strs.length*20; i++) {
        let x = random(-(width * 2), width * 2);
        let y = random(-(height * 2), height * 2);
        let z = random(-width*5, width*2);
        str_arr.push(new Type(strs[i%strs.length], x, y, z));
    }
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(0);
    // Background Plane
    push();
    ambientLight(155,155,200);
    pointLight(135, 206, 235, width-1500, height/2, 350);
    specularMaterial(250);
    shininess(1); 
    noStroke();
    plane(width*100, 250);
    pop();
    
    // Plane
    push();
    ambientLight(135, 206, 235);
    pointLight(135, 206, 235, width-1500, height/2, 330);
    specularMaterial(250);
    shininess(1); 
    noStroke();
    plane(width*100, 200);
    pop();
    
    orbitControl();
    let count = str_arr.length;
    for (let i = 0; i < str_arr.length; i++) {
      str_arr[i].update();
      str_arr[i].display();
          count -= 1;
    }
    push()
    // Centered Main Text
    if(count == 0){
      textAlign(CENTER);
      textFont(font);
      strokeWeight(3);
      textSize(128);
      textNeon(color(135, 206, 235));
      strokeWeight(3);
      textSize(127);
      fill(random(128,128), random(238,144), random(230,255))
      text(str1, width-1500, height/1.5);
    }
    pop()
  }
  function textNeon(glowColor){ // Neon Text Effect
    glow(glowColor, 400);
    text(str1, width-1500, height/1.5);
    text(str1, width-1500, height/1.5);
    glow(glowColor, 80);
    text(str1, width-1500, height/1.5);
    text(str1, width-1500, height/1.5);
    glow(glowColor, 12);
    text(str1, width-1500, height/1.5);
    text(str1, width-1500, height/1.5);
  }
  
  function glow(glowColor, blurriness){
    drawingContext.shadowBlur = blurriness;
    drawingContext.shadowColor = glowColor;
  }
  
  class Type {
    constructor(_str, _x, _y, _z) {
      this.str = _str;
      this.x = _x;
      this.y = _y;
      this.z = _z;
    }
  
    update() {
          this.z -= 10;
      if(this.z > width/2){
          this.z = width/2;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y, this.z);
      textAlign(CENTER, CENTER);
      textFont(font);
      textSize(100);
      fill(random(100,255), random(100,255), random(100,255))
      text(this.str, 0, 0);
      pop();
    }
  }