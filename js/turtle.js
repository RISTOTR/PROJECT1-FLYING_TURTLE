function Turtle(game) {
    this.x = 50;
    this.y0 = 520;
    this.y = this.y0;
    this.game = game;
    this.health = 3000;
    this.vy = 0;
    this.vx = 0;
    this.g = 0.3;

    this.hX = 50;
    this.hY = 70;
    this.hW = 100;
    this.hH = 20;
  
    this.width = 130;
    this.height = 100;
  
    this.img = new Image();
    this.img.src = "img/turtle.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;
    this.bullets = [];
    this.setListeners();
    this.rocketsound = new Audio ();
    this.rocketsound.src = "audio/zapsplat_cartoon_rocket_launch_missle.mp3"
    this.bagsound = new Audio ();
    this.bagsound.src = "audio/zapsplat_cartoon_balloon_hit_twang_003.mp3"
    
  }
  
  Turtle.prototype.draw = function() {
    this.game.ctx.drawImage(
      this.img,
      this.img.frameIndex * (this.img.width / this.img.frames),
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.width,
      this.height
      
    );

    Turtle.prototype.drawHealth = function(){
      this.game.ctx.fillStyle="red";
      this.game.ctx.fillRect(this.hX, this.hY, 300, 20);
      this.game.ctx.fillStyle="orange";
      this.game.ctx.fillRect(this.hX,this.hY,this.health/10, 20);
      
    }
  
    this.bullets.forEach(function(b) {
      b.draw();
    });
  
    this.bullets = this.bullets.filter(function(b) {
      return b.x < this.game.canvas.width;
    }.bind(this));
  
    if (this.game.framesCounter % 10 == 0) {

      this.img.frameIndex += 1;
    }
  
    if (this.img.frameIndex >= 4) {
      this.img.frameIndex = 0;
    }
  };
  
  Turtle.prototype.setListeners = function() {
    document.onkeydown = function(e) {
      switch (e.keyCode) {

      case  38: 
      if (this.y <= 160) {
        this.vy === 0;
        this.y -= this.g;
        
        return; 
      }
      else {
        this.y -= 5;
        this.vy -= 10;
      }
      break;

     case 39:
      if (this.x >= this.game.canvas.width - 120) {
        this.vx === 0;
        return;
      } 
      else {
        this.x += 40;
        this.vx += 40;
      }
      break;

      case 37:
      if (this.x <= 50) {
        this.vx === 0;
        return;
      }
      else {
          this.x -=40;
          this.vx += 40;
      }
      break;

        case 32: {
        this.shoot();
        this.rocketsound.play();
      }
      break;
    }
    }.bind(this);
  };
  
  Turtle.prototype.shoot = function() {
    this.bullets.push(new Bullet(this.game));
  };
  
  
  Turtle.prototype.move = function() {
    if (this.y <= 20){
      this.y = 21;
    }

    if (this.y < this.y0) {
      this.vy += this.g;
      this.y += this.vy;
      }
  
        
        else {
      this.vy = 0;
      this.y = this.y0;
    }
    this.bullets.forEach(function(b) {
      b.move();
    });
  };

  Turtle.prototype.isCollisionBullet = function(){
    
    var collision = false;
    this.bullets.forEach(bullet => {
      
    this.game.bags.forEach(bag => {
      
      if (
        bullet.x < bag.x + bag.width &&
        bullet.x + bullet.width > bag.x &&
        bullet.y < bag.y + bag.height &&
        bullet.height + bullet.y > bag.y
      ) 
    {
      this.bagsound.play();
      collision = true;
    }
  });
  });
  return collision;
};
  