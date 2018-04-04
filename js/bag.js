function Bag(game) {
    this.game = game;
    this.vy = 0.8;
    this.height = 50;
    this.width = 40;

    this.img = new Image();
    this.img.src = "img/bag.png";

    this.minX= 150;
    this.maxX= 1400;

    this.x = this.numRandom(this.minX, this.maxX);
    this.y = 0;
  }

  Bag.prototype.numRandom = function (min, max) {
    return num = Math.round(Math.random() * (max - min) + min);
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


  