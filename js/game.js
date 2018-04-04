function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.obstacles = [];
    this.bags = [];
    this.bullets = [];
    this.turtle;
    this.score;
    this.background;
    this.framesCounter = 0;
  
    this.reset();
  }

  
  Game.prototype.start = function() { 
    this.interval = setInterval( function () {
      this.clear();
      this.moveAll();
      this.draw();
      this.framesCounter += 1;
      if (this.framesCounter >= 1000){
        this.framesCounter = 0
      }
      if (this.framesCounter % 180 ===0){
        this.generateObstacle();
      }
      if (this.framesCounter % 380 ===0){
        this.generateBag();
      }
      if(this.isCollision()){
        this.gameOver();
        }
      if(this.turtle.isCollisionBullet()){
        console.log('COLISION')
        this.gameOver();
        }
      if (this.framesCounter % 100 === 0){
        this.score.incrementScore();
      }
    }.bind(this), 1000/60);
  };
  
  Game.prototype.stop = function() {
    clearInterval(this.interval)
  };
  
  Game.prototype.gameOver = function() {
    this.stop();
    if(confirm("GAME OVER. Play again?")) {
      this.reset();
      this.start();
    }
  };
  
  Game.prototype.reset = function() {
    this.background = new Background(this);
    this.turtle = new Turtle(this);
    
    this.score = new Score(this);
    
    this.framesCounter = 0;
  
   this.obstacles = [];
   this.bags = [];
   this.bullets = [];
  
  };
  
  Game.prototype.isCollision = function() {
    var collision = false;
    this.obstacles.forEach(obstacle => {
      if(obstacle.collidesWith(this.turtle)){
        collision = true;
      }
    });
    return collision;
  };

  

  
  Game.prototype.clearObstacles = function() {
    for (var i=0; i<this.obstacles.length; i++) {
      if(this.obstacles[i].x < 0){
        this.obstacles.splice(i, 1);
      }
    }
  };
  
  Game.prototype.generateObstacle = function() {
    this.obstacles.push(new Obstacle(this));
  };

  Game.prototype.generateBag = function() {
    this.bags.push(new Bag(this));
  };
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  
  Game.prototype.draw = function() {
    this.background.draw();
    this.turtle.draw();
    this.obstacles.forEach(function(o){ o.draw(); });
    this.bags.forEach(function(o){o.draw(); });
    this.score.draw();
  };
  
  Game.prototype.moveAll = function() {
    this.background.move();
    this.turtle.move();
    this.obstacles.forEach(function(o){ o.move(); });
    this.bags.forEach(function(o){o.move(); });
  };
  