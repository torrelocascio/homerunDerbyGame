//On Load of Window, start the game and show everyting
var pitchMeter= {
  x:600,
  y:500,
  width:50,
  height:150,
  vx:0,
  vy:1,
  colorBorder: "red",
  borderWidth: 5,
}

var pitchMeterJuice= {
  x:600,
  y:500,
  width:50,
  height:20,
  vx:0,
  vy:2,
}

var baseball= {
  originX:480,
  originY:220,
  x:480,
  y:200,
  source: "baseball.png",
  width:30,
  height:30,
  vy:15,
  vx:0,
  left: this.x,
  right: this.x + this.width,
  top: this.y,
  bottom: this.y + (this.height)

  
}


var batterView = {
  x:0,
  y:0,
  source:"baseballbatterview.jpg",
  height: 600,
  width: 1000
  }  

  var fieldView={
  x:0,
  y:0,
  source:"baseballdiamondoverhead.jpg",
  height: 600,
  width: 1000
  }

  var pitcher = {
    name: "Pitcher",
    originX:540,
    originY:200,
    x: 540,
    y: 200,
    source: "baseball-pitcher.jpg",
    width: 80,
    height: 80

  }

  var bat = {
    originX:250,
    originY:340,
    x:250,
    y:340,
    source: "Baseball-Bat-PNG-File.png",
    width:230,
    height:100,
    moveRight: function() { this.x = this.x + 50 },
    moveLeft:  function() { this.x = this.x - 50 },
    left: this.x,
    right: this.x + this.width,
    top: this.y,
    bottom: this.y + (this.height)
   
  }

  var batter = {
    name:"Batter",
    x:220,
    y:400,
    source: "baseball-batter.jpg",
    width: 150,
    height:150,
    moveRight: function() { this.x = this.x + 50 },
    moveLeft:  function() { this.x = this.x - 50 },
    
  }

  var ang;

window.onload = function() {

 
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  drawObjects();
  draw(bat)
  var img = new Image()
 






function createPitcherMeter(){ 
  ctx.beginPath();
  ctx.lineWidth="6";
  ctx.strokeStyle="red";
  ctx.rect(300,200,50,200); 
  ctx.stroke();
}



function fillPitcherMeter(xx, yy, w, h){
  ctx.beginPath();
                createPitcherMeter()
                if(h<pitchMeter.height)
                h=h+pitchMeter.vy;
                  ctx.fillStyle="#839402";
                  ctx.fillRect(xx,yy,w,h);

                  window.requestAnimationFrame(fillPitcherMeter)
                  }
                  
  
  

  
  
  // Viewable Variables

  

 


  var outsLeft=10
  var homeRuns=0

  //Functions Defined, Start Game
  function drawObjects(){
    draw(batterView);
    draw(baseball);
    draw(batter);
    draw(pitcher);
    createPitcherMeter()
    // draw(bat);
    // musicOn();
  }

  //Generates Random Velocity in Pixels Per Iteration - 3 options
  


  // document.onkeydown = function(e) {
  //   if (e.keyCode == 80) {
  //     pitchBall();}
  //   }
  // updateBaseball()

  //   function updateBaseball(){
  //     draw(baseball)
  //   }
  
  
  function generateRandomPitchVelocity(){
    randomNumber=Math.floor(Math.random()*3)
  if (randomNumber===0){return 4} else if (randomNumber===1){return 4} else {return 4}
  }

  //This Function Will Generate RandomPitchPosition (Either Left Middle or Right on Plate),
  // This will ultimately generate the final x axis position of the ball when on the plate

  function generateRandomPitchPosition(){
    randomNumber=Math.floor(Math.random()*3);
    if (randomNumber===0) {return 0} else if (randomNumber===1){return 1} else {return -1}
  }

//Draw Any Image Object with parameters below
  function draw(thing){
    var img = new Image();
      img.onload = function() 
    { 
      //   ctx.drawImage(img,thing.x,thing.y,thing.width,thing.width); 
      // }

      // img.src= thing.source
      ctx.drawImage(img,thing.x,thing.y,thing.width,thing.height); 
    }

    img.src=thing.source;
    
  }


  // function musicOn(){

  // }



  var pitchPosition=generateRandomPitchPosition()
  var pitchVelocity=generateRandomPitchVelocity()
  function pitchBall() {

    // pitchMeterGo()
    if (baseball.y <=batterView.height){
    drawObjects()
    ctx.save();
    // window.requestAnimationFrame(fillPitcherMeter)
    ;
    draw(baseball);
    draw(bat)
 
    baseball.x = baseball.x + pitchPosition;
    baseball.y =baseball.y + pitchVelocity;
    window.requestAnimationFrame(pitchBall)
    
    }
    
    else {baseball.x=baseball.originX, baseball.y=baseball.originY,clearCanvas;drawObjects;draw(baseball)
     ;setTimeout(pitchBall,1200)}
  }
  setTimeout(pitchBall,1200);
  // document.onkeydown = function(e) {
  //   switch (e.keyCode) {
  //     case 80:
 
    //     break;
    // }
  // document.body.onkeydown = function(e){
  //   if(e.keyCode == 80){ window.requestAnimationFrame(pitchBall)
  
  //   }

function clearCanvas(){
  ctx.clearRect(0,0,1500,1500)
}

  // Bat Rotating As Swing
  
  function swingBat(bat){
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    var img = new Image();

    ang = 0; //angle
    var fps =  1000/25; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
        // canvas.width = this.width << 1; //double the canvas width
        // canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
        var handle = setInterval(function () {
          // ctx.clearRect(bat.x,bat.y, bat.width-100, bat.height-100);
            ctx.save(); //saves the state of canvas
            draw(bat)
            var batX = bat.x+30;
            var batY = bat.y+90;
            ctx.translate(batX, batY); //let's translate
            ctx.rotate(Math.PI / 180 * (ang = ang-20)); //increment the angle and rotate the image 
            var newBatX = -bat.width/100;
            var newBatY = -bat.height;
            var newBat = ctx.drawImage(img, newBatX, newBatY, bat.width*1.1, bat.height ); //draw the image ;)
            ctx.restore(); //restore the state of canvas
            console.log(ang);
            console.log("newBatX: " + newBatX);
            // this shit don't work
            // bat.x = newBatX;
            // bat.y = newBatY;
            console.log("bat.x" + bat.x);
            console.log("batX: " + batX)
            console.log(newBat.dx)
            function crashWith(){
              if (newBatX < baseball.x + baseball.width  && newBatX + bat.width  > baseball.x &&
                newBatY < baseball.y + baseball.height && newBatY + bat.height > baseball.y) {
            return true}
                }
            if (crashWith()===true){clearInterval(handle); clearCanvas(); } else if (ang <= -340) {
              console.log("TEST");
              clearInterval(handle);
              // handle = 0;
            } 
        }, fps); // ends setInterval()
    }; 

    img.src = bat.source; //img ; ends img.onload
  } // end swingBat()
 
  

document.body.onkeydown = function(e){
    if(e.keyCode == 90) {
      setInterval(swingBat(bat), 100);
    }
}



  // Bat Rotating on Key Stroke

  
  //Batter Moving Left Or Right

  // function updateBatter() {
  //   ctx.clearRect(0,0,1500,1700);
  //   draw(batter)
  // }


  document.onkeydown = function(e) {
    if (e.keyCode == 37 && batter.x>170) {
      bat.moveLeft(); batter.moveLeft() }
    else if (e.keyCode== 39 && batter.x<270){
      bat.moveRight(); batter.moveRight();}
      
    }
    // updateBat()
    


  

  
    // if(batter.x>190){
    //   document.onkeydown = function(e) {
    //     if (e.keyCode == 37 && batter.x>190) {
    //       bat.moveLeft()}
    //     else if (e.keyCode== 39 && batter.x<250){
    //       bat.moveRight()}
    //     }
    //     updateBat()
    
    
    //     } 

    function updateBat(){
      clearCanvas(); 
      draw(bat);
      draw(batter)
    }
}

