
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2,box3,box4,box5;
var groundd;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	groundd= new ground(600,647,1200,12)
	box1= new dustbin (605,600,20,100);
	box2= new dustbin (545,635,100,20);
	box3= new dustbin (485,600,20,100);
	paper1= new paper (92,500,25)
  
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();

  groundd.display();

  paper1.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-18})

	}

}


