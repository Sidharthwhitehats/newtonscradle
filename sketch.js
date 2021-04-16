
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var ground, ball;
var bob2,bob3,bob4,bob5;
var rope1;
var ball1Diameter;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
ball1=new Ball(220,200,30);


ball2=new Ball(250,200,30);
ball3=new Ball(280,200,30);
ball4=new Ball(310,200,30);
ball5=new Ball(340,200,30);
ground=new Ground(280,100,180,10);

rope1= new Rope(ball1.body,ground.body,{x:160,y:20});

rope2= new Rope(ball2.body,ground.body,100,100);
rope3= new Rope(ball3.body,ground.body,100,100)
rope4= new Rope(ball4.body,ground.body,100,100)
rope5= new Rope(ball5.body,ground.body,100,100)

}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
   
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();


   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

}

function keyPressed(){
    if(keyCode==32){
        Matter.Body.setPosition()
    }
}


