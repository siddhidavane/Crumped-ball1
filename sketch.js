
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,ball,dustbin; 


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball = new Ball(100,600,10);

 ground = new Ground(400,680,800,20);

 leftBar = new Dustbin(550,620,20,100);
  bottomBar = new Dustbin(610,660,100,20);
 rightBar = new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  leftBar.display();
  bottomBar.display();
  rightBar.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{ x:15,y: -15})

}

}

  