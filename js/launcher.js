class launcher{   
    constructor(bodyA,pointB){
        var config={
            bodyA:bodyA,pointB:pointB,stiffness:0.05,length:10
        
      
         }    
      
     
         this.pointB=pointB
     this.luancher=Constraint.create(config)  
     World.add(world,this.launcher)
     }
     display(){
     
     
     
     if(this.launcher.bodyA){
     stroke(48,22,8)
         strokeWeight(10)    
     line(this.launcher.bodyA.position.x-15,this.laucher.bodyA.position.y+15,this.pointB.x,this.pointB.y)
     
     }   
     
     }
     
     voo(){
     this.launcher.bodyA=null;
     
     
     }
         
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     }    