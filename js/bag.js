function Bag(game) {
    this.game = game;
    this.vy = 0.5;
    this.height = 50;
    this.width = 40;

    this.img = new Image();
    this.img.src = "img/bag.png";

    this.x = 600;
    this.y = 0;
  }
  
  Bag.prototype.draw = function() {
    this.game.ctx.drawImage(this.img,
    this.x,
    this.y,
    this.width,
    this.height
    )
};


  
  
  Bag.prototype.move = function() {
    this.y += this.vy;
    
  };


  // Bag.prototype.collidesWith = function(player){
  //   if (
  //     player.x < this.x + this.width &&
  //     player.x + player.width > this.x &&
  //     player.y < this.y + this.height &&
  //     player.height + player.y > this.y
  //   ) {
  //     return true;
  //   }
  //   return false
  // }