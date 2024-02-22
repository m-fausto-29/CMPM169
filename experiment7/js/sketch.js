// sketch.js - Experiment 7: Data Visualization and Networks 
// Author: Monserrat Fausto
// Date: 2/22/2024

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
    
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    
  }
  