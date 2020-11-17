const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object
var Circle

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

//JSON
  var ground_option = {
    isStatic: true
  }

  object =Bodies.rectangle(200,350,400,20,ground_option)
  World.add(world,object);

  console.log(object.position.x);
  console.log(object.position.y);
  var circle_option = {
    restitution: 298000
  }
  Circle  = Bodies.circle(200,100,15,circle_option)
  World.add(world,Circle);
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER) 
  rect(object.position.x,object.position.y,400,20) 



  ellipseMode(RADIUS);
  ellipse(Circle.position.x,Circle.position.y,15,15)
  
}