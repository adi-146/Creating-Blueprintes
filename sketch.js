const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;
var box1,box2;

function setup() {
  createCanvas(400,400);
 // create an engine
 engine = Engine.create();
ground=new Ground(200,390,400,20);
box1 =new Box(200,100,50,50);
box2=new Box(100,50,50,50);
}
function draw() {
  background(255,255,200);
  Engine.update(engine);
  box1.display();
  box2.display();
}