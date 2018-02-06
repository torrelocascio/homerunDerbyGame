//On Load of Window, start the game and show everyting
var baseball= {
  originX:480,
  originY:220,
  x:480,
  y:200,
  source: "baseball.png",
  width:30,
  height:30,
  vy:20,
  vx:0
  
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
  source:"source",
  height: 1200,
  width: 1200
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

window.onload = function() {

 

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image()
  drawObjects();
  draw(bat)
  
  
  // Viewable Variables

  

 


  var outsLeft=10
  var homeRuns=0

  //Functions Defined, Start Game
  function drawObjects(){
    draw(batterView);
    draw(baseball);
    draw(batter);
    draw(pitcher);
    // draw(bat);
    // pitcherMeter(40,40);
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
  if (randomNumber===0){return 15} else if (randomNumber===1){return 5} else {return 15}
  }

  //This Function Will Generate RandomPitchPosition (Either Left Middle or Right on Plate),
  // This will ultimately generate the final x axis position of the ball when on the plate

  function generateRandomPitchPosition(){
    randomNumber=Math.floor(Math.random()*3);
    if (randomNumber===0){return 0} else if (randomNumber===1){return 3} else {return -2}
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

  //Pitcher Meter to Help Hitter with Timing
  // function pitcherMeter(x,y,width,height){
  // ctx.beginPath();
  //                 ctx.fillStyle="#ffffff";
  //                 ctx.fillRect(0,0,900,500);
                  
  //                 ctx.fillStyle="#839402";
  //                 ctx.fillRect(0,0,width,height);

  //                 if (width < 300 && height < 300)
  //                 {
  //                     width += 9;
  //                     height += 5;
  //                 }
  //                 else
  //                 {
  //                     width = 0;
  //                     height = 0;
  //                 }
  //                 setTimeout(function() {pitcherMeter(width, height)}, 20);
  // }
  var pitchPosition=generateRandomPitchPosition()
  var pitchVelocity=generateRandomPitchVelocity()
  function pitchBall() {
    ctx.save();
    drawObjects();
    draw(baseball);
    draw(bat)
    baseball.x = baseball.x + pitchPosition;
    baseball.y =baseball.y + pitchVelocity;
    window.requestAnimationFrame(pitchBall)
    
  }
  setTimeout(500,window.requestAnimationFrame(pitchBall))
  // document.body.onkeydown = function(e){
  //   if(e.keyCode == 80){
  
        //your code
//     }
// }
function clearCanvas(){
  ctx.clearRect(0,0,1500,1500)
}

  // Bat Rotating As Swing
  
  function swingBat(bat){
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    var img = new Image();

    var ang = 0; //angle
    var fps =  1000/25; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
        // canvas.width = this.width << 1; //double the canvas width
        // canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
        setInterval(function () {
            ctx.save(); //saves the state of canvas
            // ctx.clearRect(bat.x,bat.y, bat.width, bat.height); //clear the canvas
            ctx.translate(bat.x+30, bat.y+90); //let's translate
            ctx.rotate(Math.PI / 180 * (ang = ang-15)); //increment the angle and rotate the image 
            ctx.drawImage(img, -bat.width/100, -bat.height, bat.width*1.1, bat.height ); //draw the image ;)
            ctx.restore(); //restore the state of canvas
        }, fps);
    };

    img.src = bat.source; //img

}

document.body.onkeydown = function(e){
    if(e.keyCode == 90){setInterval(swingBat(bat), 100);
        //your code
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
