const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper1,ground1;
var box1,box2;


function setup() {
	createCanvas(400, 400);
    engine = Engine.create();
	world = engine.world;

	
  paper1 = new paper(200,50,20,20);
  ground1 = new ground(200,380,400,20);
 box1 = new box(200,370,100,20);
 box2 = new box(245,340,20,100);
 box3 = new box(155,340,20,100);


	
  
}


function draw() {
  background("black");
  Engine.update(engine);
  paper1.display();
  ground1.display();
  box1.display();
  box2.display();
 box3.display();
  
 
 
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:-85});
  }
}




