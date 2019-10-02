var hw=50;
var waves = [];
var counterx = 0;
var countery = 0;
var iterator = 0;


function Creating(){
  // this.x = 100 + noise(iterator/100)* mouseX+100;
  // this.y = 100 + noise(iterator/70) * mouseY+100;

  this.x = noise(iterator/100+mouseX/5000)*width
  // = map(noise(iterator/100)*width, 0, 1, 0, 1000);
  this.y = iterator
  if (this.y>=height-iterator/2) {
    iterator=0;
  }
  this.shape = function() {
    stroke("black")
    //noStroke()
    //line(this.x,this.y,iterator,iterator/40)
    arc(this.x,this.y,iterator,iterator, 0, PI)

    //ellipse(this.x, this.y, frameCount)

    console.log(iterator)
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60)
  colorMode(HSB)
  ellipseMode(CORNER)

  stroke(0)
  fill(random()*100, random()*300, random()*100)
  strokeWeight(5)



  var margin = {
    x:(windowWidth-(Math.floor(windowWidth/hw)*hw))/2,
    y:(windowHeight-(Math.floor(windowHeight/hw)*hw))/2
    }

    for (var y = margin.y; y < windowHeight-(margin.y*2) ; y+=hw) {
      for (var x = margin.x; x < windowWidth-(margin.x*2) ; x+=hw) {
        rect(x, y, hw, hw)
      }
    }






}





function draw() {




  var noisone = 60 + noise(frameCount/90) * 250


  stroke(0)
  fill(noisone, 100, 100)
  strokeWeight(0 + noise(frameCount/10) * 10)


//VALORI PER MARGINI E VARIABILI PER PALLINE
  var xnumber = Math.floor(width/hw)*hw
  var ynumber = Math.floor(height/hw)*hw

  var margin = {
    x:(width-xnumber)/2,
    y:(height-ynumber)/2
  }

  var xindex = hw * counterx;
  var yindex = hw * countery;

  if (countery==ynumber/hw) {
    countery=0;
    counterx=0;
  }


//X E Y DELLE PALLINE O DELL'OGGETTO DI CREATING()
    if (mouseIsPressed) {
      var x = 100 + noise(frameCount/100)* mouseX+100;
      var y = 100 + noise(frameCount/70) * mouseY+100;
    } else {
      var x = margin.x + xindex
      var y = margin.y + yindex
    }


//DIREZIONE DELLE PALLINE
    if (frameCount % 3 == 0) {
      if (countery % 2 == 0) {
      counterx++
      } else if (countery % 2 != 0) {
      counterx--
        }
    }

    if (frameCount % 3 == 0) {
      if (counterx == xnumber/hw) {
        counterx--
        countery++
      } else if (counterx + 1==0 && countery!=0) {
        counterx++
        countery++
        }
    }





//CREAZIONE DELL'OGGETTO O DELLE PALLINE
    if (mouseIsPressed) {
      iterator++
      for (var i = 0; i < 10; i++) {
        waves.push(new Creating());
      }

      for (var i = 0; i < waves.length; i++) {
        waves[i].shape();
        waves.splice(0)
      }
    } else {
      ellipse(x, y, hw)
    }

    textSize(width/50);
    textAlign(CENTER, BOTTOM)
    noStroke();
    fill("white");
    text('Refresh to change color, click to create a path', width/2, height-30);

//console.log(waves.length)

}
