class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;
      this.image = loadImage("fedex");
    }
    display(){
      if(this.body.speed<5){
      fill("green");
      super.display();}
    
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x, this.body.position.y,30,40)
      pop();
    }   
    }
    score(){
      if(this.Visibility>0 && this.Visibility<=105){
        score++
      }
    }
  };
  