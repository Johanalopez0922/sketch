const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    // Cambiar Engine por engine, por que estamos haciendo referencia a la variable que declaramos en la linea anterior. 
    world = engine.world;
    
    var ball_options={
        restitution:0.95,
        frictionAir:0.01
    }

    var rectangle_options={
        isStatic:true
    }

    ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);
    
    rectangle1 = Bodies.rectangle(200,350,150,50,rectangle_options);
    World.add(world,rectangle1);
}

function draw(){
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,200);
  rect(rectangle1.position.x,rectangle1.position.y,500,20);
}

