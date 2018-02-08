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
var homerunBall= {
  originX:490,
  originY:440,
  x:490,
  y:440,
  pseudox:490,
  pseudoy:440,
  source: "baseball.png",
  width:10,
  height:10,
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
  source:"baseballdiamondoverhead.jpeg",
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
    originX:220,
    originY:400
    
  }

  var ang;

  var batCrack = new Audio("homerunsound.mp3")
  var themeSong = new Audio("kengriffeythemesong.mp3"); // buffers automatically when created
themeSong.play();
  var swingMiss = new Audio("swingmiss.mp3")
  var homerunTravelSound = new Audio("homerunballtravelsound.mp3")

window.onload = function() {

 
  themeSong.play();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  drawObjects();
  draw(bat)
  var img = new Image()
 
  function crashWith(){
  if (bat.x+220 < baseball.x + baseball.width  && bat.x + bat.width+30  > baseball.x &&
		ang<=-315 && ang>-346 &&baseball.y>340+20 && baseball.y<340+150){
return true}




}
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
  var homeruns=0

  function trackOuts() {
    // outsLeft=outsLeft-1
    sessionStorage.setItem("outsLeft", outsLeft);
    
   return Number(sessionStorage.getItem("outsLeft")) = Number(sessionStorage.getItem("outsLeft")) -1
    
    
  }
  
  

  function returnObjectsOrigin(){
    bat.x = bat.originX
    bat.y = bat.originY
    batter.x = bat.originX
    batter.y = bat.originY
    baseball.x = baseball.originX
    baseball.y = baseball.originY
    homerunBall.x = homerunBall.originX;
    homerunBall.y = homerunBall.originY;
  }
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

  function drawOverviewCanvas(){
    clearCanvas()
    draw(fieldView)
    draw(homerunBall)
    
  }
  //Generates Random Velocity in Pixels Per Iteration - 3 options
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


//All Pitcher Animations
  var pitchAnimationCall
  var pitchPosition=generateRandomPitchPosition()
  var pitchVelocity=generateRandomPitchVelocity()
  function pitchBall() {

    if (baseball.y <=batterView.height){
    drawObjects()
    ctx.save();
    // window.requestAnimationFrame(fillPitcherMeter)
    ;
    draw(baseball);
    draw(bat)
 
    baseball.x = baseball.x + pitchPosition;
    baseball.y =baseball.y + pitchVelocity;
    // baseball.width = baseball.width+.1;
    // baseball.height=baseball.height+.1 (makes ball bigger, will mess with collission)
    pitchAnimationCall= window.requestAnimationFrame(pitchBall)
    pitchAnimationCall
    
    }
    
    else {resetPitcher()}
  }
  setTimeout(pitchBall,2000);

function resetPitcher(){baseball.x=baseball.originX, baseball.y=baseball.originY,clearCanvas;drawObjects;draw(baseball)
     ;setTimeout(pitchBall,2000);trackOuts() ;
     console.log(trackOuts())}

var homerunAnimationCall
  function homerunAnimation(){
    if (homerunBall.pseudoy>70){
    ctx.save()
    draw(homerunBall);
    homerunBall.y =homerunBall.y-2;
    homerunBall.pseudoy=homerunBall.pseudoy-2;
    // console.log(homerunBall.y)
    // console.log(homerunBall.pseudoy)
    homerunBall.width = homerunBall.width + 1;
    homerunBall.height = homerunBall.height + 1;
    homerunAnimationCall= window.requestAnimationFrame(homerunAnimation)
    homerunAnimationCall} 
    else if (homerunBall.pseudoy<=70) {window.cancelAnimationFrame(homerunAnimationCall);homerunAnimationDown()};
  }

  var homerunAnimationCallDown
  function homerunAnimationDown(){if(homerunBall.width>10){
    ctx.save()
    draw(homerunBall);
    homerunBall.y = homerunBall.y-.1;
    homerunBall.x=homerunBall.x+1.5
    homerunBall.pseudoy = homerunBall.pseudoy -2
    // console.log(homerunBall.y);
    homerunBall.width = homerunBall.width - 1;
    homerunBall.height = homerunBall.height-1;
    homerunAnimationCallDown = window.requestAnimationFrame(homerunAnimationDown);
    homerunAnimationCallDown
  }
  else {window.cancelAnimationFrame(homerunAnimationCallDown);
    setTimeout(document.location.reload(),2000); }
}

//clear Canvas Function
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
            // draw(bat)
            ctx.translate(bat.x+30, bat.y+90); //let's translate
            ctx.rotate(Math.PI / 180 * (ang = ang-15)); //increment the angle and rotate the image 
            // var newBatX = -bat.width/100;
            var newBat = ctx.drawImage(img, -bat.width/100, -bat.height, bat.width*1.1, bat.height ); //draw the image ;)
            ctx.restore(); //restore the state of canvas
            // console.log(ang);//testing ang on bat swing
          
            // if bat crashes with ball, generate new screen, if not, start pitch animation over
            if (crashWith()===true)
            {setTimeout(function(){clearInterval(handle)},50); //clears bat loop
            window.cancelAnimationFrame(pitchAnimationCall);  //clears pitch loop
            batCrack.play(); //play bat crack
            setTimeout(function(){drawOverviewCanvas() }, 50); //draws homerun canvas
            setTimeout(function(){homerunAnimation()} , 50) 
            homerunTravelSound.play()
    }
             
          //starts homerunBall Loop
            else if (ang <= -355) {
           swingMiss.play();clearInterval(handle);//plays bat miss sound, clears bat loop if crash was not detected
              // handle = 0;
            } 
        }, fps); // ends setInterval()
    }; 

    img.src = bat.source; //img ; ends img.onload
  } // end swingBat()
 
  

document.body.onkeydown = function(e){
    if(e.keyCode == 90) {
      clearCanvas();
      drawObjects()
      setInterval(swingBat(bat), 500);
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

