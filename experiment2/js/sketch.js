// sketch.js - Experiment 2: Vector Art, Animation, and Interactivity
// Author: Monserrat Fausto
// Date: 1/22/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js


let particles = [];
// setup() function is called once when the program starts
function setup() {
    //place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    //Background
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(0,0,255), color(0,0,0), inter);
    stroke(c);
    line(0, y, width,y); 
   }
    
}

function draw() {
    // Ground
   for (let i = height*3/4; i < height; i++) {
     let inter1 = map(i,height*3/4 ,height ,0 ,1);
     let c = lerpColor(color(0,0,100), color(64, 224, 228), inter1);
     noStroke();
     fill(c); 
      rect(0,i,width,height /8);
    }
   
   // Campfire Glow
   fill(255, 165, 0);
   ellipse(350,355,70,30);
   
   // Draw particle
   let p = new Particle();
   particles.push(p);
   for(let i = particles.length - 1; i >= 0; i--){
     particles[i].update();
     particles[i].show();
     if(particles[i].alpha < 0){
       particles.splice(i,1);
     }
   }
   
   // Log
   // Move the origin to the center of the canvas
   translate(width / 2, height / 2);
 
   //Rotate by PI/4 radians (45 degrees)
   rotate(PI / 4);
 
   // Draw a rectangle
   stroke(0);
   fill(165, 42, 42);
   rect(155,-5,70,30);
   
 }
 
 class Particle{
   constructor() {
     this.x = 200;
     this.y = 360;
     this.vx = random(-1, 1);
     this.vy = random(-5, -1);
     this.alpha = 255;
   }
   
   update(){
     this.x += this.vx;
     this.y += this.vy;
     this.alpha -=30;
   }
 
   show() {
     noStroke();
     fill(255, 140, this.alpha);
     ellipse(this.x, this.y, 16);
   }
 }
 //Click the mouse to make flowers appear and change their color
 function mouseClicked(){
   for (var i=0; i<1; i++){
     let x =-70;
     let y = 30;
     stroke(random(255), random(255), random(255));
     noFill();
    
     ellipse(x-35,y+10,40,50) // Petal 1
     ellipse(x-80,y+10,55,60) //Petal 2
     ellipse(x-80,y-30,50,50) //Petal 3
     ellipse(x-47,y-45,45,60) //Petal 4
     ellipse(x-20,y-17,50,35) //Petal 5
     ellipse(x-50,y-12,20,20) //Middle petal
    
        
     stroke(random(255), random(255), random(255));
     let fx2=120;    
     let fy2=-100;
     ellipse(fx2-35,fy2+10,40,50) // Petal 1
     ellipse(fx2-80,fy2+10,55,60) //Petal 2
     ellipse(fx2-80,fy2-30,50,50) //Petal 3
     ellipse(fx2-47,fy2-45,45,60) //Petal 4
     ellipse(fx2-20,fy2-17,50,35) //Petal 5
     ellipse(fx2-50,fy2-12,20,20) //Middle petal  
  
    }
 }