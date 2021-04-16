class Ball{
    constructor(x,y,r){
       
        var options={
            isStatic:true,
            restitution:1,
            friction:0,
            density:7.8,
        }
     
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.r=r;
        
        World.add(world,this.body);

    }
    display(){
        push();
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r);
       pop();

    }

}
