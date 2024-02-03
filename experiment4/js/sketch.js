// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

let cdPlayer;
let cd;

// Angle of rotation: the parameter that we'll animate!
let angle = 0;
function preload(){ //function necessary to preload the images
  // cdPlayer = createImg('./img/cd_player.png', 'adding a cd player') 
  // cd = createImg('./img/sony-cd-r.png', 'adding a cd')
  cdPlayer = loadImage("./img/cd_player.png");
  cd = loadImage("./img/sony-cd-r.png");
}

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

    angleMode(DEGREES);
  
    // Background
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(color(255,192,203), color(135, 206, 235), inter);
      stroke(c);
      line(0, y, width,y); 
     }
}

function draw() {
  //background(220);
  imageMode(CENTER);
  image(cdPlayer, width/2, height/2, 250, 250);
  // We'll be drawing a square in the center of our sketch that rotates around itself
  push();
  translate(width/2, height/2);

  // The angle of rotation is what we're animating (ie changing over time) so first we'll increase its value and then rotate to that angle
  angle += 1;
  rotate(angle);

  // Try changing the amount we add to the angle and see how the animation changes! (Hint: we can think of this as 'speed')
  imageMode(CENTER);
  image(cd, 0, 0, 150, 150);
}