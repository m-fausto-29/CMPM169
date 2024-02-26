// sketch.js - Experiment 7: Data Visualization and Networks 
// Author: Monserrat Fausto
// Date: 2/22/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

let data;
let font;

function preload(){
  data = loadTable('games.csv', 'csv', 'header');
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
    
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);
  
  
  if(data){ // necessary for large data sets
    // Get amount of rows in csv
    let numRows = data.getRowCount();
    
    // Get specific column
    let game = data.getColumn(0);
    let metaScore = data.getColumn(1);
    let userScore = data.getColumn(2);
    
    for(let i = 0; i < numRows; i++){
        // Game 1
        push()
        fill(255,0,0);
        translate(-width / 3, -height / 3, 1);
        rotateY(millis() / 1000);
        sphere(metaScore[0]);
        pop()
        
        push()
        fill(0,255,0);
        translate(-width / 3, -height / 50, 0)
        rotateY(millis() / 1000);
        sphere(userScore[0]);
        pop()
        
        push()
        textFont(font);
        strokeWeight(3);
        textSize(30);
        fill(0,0,100);
        text("1. "+game[0], -width/2.5, height/3)
        pop()
        
        // Game 2
        push()
        fill(255,0,0);
        translate(-width / 6, -height / 3, 1);
        rotateY(millis() / 1000);
        sphere(metaScore[1]);
        pop()
        
        push()
        fill(0,255,0);
        translate(-width / 6, -height / 50, 0);
        rotateY(millis() / 1000);
        sphere(userScore[1]);
        pop()
        
        push()
        textFont(font);
        strokeWeight(3);
        textSize(17);
        fill(0,0,100);
        text("2. "+game[1], -width/4, height/3)
        pop()
        
        // Game 3
        push()
        fill(255,0,0);
        translate(width / 40, -height / 3, 1);
        rotateY(millis() / 1000);
        sphere(metaScore[2]);
        pop()
        
        push()
        fill(0,255,0);
        translate(width / 40, -height / 50, 0);
        rotateY(millis() / 1000);
        sphere(userScore[2]);
        pop()
        
        push()
        textFont(font);
        strokeWeight(3);
        textSize(14);
        fill(0,0,100);
        text("3. "+game[2], -width/17, height/3)
        pop()
        
        // Game 4
        push()
        fill(255,0,0);
        translate(width / 5, -height / 3, 1);
        rotateY(millis() / 1000);
        sphere(metaScore[3]);
        pop()
        
        push()
        fill(0,255,0);
        translate(width / 5, -height / 50, 0);
        rotateY(millis() / 1000);
        sphere(userScore[3]);
        pop()
        
        push()
        textFont(font);
        strokeWeight(3);
        textSize(17);
        fill(0,0,100);
        text("4. "+game[3], width/6.5, height/3)
        pop()
        
        // Game 5
        push()
        fill(255,0,0);
        translate(width / 2.7, -height / 3, 1);
        rotateY(millis() / 1000);
        sphere(metaScore[4]);
        pop()
        
        push()
        fill(0,255,0);
        translate(width / 2.7, -height / 50, 0);
        rotateY(millis() / 1000);
        sphere(userScore[4]);
        pop()
        
        push()
        textFont(font);
        strokeWeight(3);
        textSize(20);
        fill(0,0,100);
        text("5. "+game[4], width/3.2, height/3)
        pop()
     }
    }
  }
  