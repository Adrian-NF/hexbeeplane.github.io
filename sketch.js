
var ColorR = 0;
var ColorG = 0;
var ColorB = 0;

var Temporizador = 9;
var Millis = 0;

var MargenSup = 316;
var MargenInf = 70;

var Partes;

var Relation = 0;

var ClickEmpezar = false;

var mousePressedAnt = false;

var FinalTerm = false;

var mouseYPressed = 0;

var translacion1 = 0;

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

var BootScreen = [];

var User;

var HEXBEEtext;

var Terminos1;

var Terminos2;

var Aceptar;

var EtapaLOGO = 0;

var ChargeLoop = 0;

var FrameN = 0;

var VezTexto = false;

var SpeedApearText = 0;

var SpeedApearText2 = 0;

var MoverArriva = 0;

var VexTexto2 = false;

var diference = 0;

var altura = 0;

var Desplazar = 0;

var PasadoText = false;

var AceptarTerminos = false;

function preload() {

  for (FrameN = 0; FrameN < 46; FrameN++) {

    if (FrameN < 10) {

      BootScreen[FrameN] = loadImage("data/FramesVideo1/Inicio_00" + FrameN + ".png");
    } else {

      BootScreen[FrameN] = loadImage("data/FramesVideo1/Inicio_0" + FrameN + ".png");
    }
  }

  for (FrameN = 1; FrameN <= 6; FrameN++) {

    BootScreen[FrameN + 50] = loadImage("data/Cargando/Cargando_" + FrameN + ".png");
  }

  for (FrameN = 0; FrameN <= 21; FrameN++) {

    if (FrameN < 10) {

      BootScreen[FrameN + 60] = loadImage("data/FramesVideo2/Final_00" + FrameN + ".png");
    } else {

      BootScreen[FrameN + 60] = loadImage("data/FramesVideo2/Final_0" + FrameN + ".png");
    }
  }

  FrameN = 0;
}

function setup() {

  EmpezarFloat = -HALF_PI;

  smooth();

  frameRate(60);

  logo = loadImage("data/FullHexbeeLogo.png");
  Empezar = loadImage("data/Empezar.png");

  createCanvas(windowWidth, windowHeight);

  //image(BootScreen[FrameN], width/2-BootScreen[FrameN].width/2, height/2-BootScreen[FrameN].height/2, BootScreen[FrameN].width/2*2, BootScreen[FrameN].height/2*2);

  Relation = (windowWidth * windowHeight) * 0.000005;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  } else {

    for (let i = 0; i < width * 0.07 + height * 0.10; i++) {
      particles.push(new Particle());
    }
  }
  
}

var SecondSetup = true;

let teapot;

let giro = 0;

var Aceleration = 1;

var Speed = 0;

var Dir = false;

var MouseRel3D = false;

var MouseX3D = 0;

var Set3D = false;

var GiroStop = 0;

function draw() {

  if (EtapaLOGO == 4) {

      createCanvas(windowWidth, windowHeight, WEBGL);

    /////////////////////////// Main program Here: ///////////////////////////////////

    if (SecondSetup == true) {

      teapot = loadModel('data/3DModels/FullModel.obj', true);

      describe('Vertically rotating 3-d teapot with rgb(255,255,255)rgb(255,226,0)een and rgb(250,0,74) gradient.');

      SecondSetup = false;
    }

    camera(0, 400, 200, 0, 0, 0, 0, 1, 0);

    if (mouseIsPressed == true) {

      if (Set3D == false) {

        MouseX3D = mouseX;

        GiroStop = giro;

        Set3D = true;
      }

      Aceleration = 0;

      Speed = 0;

      giro = GiroStop + (MouseX3D - mouseX)*0.01;

      if (pmouseX > mouseX) {

        Dir = true;
      } else if (pmouseX < mouseX) {

        Dir = false;
      } else {

        if (MouseRel3D == false) {

          if (Dir == true) {

            Dir = false
          } else {

            Dir = true;
          }

          MouseRel3D = true;
        }
      }
    } else {

      Set3D = false;

      MouseRel3D = false;

      if (Aceleration < 1) {

        Aceleration = Aceleration + 0.01*60/frameRate();
      }

      Speed = TWO_PI / 360*60/frameRate() * Aceleration;
    }

    if (Dir == true) {

      if (giro < TWO_PI) {

        giro = giro + Speed;
      } else {

        giro = 0;
      }
    } else {

      if (giro > -TWO_PI) {

        giro = giro - Speed;
      } else {

        giro = 0;
      }
    }
    background(200);

    if (width >= height * 0.8) {

      scale(1); // Scaled to make model fit into canvas
    } else {

      scale(width/height * 1.2); // Scaled to make model fit into canvas
    }
    rotateY(0);
    rotateX(0);
    rotateZ(HALF_PI + giro);
    normalMaterial(); // For effect
    model(teapot);
  } else {

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

        if (Empezar.width*height*2*0.00013 <= width) {

          image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.95 - sin(EmpezarFloat)*height*0.16643 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
        } else {

          image(Empezar, width/2 - Empezar.width*width*0.0002, height*0.95 - sin(EmpezarFloat)*height*0.16643 - Empezar.height*width*0.0002, Empezar.width*width*2*0.0002, Empezar.height*width*2*0.0002);
        }
      } else if (millis() > 2500 && millis() < 2600) {

        if (VariableSetup1 == false) {

          EmpezarFloat = 0;

          VariableSetup1 = true;
        }

        if (Empezar.width*height*2*0.00013 <= width) {

          image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(EmpezarFloat - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
        } else {

          image(Empezar, width/2 - Empezar.width*width*0.0002, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*width*0.0002, Empezar.width*width*2*0.0002, Empezar.height*width*2*0.0002);
        }
      } else if (millis() >= 2600) {

        if (FadeEmpezar < 3 && FadeEmpezar > 0) {

          FadeEmpezar = FadeEmpezar + PI/(frameRate()*2.1);
        }

        if (ClickEmpezar == true) {

          if (FadeEmpezar < 3) {

            FadeEmpezar = FadeEmpezar + PI/(frameRate()*2.1);
          } else {

            ProcesoInicio = true;
          }

          if (Empezar.width*height*2*0.00013 <= width) {

            image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
          } else {

            image(Empezar, width/2 - Empezar.width*width*0.0002, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*width*0.0002, Empezar.width*width*2*0.0002, Empezar.height*width*2*0.0002);
          }
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

          if (Empezar.width*height*2*0.00013 <= width) {

            image(Empezar, width/2 - Empezar.width*height*0.0001, height*0.85 - sin(EmpezarFloat)*height*0.06 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001);
          } else {

            image(Empezar, width/2 - Empezar.width*width*0.0002, height*0.85 - sin(EmpezarFloat)*height*0.06 - Empezar.height*width*0.0002, Empezar.width*width*2*0.0002, Empezar.height*width*2*0.0002);
          }
        }
      }

      if (millis() > 2000 && HitBoxPress(width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001, false) == true) {

        cursor(HAND);
      }

      fill(65, 63, 71, map(FadeEmpezar, 0, 2, 0, 255));
      noStroke();
      rect(0, 0, windowWidth, windowHeight);
    } else {

      if (EtapaLOGO == 0) {

        for (let i = 0; i < width * 0.07 + height * 0.10; i++) {
          particles.push(new Particle());
        }

        background(65, 63, 71);

        imageMode(CENTER);

        if (height * 16/9 <= width) {

          image(BootScreen[FrameN], width/2, height/2, height/BootScreen[FrameN].height * BootScreen[FrameN].width, height);
        } else {

          image(BootScreen[FrameN], width/2, height/2, width, width/BootScreen[FrameN].width * BootScreen[FrameN].height);
        }

        FrameN++;

        DELAY(60);

        if (FrameN > 45) {

          EtapaLOGO = 1;

          FrameN = 51;
        }
      } else if (EtapaLOGO == 1) {

        background(65, 63, 71);

        imageMode(CENTER);

        if (height * 16/9 <= width) {

          image(BootScreen[45], width/2, height/2, height/BootScreen[45].height * BootScreen[45].width, height);
        } else {

          image(BootScreen[45], width/2, height/2, width, width/BootScreen[45].width * BootScreen[45].height);
        }

        if (width >= height) {

          image(BootScreen[FrameN], width*0.85, height*0.11, height*0.2, height*0.2);
        } else {

          image(BootScreen[FrameN], width*0.85, height*0.11, width*0.2, width*0.2);
        }

        FrameN++;

        DELAY(140);

        if (FrameN > 56) {

          FrameN = 51;

          ChargeLoop++;

          if (ChargeLoop >= 5) {

            EtapaLOGO = 2;

            FrameN = 60;
          }
        }
      } else if (EtapaLOGO == 2) {

        background(65, 63, 71);

        if (height * 16/9 <= width) {

          image(BootScreen[FrameN], width/2, height/2, height/BootScreen[FrameN].height * BootScreen[FrameN].width, height);
        } else {

          image(BootScreen[FrameN], width/2, height/2, width, width/BootScreen[FrameN].width * BootScreen[FrameN].height);
        }

        FrameN++;

        DELAY(60);

        if (FrameN >= 81) {

          EtapaLOGO = 3;

          User = loadImage("data/USER-Terms/HexagonUser.png");

          HEXBEEtext = loadImage("data/USER-Terms/Hexbee_Logo_Text.png");

          Terminos1 = loadImage("data/USER-Terms/Terminos_1.png");

          Terminos2 = loadImage("data/USER-Terms/Terminos_2.png");

          Aceptar = loadImage("data/USER-Terms/Aceptar.png");
        }
      } else if (EtapaLOGO == 3) {

        rectMode(CENTER);

        if (VezTexto == false) {

          if (SpeedApearText < 255) {

            background(65, 63, 72);

            if (SpeedApearText >= 255) {
              SpeedApearText = 255;
            }

            tint(255, SpeedApearText);

            if (width >= height * 0.8) {

              image(HEXBEEtext, width/2, height/2, height/HEXBEEtext.height * HEXBEEtext.width * 0.05, height * 0.05);
            } else {

              image(HEXBEEtext, width/2, height/2, width * 0.38, width/HEXBEEtext.width * HEXBEEtext.height * 0.38);
            }
            SpeedApearText = SpeedApearText + 5;

            DELAY(5);
          } else {

            if (MoverArriva < PI) {

              noTint();

              background(65, 63, 72);

              if (width >= height * 0.8) {

                image(HEXBEEtext, width/2, height/2 - (height/5 * (1 + sin(MoverArriva - HALF_PI))), height/HEXBEEtext.height * HEXBEEtext.width * 0.05, height * 0.05);
              } else {

                image(HEXBEEtext, width/2, height/2 - (height/5 * (1 + sin(MoverArriva - HALF_PI))), width * 0.38, width/HEXBEEtext.width * HEXBEEtext.height * 0.38);
              }
              MoverArriva = MoverArriva + PI/(frameRate());
            } else {

              VezTexto = true;

              SpeedApearText = 0;
            }
          }
        } else {

          if (SpeedApearText < 255 && VexTexto2 == false) {

            fill(65, 63, 72);

            if (width >= height * 0.8) {

              rect(width/2, height*0.3, height/User.height * User.width * 0.3, height * 0.3);
            } else {

              rect(width/2, height*0.3, width * 0.41, width/User.width * User.height * 0.41);
            }
            if (SpeedApearText >= 255) {
              SpeedApearText = 255;
            }

            tint(255, SpeedApearText);

            if (width >= height) {

              image(User, width/2, height*0.3, height/User.height * User.width * 0.3, height * 0.3);
            } else {

              image(User, width/2, height*0.3, width * 0.41, width/User.width * User.height * 0.41);
            }
            SpeedApearText = SpeedApearText + 15 * 60/frameRate();
          } else {

            VexTexto2 = true;
          }

          if (VexTexto2 == true) {

            if (FinalTerm == true) {

              if (translacion1 <= height) {

                translacion1 = translacion1 * (1.1*60/frameRate());
              } else {

                DELAY(100);

                EtapaLOGO = 4;
              }
            }

            background(65, 63, 72);

            noTint();

            if (width >= height * 0.8) {

              image(User, width/2, height*0.3 - translacion1, height/User.height * User.width * 0.3, height * 0.3);

              image(HEXBEEtext, width/2, height/2 - (height/5 * (1 + sin(MoverArriva - HALF_PI))) - translacion1, height/HEXBEEtext.height * HEXBEEtext.width * 0.05, height * 0.05);
            } else {

              image(User, width/2, height*0.3 - translacion1, width * 0.41, width/User.width * User.height * 0.41);

              image(HEXBEEtext, width/2, height/2 - (height/5 * (1 + sin(MoverArriva - HALF_PI))) - translacion1, width * 0.38, width/HEXBEEtext.width * HEXBEEtext.height * 0.38);
            }

            push();

            imageMode(CORNER);

            if (SpeedApearText2 < 255) {

              if (SpeedApearText2 >= 255) {
                SpeedApearText2 = 255;
              }

              tint(255, SpeedApearText2);

              if (width >= height * 0.8) {

                image(Terminos1, width/2 - height/Terminos1.height * Terminos1.width * 3.5/2, height*0.66 - translacion1, height/Terminos1.height * Terminos1.width * 3.5, height * 3.5);

                image(Aceptar, width/2 - height/Aceptar.height * Aceptar.width * 0.2/2, height*0.45 - translacion1, height/Aceptar.height * Aceptar.width * 0.2, height * 0.2);
              } else {
                image(Terminos1, width/2 - width * 1.1/2, height*0.66 - translacion1, width * 1.1, width/Terminos1.width * Terminos1.height * 1.1);

                image(Aceptar, width/2 - width * 0.82/2, height*0.45, width * 0.82 - translacion1, width/Aceptar.width * Aceptar.height * 0.82);
              }

              SpeedApearText2 = SpeedApearText2 + 5*60/frameRate();
            } else {

              noTint();

              if (width >= height * 0.8) {

                image(Aceptar, width/2 - height/Aceptar.height * Aceptar.width * 0.2/2, height*0.45 - translacion1, height/Aceptar.height * Aceptar.width * 0.2, height * 0.2);
              } else {

                image(Aceptar, width/2 - width * 0.82/2, height*0.45 - translacion1, width * 0.82, width/Aceptar.width * Aceptar.height * 0.82);
              }
              if (MousePressed == true && mousePressedAnt == false && mouseX >= width/2 - height/Terminos1.height * Terminos1.width * 3/2 && mouseX <= width/2 - height/Terminos1.height * Terminos1.width * 3/2 + height/Terminos1.height * Terminos1.width * 3 && mouseY >= height*0.66  - map(altura, 0, 100, 0, height)) {

                mouseYPressed = altura  + mouseY;

                mousePressedAnt = true;
              }

              if (mouseX >= width/2 - height/Terminos1.height * Terminos1.width * 3/2 && mouseX <= width/2 - height/Terminos1.height * Terminos1.width * 3/2 + height/Terminos1.height * Terminos1.width * 3 && mouseY >= height*0.66  - map(altura, 0, 100, 0, height)) {

                cursor(HAND);
              } else {

                cursor(ARROW);
              }

              if (width >= height * 0.8) {

                MargenSup = height * 3.15;
                MargenInf = height * 0.66;
              } else {

                MargenSup = (width/Terminos1.width * Terminos1.height * 1.1) - height*0.34;
                MargenInf = height*0.66;
              }

              if (altura >= MargenSup) {

                if (mousePressed && mousePressedAnt == true && (mouseYPressed - mouseY) <= altura) {

                  altura = (mouseYPressed - mouseY);
                }
              } else if (altura <= MargenInf && PasadoText == true) {

                if (mousePressed && mousePressedAnt == true && (mouseYPressed - mouseY) >= altura) {

                  altura = (mouseYPressed - mouseY);
                }
              } else {

                if (PasadoText == true) {

                  if (mousePressed && mousePressedAnt == true) {

                    altura = (mouseYPressed - mouseY);
                  }
                } else {

                  if (mousePressed && mousePressedAnt == true && (mouseYPressed - mouseY) >= altura) {

                    altura = (mouseYPressed - mouseY);
                  }
                }

                if (altura >= MargenInf) {

                  PasadoText = true;
                }
              }

              if (altura >= MargenSup) {

                altura = MargenSup;
              }

              if (altura <= MargenInf && PasadoText == true) {

                altura = MargenInf;
              }

              if (AceptarTerminos == false) {

                if (width >= height * 0.8) {

                  image(Terminos1, width/2 - height/Terminos1.height * Terminos1.width * 3.5/2, height*0.66  - altura - translacion1, height/Terminos1.height * Terminos1.width * 3.5, height * 3.5);
                } else {

                  image(Terminos1, width/2 - width * 1.1/2, height*0.66  - altura - translacion1, width * 1.1, width/Terminos1.width * Terminos1.height * 1.1);
                }

                rectMode(CORNER);

                if (width >= height * 0.8) {

                  if (mouseX >= width/2 - height/Terminos1.height * Terminos1.width * 3.5 * 0.196 && mouseX <= width/2 - height/Terminos1.height * Terminos1.width * 3.5 * 0.196 + height/Terminos1.height * Terminos1.width * 3.5 * 0.093 && mouseY >= height*3.951 - altura && mouseY <= height*3.951 - altura + height/Terminos1.height * Terminos1.width * 3.5 * 0.093) {

                    cursor(ARROW);

                    if (MousePressed == true) {

                      AceptarTerminos = true;
                    }
                  }
                } else {

                  if (mouseX >= width*0.2855 && mouseX <= width*0.2855 + width/Terminos1.width * Terminos1.height * 1.1 * 0.023 && mouseY >= height*0.66 - altura + width/Terminos1.width * Terminos1.height * 1.0345 && mouseY <= height*0.66 - altura + width/Terminos1.width * Terminos1.height * 1.0345 + width/Terminos1.width * Terminos1.height * 1.1 * 0.023) {

                    cursor(ARROW);

                    if (MousePressed == true) {

                      AceptarTerminos = true;
                    }
                  }
                }
              } else {

                if (width >= height * 0.8) {

                  image(Terminos2, width/2 - height/Terminos1.height * Terminos1.width * 3.5/2, height*0.66  - altura - translacion1, height/Terminos1.height * Terminos1.width * 3.5, height * 3.5);
                } else {

                  image(Terminos2, width/2 - width * 1.1/2, height*0.66  - altura - translacion1, width * 1.1, width/Terminos1.width * Terminos1.height * 1.1);
                }

                if (FinalTerm == false) {

                  translacion1 = 2;

                  // DELAY(1500);

                  FinalTerm = true;
                }
              }
            }

            pop();
          }
        }
      }
    }
  }

  MousePressed = false;
}

function mousePressed() {

  if (HitBoxPress(width/2 - Empezar.width*height*0.0001, height*0.85 - height*0.425*sin(FadeEmpezar - HALF_PI) - height*0.425 - Empezar.height*height*0.0001, Empezar.width*height*2*0.0001, Empezar.height*height*2*0.0001, false) == true && millis() >= 2000) {

    fullscreen(true);

    ClickEmpezar = true;

    screen.orientation.lock("portrait");
  }

  MousePressed = true;
}

function mouseReleased() {

  mousePressedAnt = false;
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

  if (ProcesoInicio == false) {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {

      particles.splice(0, width * 0.07 + height * 0.10 * 2);

      for (let i = 0; i < width * 0.07 + height * 0.10; i++) {
        particles.push(new Particle());
      }
    }
  }
}

function DELAY(timeMS) {

  misllisStart = millis();

  while (millis() < misllisStart + timeMS) {
  }
}

function mouseWheel(event) {

  if (SpeedApearText2 >= 255) {

    if (PasadoText == false && altura <= altura + event.delta * height * 0.001) {
      //move the square according to the vertical scroll amount
      altura = altura + event.delta * height * 0.001;
      //uncomment to block page scrolling
      //return false;
    }

    if (PasadoText == true) {

      altura = altura + event.delta * height * 0.001;
    }
  }
}
