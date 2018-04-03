function Score (game){
    this.game = game;
    this.point = 0;
  
  }
  
  
  Score.prototype.incrementScore = function(){
    this.point++
  }
  
  Score.prototype.draw = function () {
    this.game.ctx.font = "46px Luckiest Guy",
    this.game.ctx.fillStyle ="orange";
    this.game.ctx.fillText("Score: " + this.point, 950, 80);
  }