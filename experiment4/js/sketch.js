// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

let cdPlayer;
let cd;
let song;
let button;
let fft;
let amp;
let angle = 0;
let particles = [];

function preload(){ //function necessary to preload the images
  cdPlayer = loadImage("img/cd_player.png");
  cd = loadImage("img/sony-cd-r.png");
  song = loadSound('sound/newjeans_omg.mp3');
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

    // Creating the play/pause button
  button = createButton('play');
  button.position((width/2)-25, 1340);
  button.mousePressed(togglePlaying);
  
  // Initializing amplitude, frequency analysis, and angle mode
  amp = new p5.Amplitude();
  fft = new p5.FFT();
  song.amp(0.5);
  angleMode(DEGREES);
}

function draw() {
  // Background
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(255,192,203), color(135, 206, 235), inter);
    stroke(c);
    line(0, y, width,y); 
   }
  
  // Amplitude Circles
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.3, 10, 200);

  fill(135, 206, 235);
  noStroke();
  ellipse(100,100, diam, diam);
  ellipse(1300,100, diam, diam);
  fill(255,192,203);
  noStroke();
  ellipse(100,500, diam, diam);
  ellipse(1300,500, diam, diam);
  
  // Setting up positioning of cd player image
  imageMode(CENTER);
  image(cdPlayer, width/2, height/2, 250, 250);
  
  // Translating the position of the cd
  translate(width/2, height/2);

   // Increase angle of rotation by one (animation)
  angle += 1;
  rotate(angle);

  // Adjusting the position of cd image
  imageMode(CENTER);
  image(cd, 0, 0, 150, 150);
  
  //Radial Audio Visualizer
  stroke(255);
  noFill();
  
  //translate(width/2, height/2);
  
  let wave = fft.waveform();

  for(let t = -1; t <= 1; t += 2){
    beginShape()
    for(let i = 0; i <= 180; i++){
      let index = floor(map(i, 0, 180, 0, wave.length-1));
      let r = map(wave[index], -1, 1, 150, 350);
      let x = r * sin(i)*t;
      let y = r * cos(i);
      vertex(x,y);
      //stroke(random(240,255));
    }
    endShape()
  }
  let p = new Particle();
  particles.push(p);
  
  for(let i = particles.length-1; i >= 0; i--){
    if(!particles[i].edges()){
      particles[i].update();
      particles[i].show();
    }
    else{
      particles.splice(i,1);
    }
  }
}

// function that toggle the play/pause button for sound
function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html('pause');
  } else {
    song.pause();
    button.html('play');
  }
}

class Particle{
  constructor(){
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0,0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));
    this.w = random(3, 5);
    this.color = [random(200, 255), random(200, 255), random(200, 255)]
  }
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  edges(){
    if(this.pos.x < -width/2 || this.pos.x > width/2 || this.pos.y < -height/2 || this.pos.y > height/2){
      return true;
    }
    else{
      return false;
    }
  }
  show(){
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.w)
  }
}
