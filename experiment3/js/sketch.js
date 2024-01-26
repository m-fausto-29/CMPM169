// Experiment3.js - Generative Methods
// Author: Monserrat Fausto
// Date: 1/25/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

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
    w = min(windowWidth, windowHeight)
    background(t = 0, 6, 60);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    n = noise;
    r = w / 2; 
    a = n(t + 9) * r; 
    b = n(w) * r; 
    c = n(t) * 6;
    d = n(t++ + 60) * 6;
    stroke(w, 30);
    //line(r, a, cos(c) * a + r , sin(c) * b+r);
    for(var x = r; x < windowWidth; x+=70){
        line(x, a, cos(c) * a + x , sin(c) * b+x); 
    }
}