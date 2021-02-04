



var canvas;
var music;

var surface1,surface2,surface3,surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
     surface1 = createSprite(699,583,200,22);
     surface1.shapeColor = "green";
     surface2 = createSprite(489,583,200,22);
     surface2.shapeColor = "red";
     surface3 = createSprite(279,583,200,22);
     surface3.shapeColor = "yellow";
     surface4 = createSprite(69,583,200,22);
     surface4.shapeColor = "blue";

      //create box sprite and give velocity
     ball = createSprite(random(20,650),180,40,40);
     ball.shapeColor = "white";
     ball.velocityX = (random(-12,12));
     ball.velocityY = (random(-12,12));

}

function draw() {
    background(rgb(169,169,169));
    text(mouseX + ',' + mouseY, mouseX,mouseY);
     //create edgeSprite
     createEdgeSprites();
     ball.bounceOff(surface1);
     ball.bounceOff(surface2);
     ball.bounceOff(surface3);
     ball.bounceOff(surface4);
     
     



      //add condition to check if box touching surface and make it box
    drawSprites();
}
