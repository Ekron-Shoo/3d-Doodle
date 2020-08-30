const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bin1, bin2, bin3, ball, ground;



function setup(){
    createCanvas(1200, 800);
    background("black");

    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(200,200,1200,20)

    bin1 = new Dustbin(100,100,70,70);
    bin2 = new Dustbin(220,120,70,70);
    bin3 = new Dustbin(810, 350,70,70);

    crumble = new Ball(700,240,70,70);
 


}

function draw(){
  
    Engine.update(engine);
 

    bin1.display();
    bin2.display();
    bin3.display();

  

    crumble.display();

}