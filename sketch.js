
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;
var BoyImage;
function preload(){

  BoyImage = loadImage("Plucking mangoes/boy.png");


}

	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  mango1 = new mango(500, 400, 50);

  mango2 = new mango(600, 460, 50);

  mango3 = new mango(400, 420, 50);

  mango4 = new mango(500, 409, 50);

  mango5 = new mango(550, 370, 50);


  mango6 = new mango(400, 450, 50);

   tree1=new tree( 550, 440, 550);



   stone1 = new stone(30, 480, 70);
   sling= new string(stone1.body,{x:510, y: 250});
Boy= createSprite(100, 600, 10, 10);
Boy.scale=0.15;
Boy.addImage("Boy", BoyImage);
ground1 = new ground(200, 350, 800, 50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//detectollosion(stone1, mango1);
//detectollosion(stone1, mango2);
//detectollosion(stone1, mango3);
//detectollosion(stone1, mango4);
//detectollosion(stone1, mango5);
//detectollosion(stone1, mango6);

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
  tree1.display();
 stone1.display();
ground1.display();
sling.display();
  drawSprites();

  
}

function KeyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone1.body,{x:235, y:420})
sling.attach(stone1.body);
}
}


function mouseDragged(){
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
      sling.fly();
  }
  
