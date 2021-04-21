const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var rand;
var ground;
var stand1,stand2;
var maxDrops=100;



function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1400,1400);
    father = new Father(150,100);
    kidnapper = new Kidnapper(700,100);
    ground = new Ground();
    stand1 = new Stand(500,730,250,20);
    stand2 = new Stand(1100,600,600,20);
    girl = new Girl(180,600);
    boss = new Boss(970,400);
   
    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    father.display();
kidnapper.display();
ground.display();
stand1.display();
  stand2.display();
  girl.display();
  boss.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

