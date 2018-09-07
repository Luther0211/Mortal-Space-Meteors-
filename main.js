//Canvas config
var canvas = document.getElementsByTagName('canvas')[0];
ctx = canvas.getContext('2d');



//Variables globales
var meteors = []
var images  = {
    bg: "https://i.imgur.com/k0bwZ5C.jpg",
    planet1:"https://i.imgur.com/XC0l2s5.png",
    planet2:"https://i.imgur.com/7CE0aiK.png",
    planet3:"https://i.imgur.com/usrB8Sj.png",
    P1: "https://i.imgur.com/lDNOf2n.png",
    P2: "https://i.imgur.com/doHy8wW.png",
    meteor1:"https://img9.androidappsapk.co/300/1/4/7/com.Oriol.Casa.png"
}
var frames
 var startBTN = document.getElementById('start');
 var instructionsBTN = document.getElementById('instructions');
 var Logo = document.getElementById('logo');
 var instructionsMenu = document.getElementById('instructionsSection');
 var Instructions = document.getElementById('instrucciones')

//clases

class Board{
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.image = document.createElement('img')
        this.image.src = images.bg
        this.image.onload = () => {
            this.draw()
        }
        this.music = new Audio()
        this.music.src = "https://ericskiff.com/music/Resistor%20Anthems/05%20Come%20and%20Find%20Me.mp3"
    }
draw(){
  //velocidad del fondo
this.y+=0.4
if(this.y > this.height ) this.y = 0
  //primer fondo
ctx.drawImage(this.image,this.x,this.y,this.width,this.height)    
  //segundo fondo
 ctx.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)      

}

} // clase Board

class Planet1{
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.image = document.createElement('img')
        this.image.src = images.planet1
        this.image.onload = () => {
            this.draw()
        }
    }
draw(){
  //velocidad del fondo
this.y+=0.8
if(this.y > this.height ) this.y = 0
  //primer fondo
ctx.drawImage(this.image,this.x,this.y,this.width,this.height)    
  //segundo fondo
 ctx.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)      

}

}

class Planet2{
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.image = document.createElement('img')
        this.image.src = images.planet2
        this.image.onload = () => {
            this.draw()
        }
    }
draw(){
  //velocidad del fondo
this.y+=1.2
if(this.y > this.height ) this.y = 0
  //primer fondo
ctx.drawImage(this.image,this.x,this.y,this.width,this.height)    
  //segundo fondo
 ctx.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)      

}

}

class Planet3{
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.image = document.createElement('img')
        this.image.src = images.planet3
        this.image.onload = () => {
            this.draw()
        }
    }
draw(){
  //velocidad del fondo
this.y+=1.9
if(this.y > this.height ) this.y = 0
  //primer fondo
ctx.drawImage(this.image,this.x,this.y,this.width,this.height)    
  //segundo fondo
 ctx.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)      

}

}

class P1{
    constructor(){
        this.x = 300
        this.y = 485
        this.width = 34
        this.height = 60
        this.image = document.createElement('img')
        this.image.src = images.P1
        this.image.onload = () => {
             this.draw()
        }
        this.gravity = -3.5
        
    }

    draw(){
        if(this.y < canvas.height - 60) this.y += this.gravity
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    } 
       
}


////////////////////////////////////////////////////////////////////////
class P2{
    constructor(){
        this.x = 655
        this.y = 485
        this.width = 34
        this.height = 60
        this.image = document.createElement('img')
        this.image.src = images.P2
        this.image.onload = () => {
             this.draw()
        }
        this.gravity = -3.5
        
    }

    draw(){
        if(this.y < canvas.height - 60) this.y += this.gravity
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    } 
       
}


class Meteors{
  constructor(x){
    this.x = x
    this.y = 740
    this.width = 100
    this.height = 100
    this.image = document.createElement('img')
    this.image.src = images.meteor1
    this.image.onload = () => {
      this.draw()
    }
    this.gravity = -5
  }
  
  draw(){
    this.y-=2
    if(this.y < canvas.height - 60) this.y += this.gravity
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
  checkCollition(player1){
            return  (this.x < player1.x + player1.width) &&
                    (this.x + this.width > player1.x) &&
                    (this.y < player1.y + player1.height) &&
                    (this.y + this.height > player1.y);
        }
}



//instancias
var board = new Board()
var planet1 = new Planet1()
var planet2 = new Planet2()
var planet3 = new Planet3()
var player1 = new P1()
var player2 = new P2()



//funciones principales


function update(){
  frames++
  console.log(meteors.length)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    board.draw()
    planet1.draw()
    planet2.draw()
    planet3.draw()
    player1.draw()
    player2.draw()
    //meteoros
    generateMeteors()
    drawMeteors()
    checkTopLimitP1()
    checkTopLimitP2()
    checkMeteorsCollitions()
    checkMeteorsCollitions2()
    //board.music.play()

    
}


function start(){
   //if(interval) return
    meteoros = []
    frames = 0
    interval = setInterval(update, 1000/60)
    board.music.play()
    startBTN.style.display = 'none'
    instructionsBTN.style.display = 'none'
    Logo.style.display = 'none'
    
}


function gameOver1(){
    clearInterval(interval)
  player1.x =483
  player1.y =250
    ctx.font = "80px Avenir"
    ctx.fillStyle = "green"
    ctx.fillText("Player Green Wins!",180,370)
    ctx.font = "50px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Press 'r' to restart", 330,500)
    interval = null
    board.music.pause()

    var music = new Audio()
    music.src = "http://soundbible.com/mp3/Ta%20Da-SoundBible.com-1884170640.mp3"
    music.play()
}

function gameOver2(){
    clearInterval(interval)
  player2.x =483
  player2.y =250
    ctx.font = "80px Avenir"
    ctx.fillStyle = "red"
    ctx.fillText("Player Red Wins!",220,370)
    ctx.font = "50px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Press 'r' to restart",330,500)
    interval = null
    board.music.pause()

    var music = new Audio()
    music.src = "http://soundbible.com/mp3/Ta%20Da-SoundBible.com-1884170640.mp3"
    music.play()
    
}


//funciones auxiliares
function generateMeteors(){
   if(frames % 20 === 0){
    var x = Math.floor(Math.random()*(canvas.width-100))
    var M1 = new Meteors(x)
    meteors.push(M1)
   }
}

function drawMeteors(){
  meteors.forEach(function(Meteors){
    Meteors.draw()
  })
}


function checkMeteorsCollitions(){
        meteors.forEach(function(Meteors){
            if(Meteors.checkCollition(player1)){
                console.log("ouch!")
                player1.y -= 25

            }
        })
    }


function checkMeteorsCollitions2(){
        meteors.forEach(function(Meteors){
            if(Meteors.checkCollition(player2)){
                console.log("ouch!")
                player2.y -= 25

            }
        })
    }


function checkTopLimitP1(){
        if( player1.y <= -60  ){
            gameOver2() 
            P2.gravity = 0 
        }  
}

function checkTopLimitP2(){
        if( player2.y <= -60 ){
            gameOver1()
        }  
}

//los observadores

//MOVE DOWN
    //Player 1
addEventListener('keydown', function(e){
   if(e.keyCode === 83 && player1.y < 680){
      player1.y += 50
   } 
     //Player 2
   if(e.keyCode === 75 && player2.y < 680){
     player2.y +=50
   }
   

//MOVE LEFT
      //Player 1
  if(e.keyCode === 65 && player1.x > 50 && player1.y < 680){
    player1.x -=40
    player1.y +=10
  }
     //Player 2
  if(e.keyCode === 74 && player2.x > 50 && player2.y < 680){
    player2.x -=40
    player2.y +=10
  }

  
  
  
//MOVE RIGHT
       //Player 1
  if(e.keyCode === 68 && player1.x < 930 && player1.y < 680){
    player1.x +=40
    player1.y +=10
  }
      //Player 2
  if(e.keyCode ===76 && player2.x < 930 && player2.y < 680){
    player2.x +=40
    player2.y +=10
  }
  
  
/*
  
   if(e.key === "Enter"){
       start()
     
   }
*/

   if(e.key === 'r' || e.key === 'R'){
    window.location.reload(true);
   }
  





})


document.getElementById('instructions').onclick=function(){
    console.log('loggg')
    document.getElementById('instrucciones').style.display='block'
}

document.getElementById('cerrar').onclick=function(){
    console.log('loggg')
    document.getElementById('instrucciones').style.display='none'
}


