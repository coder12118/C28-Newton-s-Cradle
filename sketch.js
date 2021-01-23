
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var roof;
var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 500, 20);
	bob1 = new Bob(400, 500, 30);
	bob2 = new Bob(340, 500, 30);
	bob3 = new Bob(280, 500, 30);
	bob4 = new Bob(460, 500, 30);
	bob5 = new Bob(520, 500, 30);

	rope1 = new Rope(bob1.body, roof.body, 0, 0);
	rope2 = new Rope(bob2.body, roof.body, -60, 0);
	rope3 = new Rope(bob3.body, roof.body, -120, 0);
	rope4 = new Rope(bob4.body, roof.body, 60, 0);
	rope5 = new Rope(bob5.body, roof.body, 120, 0);

	var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 700,
            showAngleIndicator: true
        }
    });

	Render.run(render);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body, bob3.body.position, {x: -50, y: -50})
	}
}



