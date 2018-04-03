function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.obstacles = [];
  
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
        this.generateObstacle()
      }
      if(this.isCollision()){
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
  
  };
  
  Game.prototype.isCollision = function() {
    
    for (var i=0; i<this.obstacles.length; i++) {
      if (this.turtle.x < this.obstacles.x + this.obstacles.width &&
        this.turtle.x + this.turtle.width > this.obstacles.x &&
        this.turtle.y < this.obstacles.y + this.obstacles.height &&
        this.turtle.height + this.turtle.y > this.obstacles.y) {
         return true;
     } else {
       return false;
     }

    }

  };

  /*return this.obstacles.some(function (o) {
      return (this.turtle.x + this.turtle.width > o.x) &&
        (o.x + o.width > this.turtle.x) && 
        (this.turtle.y + this.turtle.height > o.y)
    }.bind(this))
  
  };*/
     // (this.turtle.x < this.obstacle.x + this.obstacle.width  && this.turtle.x + this.turtle.width  > this.obstacle.x &&
      //this.turtle.y < this.obastacle.y + this.obstacle.height && this.turtle.y + this.turtle.height > this.obstacle.y) 

   // Math.abs(this.turtle.x - this.o.x) < this.turtle.w && 
    //Math.abs(this.turtle.y - this.0.y) < this.turtle.h
    //return this.obstacles.some(function (o) {
     // return (this.turtle.x + this.turtle.width > o.x) &&
     //   (o.x + o.width > this.turtle.x) && 
      //  (this.turtle.y + this.turtle.height > o.y)
     // }
  
  //};
  
  Game.prototype.clearObstacles = function() {
    for (var i=0; i<this.obstacles.length; i++) {
      if(this.obstacles[i].x < 0){
        this.obstacles.splice(i, 1);
      }
    }
  };
  
  Game.prototype.generateObstacle = function() {
    this.obstacles.push(new Obstacle(this))
  };
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  
  Game.prototype.draw = function() {
    this.background.draw();
    this.turtle.draw();
    this.obstacles.forEach(function(o){ o.draw(); })
    this.score.draw();
  };
  
  Game.prototype.moveAll = function() {
    this.background.move()
    this.turtle.move()
    this.obstacles.forEach(function(o){ o.move(); })
  };
  