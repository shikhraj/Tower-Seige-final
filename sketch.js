const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingshot;
var x = 600;
var bg;

var score = 0;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box24, box25, box26, box27, box28, box29, box30;
var stand;
var boox1, boox2, boox3, boox4, boox5, boox6, boox7, boox8, boox9, boox10, boox11, boox12, boox13, boox14, boox15, boox16, boox17, boox18, boox19, boox20, boox21, boox24, boox25, boox26, boox27, boox28, boox29, boox30;    
var y = 1000;
var plat;


function preload(){
    getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,400,1200,20);
    stand = new Ground(x-70,300,300,5); 
    plat = new Ground(y-70,300,300,5);
    //level one
  box1 = new Box(x-210,275,30,40);
  box2 = new Box(x-180,275,30,40);
  box3 = new Box(x-150,275,30,40);
  box4 = new Box(x-120,275,30,40);
  box5 = new Box(x-90,275,30,40);
  box6 = new Box(x-60,275,30,40);
  box7 = new Box(x-30,275,30,40);
  box8 = new Box(x, 275,30,40);
  box9 = new Box(x+30,275,30,40);

  //level two
  box10 = new Box1(x-180,235,30,40);
  box11 = new Box1(x-150,235,30,40);
  box12 = new Box1(x-120,235,30,40);
  box13 = new Box1(x-90,235,30,40);
  box14 = new Box1(x-60,235,30,40);
  box15 = new Box1(x-30,235,30,40);
  box16 = new Box1(x,235,30,40);
  

  //level three
  box18 = new Box3(x-150,195,30,40);
  box19 = new Box3(x-120,195,30,40);
  box20 = new Box3(x-90,195,30,40);
  box21 = new Box3(x-60,195,30,40);
  box22 = new Box3(x-30,195,30,40);
  // box23 = new Box3(x,195,30,40);
  // box24 = new Box3(x+30,195,30,40);
  
  ground.display();
//level four
  box25 = new Box2(x-120,155,30,40);
  box26 = new Box2(x-90,155,30,40);
  box27 = new Box2(x-60,155,30,40);
  box28 = new Box2(x-30,155,30,40);

  //level five
  box29 = new Box4(x-90,115,30,40);



      //level one
      boox1 = new Box(y-210,275,30,40);
      boox2 = new Box(y-180,275,30,40);
      boox3 = new Box(y-150,275,30,40);
      boox4 = new Box(y-120,275,30,40);
      boox5 = new Box(y-90,275,30,40);
      boox6 = new Box(y-60,275,30,40);
      boox7 = new Box(y-30,275,30,40);
      boox8 = new Box(y, 275,30,40);
      boox9 = new Box(y+30,275,30,40);
  
      //level two
      boox10 = new Box1(y-180,235,30,40);
      boox11 = new Box1(y-150,235,30,40);
      boox12 = new Box1(y-120,235,30,40);
      boox13 = new Box1(y-90,235,30,40);
      boox14 = new Box1(y-60,235,30,40);
      boox15 = new Box1(y-30,235,30,40);
      boox16 = new Box1(y,235,30,40);
      
    
      //level three
      boox18 = new Box3(y-150,195,30,40);
      boox19 = new Box3(y-120,195,30,40);
      boox20 = new Box3(y-90,195,30,40);
      boox21 = new Box3(y-60,195,30,40);
      boox22 = new Box3(y-30,195,30,40);
      // box23 = new Boxy(x,195,30,40);
      // box24 = new Box3(x+30,195,30,40);
      
      ground.display();

    //level four
      boox25 = new Box2(y-120,155,30,40);
      boox26 = new Box2(y-90,155,30,40);
      boox27 = new Box2(y-60,155,30,40);
      boox28 = new Box2(y-30,155,30,40);
    
      //level five
      boox29 = new Box4(y-90,115,30,40);
    
    


   bird = new Shooter(200,200,50,50);

    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
        if(backgroundImg)
        background(backgroundImg);
    
        
        textSize(35)
        fill("grey")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display(); 
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    //box23.display();
    //box24.display();
    box25.display();
    box26.display();
    box27.display();
    plat.display();
    box29.display();
    box29.display();

    boox1.display();
    boox2.display();
    boox3.display();
    boox4.display();
    boox5.display();
    boox6.display();
    boox7.display();
    boox8.display(); 
    boox9.display();
    boox10.display();
    boox11.display();
    boox12.display();
    boox13.display();
    boox14.display();
    boox15.display();
    boox16.display();
    boox18.display();
    boox19.display();
    boox20.display();
    boox21.display();
    boox22.display();
    boox25.display();
    boox26.display();
    boox27.display();
    boox29.display();
    boox29.display();

    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score(); 
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box25.score();
    box26.score();
    box27.score();
    plat.display();
    box29.score();
    box29.score();
    boox1.score();
    boox2.score();
    boox3.score();
    boox4.score();
    boox5.score();
    boox6.score();
    boox7.score();
    boox8.score();
    boox9.score();
    boox10.score();
    boox11.score();
    boox12.score();
    boox13.score();
    boox14.score();
    boox15.score();
    boox16.score();
    boox18.score();
    boox19.score();
    boox20.score();
    boox21.score();
    boox22.score();
    boox25.score();
    boox26.score();
    boox27.score();
    boox29.score();
    boox29.score();
  


    
    bird.display();
    slingshot.display();   
    stand.display(); 
    ground.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "white";
    }
    else{
        bg = "white";
    }

    backgroundImg = bg;
    
}