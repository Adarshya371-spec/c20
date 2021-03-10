const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground;
var ball;

function setup() {
   var canvas=createCanvas(400,400);
   myengine=Engine.create();

   var ground_options = {
    isStatic: true
  }
  var ball_options = {
   restitution: 1.0
  }


   //myworld is myengine's world
   myworld=myengine.world;
  ground=Bodies.rectangle(200,380,400,10,ground_options);
   ball=Bodies.circle(200,100,20,ball_options)
   World.add(myworld,ball)
   
   World.add(myworld,ground);
   console.log(ground);
   //console.log(object.position.x);
   //console.log(object.position.y);

   
}

function draw() {
  background("cyan");
  Engine.update(myengine)
  rectMode(CENTER) 
 
  rect(200,200,50,50)
   ellipseMode(RADIUS)

  rect(ground.position.x,ground.position.y,400,10)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}