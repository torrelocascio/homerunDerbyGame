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
    source: "baseball-pitcher.png",
    width: 120,
    height: 120

  }

  var pitcher2 = {
    name: "Pitcher",
    originX:540,
    originY:200,
    x: 540,
    y: 200,
    source: "pitchermidmotion2.jpeg",
    width: 120,
    height: 120
  }

  var pitcher3 = {
    name: "Pitcher",
    originX:540,
    originY:200,
    x: 540,
    y: 200,
    source: "pitcherfollowthrough.png",
    width: 120,
    height: 120
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
    source: "baseball-batter.png",
    width: 200,
    height:200,
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
  var strikeSound = new Audio("strikesound.m4a")

window.onload = function() {

 
  themeSong.play();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  draw(batterView);
  drawObjects();
  draw(bat);
  draw(batter)



  var img = new Image()
 





  function crashWith(){
  if ((bat.x < baseball.x + baseball.width  && bat.x + bat.width+600  > baseball.x &&
    ang<=-200 && ang>-339 &&baseball.y>250 && baseball.y<500)
    ||
    (	bat.x < baseball.x + baseball.width  && bat.x + bat.width+600  > baseball.x &&
      ang<=-342 && ang>-354 &&baseball.y>250 && baseball.y<500))
    
    {
return true}
    }

function homerunCrashWith(){
  if (bat.x+220 < baseball.x + baseball.width  && bat.x + bat.width+30  > baseball.x &&
		ang<=-339 && ang>=-342 &&baseball.y>340+50 && baseball.y<340+123){
return true}
}






// function createPitcherMeter(){ 
//   ctx.beginPath();
//   ctx.lineWidth="6";
//   ctx.strokeStyle="red";
//   ctx.rect(300,200,50,200); 
//   ctx.stroke();
// }



// function fillPitcherMeter(xx, yy, w, h){
//   ctx.beginPath();
//                 createPitcherMeter()
//                 if(h<pitchMeter.height)
//                 h=h+pitchMeter.vy;
//                   ctx.fillStyle="#839402";
//                   ctx.fillRect(xx,yy,w,h);

//                   window.requestAnimationFrame(fillPitcherMeter)
//                   }
                  
  
  


// function drawBlueLines(){
//   ctx.lineWidth="6";
//   ctx.strokeStyle="blue"
//   ctx.beginPath(); 
//   ctx.moveTo(0,600);
//   context.lineTo(,600);
//   // Make the line visible
//   context.stroke();
// }

function drawWhiteBox(){
  ctx.lineWidth="6";
  ctx.strokeStyle="white"
ctx.strokeRect(750,150,220,130);
}

 function updateOutsNumber(){
  ctx.font = "24px Arial";
  ctx.fillStyle = "crimson";
ctx.fillText(sessionStorage.getItem("outsLeft"),895,200)
 }

 function updateOutsText(){
  ctx.font = "24px Arial";
  ctx.fillStyle = "crimson";
  ctx.fillText("Outs Left: ", 780,200)
 } 
 function updateHomeruns(){
  ctx.font = "24px Arial";
  ctx.fillStyle = "dodgerblue";
ctx.fillText(sessionStorage.getItem("homerunCount"), 895,250)
 }
 function updateHomerunsText(){
  ctx.font = "24px Arial";
  ctx.fillStyle = "dodgerblue";
ctx.fillText("Homeruns: ", 780,250)

 }



 function gameOver(){
  clearInterval(handle); //clears bat loop
  window.cancelAnimationFrame(pitchAnimationCall); //clears pitch loop
  ctx.font = "68px Arial";
  ctx.fillStyle = "white";
ctx.fillText("GAMEOVER!!!!!!!",250,150)
ctx.font = "40px Arial";
ctx.fillStyle = "black";
ctx.fillText("You hit " + sessionStorage.getItem("homerunCount") + " Homeruns in 9 Outs.",180,350)
ctx.fillText("Please close window and reopen to play a new game.",10,430)
 }
  

  function trackOuts() {
    if (sessionStorage.outsLeft) {
      return sessionStorage.outsLeft = Number(sessionStorage.outsLeft) - 1;
  } else {
      sessionStorage.outsLeft = 8;
  }return Number(sessionStorage.outsLeft) }

  function trackHomeruns(){
    if (sessionStorage.homerunCount) {
     sessionStorage.homerunCount = Number(sessionStorage.homerunCount) + 1;
  } else { 
      sessionStorage.homerunCount = 0;}
    }
  // }return Number(sessionStorage.homerunCount) 
  // }
  

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
    // draw(batterView);
    draw(baseball);
    draw(batter);
    draw(pitcher);
    drawWhiteBox()
    // createPitcherMeter()
    // draw(bat);
    // musicOn();
    updateHomeruns();updateHomerunsText();updateOutsNumber();updateOutsText()
  }

  function drawOverviewCanvas(){
    // clearCanvas()
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

    // updateOuts()
    if (baseball.y <=batterView.height){  draw(batterView)
    drawObjects()
    draw(pitcher3)
      
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
  // setTimeout(draw(pitcher2),1000)
  setTimeout(pitchBall,2000);
  

function resetPitcher(){strikeSound.play()
  baseball.x=baseball.originX, baseball.y=baseball.originY,clearCanvas;drawObjects();drawObjects;draw(baseball),
 trackOuts();
 if (sessionStorage.outsLeft<=0){gameOver();updateHomeruns();updateHomerunsText();updateOutsNumber();updateOutsText()}
  else if (sessionStorage.outsLeft>0){setTimeout(pitchBall,2000)}
    console.log(sessionStorage.outsLeft);
    turnBatOn();

     
}
     

var homerunAnimationCall
  function homerunAnimation(){
    if (homerunBall.pseudoy>70){
      console.log("animationcalled")
      drawOverviewCanvas();
    ctx.save();
    draw(homerunBall)
    
    homerunBall.y =homerunBall.y-2;
    homerunBall.x = homerunBall.x+pitchPosition
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
    drawOverviewCanvas();
    ctx.font = "68px Arial";
    ctx.fillStyle = "white";
  ctx.fillText("HOMERUN!!!!!!",250,150)
    ctx.save()
    draw(homerunBall);
    homerunBall.y = homerunBall.y-1.5;
    homerunBall.x=homerunBall.x+.5+pitchPosition
    homerunBall.pseudoy = homerunBall.pseudoy -2
    // console.log(homerunBall.y);
    homerunBall.width = homerunBall.width - .8;
    homerunBall.height = homerunBall.height-.8;
    homerunAnimationCallDown = window.requestAnimationFrame(homerunAnimationDown);
    homerunAnimationCallDown
  }
  else {window.cancelAnimationFrame(homerunAnimationCallDown);
    setTimeout(document.location.reload(),2000); }
}
var popUpAnimataionCall
  function popUpAnimation(){
    if (homerunBall.pseudoy>70){
      console.log("")
      drawOverviewCanvas();
    ctx.save();
    draw(homerunBall)
    
    homerunBall.y =homerunBall.y-1;
    homerunBall.x = homerunBall.x+pitchPosition
    homerunBall.pseudoy=homerunBall.pseudoy-1;
    // console.log(homerunBall.y)
    // console.log(homerunBall.pseudoy)
    homerunBall.width = homerunBall.width + .5;
    homerunBall.height = homerunBall.height + .5;
    popUpAnimationCall= window.requestAnimationFrame(popUpAnimation)
    popUpAnimationCall} 
    else if (homerunBall.pseudoy<=70) {window.cancelAnimationFrame(popUpAnimationCall);popUpAnimationDown()};
  }

var popUpAnimataionCallDown
function popUpAnimationDown(){if(homerunBall.width>10){
  drawOverviewCanvas();
  ctx.font = "68px Arial";
    ctx.fillStyle = "red";
  ctx.fillText("You're OUT!!!",250,150)
  ctx.save()
  draw(homerunBall);
  homerunBall.y = homerunBall.y+2;
  homerunBall.x=homerunBall.x+.1+pitchPosition*.5
  homerunBall.pseudoy = homerunBall.pseudoy -2
  // console.log(homerunBall.y);
  homerunBall.width = homerunBall.width - 1.0;
  homerunBall.height = homerunBall.height-1.0;
  popUpAnimataionCallDown = window.requestAnimationFrame(popUpAnimationDown);
  popUpAnimataionCallDown
}
else {window.cancelAnimationFrame(popUpAnimataionCallDown);
  setTimeout(document.location.reload(),2000); }
}

//clear Canvas Function
function clearCanvas(){
  ctx.clearRect(0,0,1500,1500)
}

  // Bat Rotating As Swing
  var handle
  var batEnabled=true
  function turnBatOn(){
    batEnabled=true
  }
  function turnBatOff(){
    batEnabled=false
  }
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
        handle = setInterval(function () {
          // ctx.clearRect(bat.x,bat.y, bat.width-100, bat.height-100);
            ctx.save(); //saves the state of canvas
            // draw(bat)
            ctx.translate(bat.x+30, bat.y+90); //let's translate
            ctx.rotate(Math.PI / 180 * (ang = ang-20)); //increment the angle and rotate the image 
            // var newBatX = -bat.width/100;
            var newBat = ctx.drawImage(img, -bat.width/100, -bat.height, bat.width*1.1, bat.height ); //draw the image ;)
            ctx.restore(); //restore the state of canvas
            // console.log(ang);//testing ang on bat swing
            turnBatOff()
          
            // if bat crashes with ball, generate new screen, if not, start pitch animation over
            
            if (homerunCrashWith()===true){
              window.cancelAnimationFrame(pitchAnimationCall)
              setTimeout(function(){clearInterval(handle)},50)
              homerunAnimation();
              batCrack.play()
              trackHomeruns()
            } 
            else if (crashWith()===true && homerunCrashWith()===false)
            {
              console.log("Is this working?")
            setTimeout(function(){clearInterval(handle)},50); //clears bat loop
            window.cancelAnimationFrame(pitchAnimationCall);  //clears pitch loop
            batCrack.play(); //play bat crack
            // setTimeout(function(){drawOverviewCanvas() }, 50); //draws homerun canvas
            setTimeout(function(){clearCanvas()},200)
            setTimeout(function(){popUpAnimation()} , 200) 
            homerunTravelSound.play();
            
            // trackHomeruns();
      
           
            
    }
             
          //starts homerunBall Loop
            else if (ang <= -355 & crashWith()===false && homerunCrashWith()===false) {
              swingMiss.play();
              clearInterval(handle); //plays bat miss sound, clears bat loop if crash was not detected
              // handle = 0;
            } 
        }, fps); // ends setInterval()
    }; 

    img.src = bat.source; //img ; ends img.onload
  } // end swingBat()
 
  
{
document.body.onkeydown = function(e){
    if(e.keyCode == 90 && batEnabled==true) {
      
      drawObjects()
      setInterval(swingBat(bat), 500);
      
      console.log(batEnabled)
      
    }
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
 drawObjects()
}

