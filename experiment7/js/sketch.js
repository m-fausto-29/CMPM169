// sketch.js - Experiment 7: Data Visualization and Networks 
// Author: Monserrat Fausto
// Date: 2/22/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

let data;
let font;
let metascore1;
let metascore2;
let metascore3;
let metascore4;
let metascore5;
let userscore1;
let userscore2;
let userscore3;
let userscore4;
let userscore5;

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
    // Meta Score Graphics
    metascore1 = createGraphics(200, 200);
    metascore1.textSize(75);
    metascore2 = createGraphics(200, 200);
    metascore2.textSize(75);
    metascore3 = createGraphics(200, 200);
    metascore3.textSize(75);
    metascore4 = createGraphics(200, 200);
    metascore4.textSize(75);
    metascore5 = createGraphics(200, 200);
    metascore5.textSize(75);
    
    // User Score Graphics
    userscore1 = createGraphics(200, 200);
    userscore1.textSize(75);
    userscore2 = createGraphics(200, 200);
    userscore2.textSize(75);
    userscore3 = createGraphics(200, 200);
    userscore3.textSize(75);
    userscore4 = createGraphics(200, 200);
    userscore4.textSize(75);
    userscore5 = createGraphics(200, 200);
    userscore5.textSize(75);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);
    // Red Background
    push();
    noStroke();
    fill(255,0,0);
    translate(0,-200);
    plane(width, height/3);
    pop();
    
    // Green Background
    push();
    noStroke();
    fill(0,255,0);
    plane(width, height/3);
    pop();
    
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
        rotateX(5.6);
        rotateY(millis() / 1000);
        metascore1.text('95', 0, 100);
        //pass image as texture
        texture(metascore1);
        sphere(metaScore[0]);
        pop()
        
        push()
        fill(0,255,0);
        translate(-width / 3, -height / 50, 0)
        rotateX(5.6);
        rotateY(millis() / 1000);
        userscore1.text('90', 0, 100);
        //pass image as texture
        texture(userscore1);
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
        rotateX(5.6);
        rotateY(millis() / 1000);
        metascore2.text('94', 0, 100);
        //pass image as texture
        texture(metascore2);
        sphere(metaScore[1]);
        pop()
        
        push()
        fill(0,255,0);
        translate(-width / 6, -height / 50, 0);
        rotateX(5.6);
        rotateY(millis() / 1000);
        userscore2.text('82', 0, 100);
        //pass image as texture
        texture(userscore2);
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
        rotateX(5.6);
        rotateY(millis() / 1000);
        metascore3.text('94', 0, 100);
        //pass image as texture
        texture(metascore3);
        sphere(metaScore[2]);
        pop()
        
        push()
        fill(0,255,0);
        translate(width / 40, -height / 50, 0);
        rotateX(5.6);
        rotateY(millis() / 1000);
        userscore3.text('90', 0, 100);
        //pass image as texture
        texture(userscore3);
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
        rotateX(5.6);
        rotateY(millis() / 1000);
        metascore4.text('91', 0, 100);
        //pass image as texture
        texture(metascore4);
        sphere(metaScore[3]);
        pop()
        
        push()
        fill(0,255,0);
        translate(width / 5, -height / 50, 0);
        rotateX(5.6);
        rotateY(millis() / 1000);
        userscore4.text('87', 0, 100);
        //pass image as texture
        texture(userscore4);
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
        rotateX(5.6);
        rotateY(millis() / 1000);
        metascore5.text('90', 0, 100);
        //pass image as texture
        texture(metascore5);
        sphere(metaScore[4]);
        pop()
        
        push()
        fill(0,255,0);
        translate(width / 2.7, -height / 50, 0);
        rotateX(5.6);
        rotateY(millis() / 1000);
        userscore5.text('84', 0, 100);
        //pass image as texture
        texture(userscore5);
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
  