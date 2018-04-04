function Obstacle(game) {
    this.game = game;
  
    //this.posMinx = this 
    //this.posMax
    
    
    this.height = 300;
    this.width = 40;

    this.img = new Image();
    this.img.src = "img/branch.png";

    this.x = this.game.canvas.width;
    this.y =  Math.floor((Math.random()*7)*50)+10;
  }
  
  Obstacle.prototype.draw = function() {
    this.game.ctx.drawImage(this.img,
    this.x,
    this.y,
    this.width,
    this.height
    )
};
  
  
  Obstacle.prototype.move = function() {
    this.x -= this.game.background.dx;
    
  };