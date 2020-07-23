class Items {
  constructor(name,x,y,width,height,targetX,targetY,duration,stressReductionRate){
    this.name= name;
    this.x = x; //x-axis position of items
    this.y = y; // y-axis position of items
    this.width = width; // width of items 
    this.height = height; // height of items
    this.targetX = targetX;
    this.targetY = targetY;
    this.targetCord = `(${this.targetX},${this.targetY})`;
    // this.img = img; // items img maybe don't need this???
    this.duration = duration; //in minutes?
    this.stressReductionRate = stressReductionRate; //rate per minute
    this.canvas = document.getElementById("house"); //I removed ctx from global scope
    this.ctx = this.canvas.getContext('2d');
  }

  draw(){
    let ctx = this.ctx;
    let x = this.x;
    let y = this.y;
    let width = this.width;
    let height = this.height;

    ctx.fillRect(x,y,width,height);
  }

  useItem(player){
    player.canMove = false;
    player.status = `${this.name}`;
    let minutesUsingItem = 0;
    
    let deStressFunction = setInterval(()=>{
      if(player.stress > 0.00){
        player.stress += this.stressReductionRate;
        if(player.stress < 0){
          player.stress = 0.00;
        }
      }
      minutesUsingItem ++;
      console.log(minutesUsingItem);
      if(minutesUsingItem === this.duration){
        console.log("Yasss Queen! I feel less stressed now");
        player.canMove = true;
        player.status = ``;
        console.log(player.stress);
        clearInterval(deStressFunction);
      }
      if(player.atWork === true){
        console.log("Need to cut this activity short, or I'll be late for work.");
        console.log(player.stress);
        clearInterval(deStressFunction);
      }
    },game.gameHours/60);
  }


}







  