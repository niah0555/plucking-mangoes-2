class stone{

constructor(x, y, r){


var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2 
}

this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("Plucking mangoes/stone.png");
this.body=Bodies.circle(this.x, this.y, this.r, options);

}



display(){
push ();
translate(this.x, this.y)
  imageMode(CENTER);
  image (this.image,0,0,this.r, this.r);
  pop ();
}






}