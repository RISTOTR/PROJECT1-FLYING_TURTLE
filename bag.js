function Bag(game) {
    this.game = game;
    this.vy = 5;
    this.height = 50;
    this.width = 40;

    this.img = new Image();
    this.img.src = "img/bag.png";

    this.x = Math.floor(Math.random()*400);
    this.y = 0;
  }
  
  Bag.prototype.draw = function() {
      console.log("hello");
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