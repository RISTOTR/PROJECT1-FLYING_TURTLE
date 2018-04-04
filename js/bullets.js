function Bullet(game) {
    this.game = game;
  
    this.x = this.game.turtle.x + 65;
    this.y = this.game.turtle.y + 17;
    this.r = 10;
    this.vx = 10;
    this.vy = 0;
    
  
  }
  
  Bullet.prototype.draw = function() {
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle= "rgb(250, 252, 159)";
    this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.game.ctx.fill();
    this.game.ctx.closePath();
    
    
  };
  
  Bullet.prototype.move = function() {
    this.y += this.vy;
    if (this.y >= this.game.turtle.y0 + this.game.turtle.height) {
      this.vy *= -1;
    }
    this.x += this.vx;
  };


  Bullet.prototype.collidesWith = function(player){
    if (
      player.x < this.x + this.width &&
      player.x + player.width > this.x &&
      player.y < this.y + this.height &&
      player.height + player.y > this.y
    ) {
      return true;
    }
    return false
  }