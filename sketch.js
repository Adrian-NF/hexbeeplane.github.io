
var ColorR = 0;
var ColorG = 0;
var ColorB = 0;

var Temporizador = 9;
var Millis = 0;


var Partes;

class Particle {

  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(3,4);
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-1,1);
    
  }

  createParticle() {
    
    noStroke();
    fill(0, 0, 255);
    circle(this.x,this.y,this.r);
    
  }

  moveParticle() {
    
    if(this.x <= 0 || this.x >= width) {
      
      this.xSpeed = this.xSpeed * -1;
      
    }
    
    if(this.y <= 0 || this.y >= height) {
      
      this.ySpeed = this.ySpeed * -1;
      
    }
    
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
      
  }

  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis < 80) {
          

          
        ColorR = map((this.x  + element.x) / 2, 0, width, 242, 244);

        ColorG = map((this.x  + element.x) / 2, 0, width, 242, 127);
          
        ColorB = map((this.x  + element.x) / 2, 0, width, 0, 1);

        
        stroke(ColorR, ColorG, ColorB);
        strokeWeight(4);
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

let logo;

function preload() {
  
}

function setup() {
  
  logo = loadImage('Full Hexbee logo.png');
  
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0;i<width/6;i++){
    particles.push(new Particle());
  }
  
}

function draw() {
  
  background(95, 94, 105);
  
  for(let i = 0;i<particles.length;i++) {
   // particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
  
  fill(95, 94, 105, 130);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);
  
  image(logo, width/2 - logo.width*0.08, height/2 - logo.width*0.08, logo.width*0.08*2, logo.height*0.08*2);
  
}

function mousePressed() {
    fullscreen(true); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
