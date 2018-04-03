function Bullet(game) {
    this.game = game;
  
    this.x = this.game.turtle.x + this.game.turtle.width;
    this.y = this.game.turtle.y + this.game.turtle.height / 2;
    this.r = 10;
    this.vx = 10;
    this.vy = 0;
    this.g = 0.3;
  
  }
  
  Bullet.prototype.draw = function() {
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.game.ctx.fill();
    this.game.ctx.closePath();
    
  };
  
  Bullet.prototype.move = function() {
     this.vy += this.g;
    this.y += this.vy;
    if (this.y >= this.game.player.y0 + this.game.player.height) {
      this.vy *= -1;
    }
    this.x += this.vx;
  };