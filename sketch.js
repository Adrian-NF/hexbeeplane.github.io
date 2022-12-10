
var ColorR = 0;
var ColorG = 0;
var ColorB = 0;

var Temporizador = 9;
var Millis = 0;


var Partes;

var Relation = 0;

class Particle {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(3, 4);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }

  createParticle() {

    noStroke();
    fill(0, 0, 255);
    circle(this.x, this.y, this.r);
  }

  moveParticle() {

    if (this.x <= 0 || this.x >= width) {

      this.xSpeed = this.xSpeed * -1;
    }

    if (this.y <= 0 || this.y >= height) {

      this.ySpeed = this.ySpeed * -1;
    }

    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  joinParticles(particles) {
    particles.forEach(element => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 60 + Relation * 8) {

        ColorR = map((this.x  + element.x) / 2, 0, width, 242, 244);

        ColorG = map((this.x  + element.x) / 2, 0, width, 242, 127);

        ColorB = map((this.x  + element.x) / 2, 0, width, 0, 1);


        stroke(ColorR, ColorG, ColorB);
        strokeWeight(2 + Relation);
        line(this.x, this.y, element.x, element.y);
      }
    }
    );
  }
}

// an array to add multiple particles
let particles = [];

let logo;

let Empezar;

var EmpezarFloat = 0;

var RepEmpezarFloat = 0;

var VecesJumpEmpezar = 1;

var VariableSetup1 = false;

var FadeEmpezar = 0;

var MousePressed = false;

var ProcesoInicio = false;

var VidInicio = false;

let vid;

function preload() {

  vid = createVideo("data/Inicio.mp4");
  vid.volume(0);
  vid.hide();
  vid.pause();
}

function setup() {

  EmpezarFloat = -HALF_PI;

  smooth();

  frameRate(60);

  logo = loadImage("data/FullHexbeeLogo.png");
  Empezar = loadImage("data/Empezar.png");

  createCanvas(windowWidth, windowHeight);

  Relation = (windowWidth * windowHeight) * 0.000005;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  } else {

    for (let i = 0; i < width * 0.07 + height * 0.10; i++) {
      particles.push(new Particle());
    }
  }
}

function draw() {

  cursor(ARROW);

  if (ProcesoInicio == false) {

    Relation = (windowWidth * windowHeight) * 0.000005;

    background(95, 94, 105);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {

      for (let i = 0; i<particles.length; i++) {
        // particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    }

    fill(95, 94, 105, 130);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

      if (Relation <= 1) {

        image(logo, width/2 - logo.width*0.04*Relation, height/2 - logo.height*0.04*Relation, logo.width*0.04*2*Relation, logo.height*0.04*2*Relation);
      } else {

        image(logo, width/2 - logo.width*0.04, height/2 - logo.height*0.04, logo.width*0.04*2, logo.height*0.04*2);
      }
    } else {

      image(logo, width/2 - logo.width*height*0.0001, height/2 - logo.height*height*0.0001, logo.width*height*2*0.0001, logo.height*height*2*0.0001);
    }

    if (millis() >= 1000 && millis() <= 2500) {

      if (EmpezarFloat < PI*0.790692) {

        EmpezarFloat = EmpezarFloat + PI/(frameRate()*0.8);
      }

      image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.95 - sin(EmpezarFloat)*height*0.16643 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
    } else if (millis() > 2500 && millis() < 2600) {

      if (VariableSetup1 == false) {

        EmpezarFloat = 0;

        VariableSetup1 = true;
      }

      image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.85 - sin(EmpezarFloat)*height*0.06 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
    } else if (millis() >= 2600) {

      if (FadeEmpezar < 3 && FadeEmpezar > 0) {

        FadeEmpezar = FadeEmpezar + PI/(frameRate()*2.1);

        image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
      }

      if (fullscreen()) {

        if (FadeEmpezar < 3) {

          FadeEmpezar = FadeEmpezar + PI/(frameRate()*2.1);
        } else {

          ProcesoInicio = true;
        }

        image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
      } else if (FadeEmpezar <= 0) {

        if (millis() >= 6000 * VecesJumpEmpezar) {

          if (RepEmpezarFloat < 3) {

            if (EmpezarFloat >= PI) {

              EmpezarFloat = 0;

              RepEmpezarFloat++;
            }

            if (EmpezarFloat < PI) {

              if (EmpezarFloat + PI/(frameRate()*0.8) > PI) {

                EmpezarFloat = PI;
              } else {

                EmpezarFloat = EmpezarFloat + PI/(frameRate()*0.8);
              }
            }
          }
        }

        if (millis() >= 6000 * (VecesJumpEmpezar + 1)) {

          VecesJumpEmpezar++;

          RepEmpezarFloat = 0;
        }

        image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.85 - sin(EmpezarFloat)*height*0.06 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
      }
    }

    if (millis() > 2000 && HitBoxPress(width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001, false) == true) {

      cursor(HAND);
    }

    fill(69, 68, 76, map(FadeEmpezar, 0, 2, 0, 255));
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
  } else {

    background(69, 68, 76);

    imageMode(CENTER);

    if (VidInicio == false) {

      vid.play();

      VidInicio = true;
    }

    let video = vid.get();

    image(video, width/2, height/2, width, video.height * (width / video.width));
    /////////////////////////// Main program Here: ///////////////////////////////////
  }

  MousePressed = false;
}

function mousePressed() {

  if (HitBoxPress(width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001, false) == true && millis() >= 2000) {

    fullscreen(true);

    screen.orientation.lock("portrait");
  }

  MousePressed = true;
}

function HitBoxPress(BoxX, BoxY, BoxXsize, BoxYsize, Center) {

  var Pressed = false;

  if (Center == false) {

    if (mouseX >= BoxX && mouseY >= BoxY && mouseX <= BoxX + BoxXsize && mouseY <= BoxY + BoxYsize) {
      Pressed = true;
    }
  } else {

    if (mouseX >= BoxX - BoxXsize / 2 && mouseY >= BoxY - BoxXsize / 2 && mouseX <= BoxX + BoxXsize / 2 && mouseY <= BoxY + BoxYsize / 2) {
      Pressed = true;
    }
  }

  return Pressed; // false ==> No over
  // true ==> Over
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  } else {

    particles.splice(0, width * 0.07 + height * 0.10 * 2);

    for (let i = 0; i < width * 0.07 + height * 0.10; i++) {
      particles.push(new Particle());
    }
  }
}
