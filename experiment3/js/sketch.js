// Experiment3.js - Generative Methods
// Author: Monserrat Fausto
// Date: 1/25/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js
//Global Variables
let cloudPos = -100;
let button;
// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    //createCanvas(w = min(windowWidth, windowHeight), w);
  
    // Background
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color(255), color(0,58,255), inter);
        stroke(c);
        line(0, y, width,y); 
    }
    
    // Create a button and place it on the upper left hand corner
    button = createButton('Click Me!');
    button.position(700, 1000);
    
    
    // Use the button to change the background color.
    button.mousePressed(() => {
        let c1 = color(random(100), random(150), random(255));
        let c2 = color(random(150,200), random(200,220), random(255));
        for (let y = 0; y < height; y++) {
            let inter2 = map(y, 0, height, 0, 1);
            let c = lerpColor(c1, c2, inter2);
            stroke(c); 
            line(0, y, width,y);
        }
    });
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  
    stroke('rgba(0,169,0,0.25)');
    
    // Mountains 
     for (var x = 0; x < width; x += 2.3) {
       beginShape();
      for (var y = height; y > height-noise(x * 0.01)*800; y--) {
        vertex(x,y);
      }
       vertex(x, height);
       endShape(CLOSE);
    }
    
    // Ground
    for (let i = height*3/4; i < height; i++) {
      let inter1 = map(i,height*3/4 ,height ,0 ,1);
      let c = lerpColor(color(0,100,0), color(163, 121, 100), inter1);
      noStroke();
      fill(c); 
       rect(0,i,width,height /8);
    }
    
    // Clouds
    makeCloud(cloudPos, 100);
    cloudPos++;
    if(cloudPos > width){
      cloudPos = -100;
    }
    
  }
  function makeCloud(x, y) {
      noStroke();
      fill(color(255));
      
      ellipse(x-35,y- 80/4,40,50)
      ellipse(x+80/2,y-80/4,55,60) 
      ellipse(x+80*3/8,y-80*3/8,50,50) 
      ellipse(x+80*5/8,y-80*9/16,45,60)
      ellipse(x+80-10,y-15,50,35)
      ellipse(x+80-20,y,20,20)
  }