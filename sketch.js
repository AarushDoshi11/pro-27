
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var ball;

var box1,box2,box3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = creatSprite(200,100,20,10);


	box1 = creatSprite(300,200,100,20);


	box2 = creatSprite(200,300,100,20);


	box3 = creatSprite(400,200,100,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

	  box1.y = World.mouseY
	  
	box1.x = World.mouseX

  drawSprites();
 
}



