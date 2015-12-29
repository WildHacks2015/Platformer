var speed = 100;

var spriteScale = 1;

var playerGroup;
var allObjGroup;

// Base class for controllable objects
Player = function(game, x, y, playerId){
  Phaser.Sprite.call(this, game, x, y, playerId);
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.collideWorldBounds = true;
  //this.body.tilePadding.set(8, 8);

  //Preoad functions
  this.gridsnap = function(axis){
    if (axis == 'x'){
      if (this.body.velocity.x > 0)
        this.body.x = this.body.x + gridsize - (this.body.x % gridsize);
      else if (this.body.velocity.x < 0)
        this.body.x = this.body.x - (this.body.x % gridsize);
      }
    else{
      if (this.body.velocity.y > 0)
        this.body.y = this.body.y + gridsize - (this.body.y % gridsize);
      else if (this.body.velocity.y < 0)
        this.body.y = this.body.y - (this.body.y % gridsize);
        }
    console.log("Grid snapped!");
    };

  //Movement
  this.moveLeft = function() {
      this.body.velocity.x = -speed;
      if (this.body.velocity.y != 0){
        this.gridsnap('y');
        this.body.velocity.y = 0;
      }
  };

  this.moveRight = function() {
      this.body.velocity.x = speed;
      if (this.body.velocity.y != 0){
        this.gridsnap('y');
        this.body.velocity.y = 0;
      }
  };

  this.moveUp = function() {
      this.body.velocity.y = -speed;
      if (this.body.velocity.x != 0){
        this.gridsnap('x');
        this.body.velocity.x = 0;
      }
  };

  this.moveDown = function() {
      this.body.velocity.y = speed;
      if (this.body.velocity.x != 0){
        this.gridsnap('x');
        this.body.velocity.x = 0;
      }
  };

  this.stop = function(){
    if (this.body.velocity.x != 0){
      this.gridsnap('x');
      this.body.velocity.x = 0;
    }
    if (this.body.velocity.y != 0){
      this.gridsnap('y');
      this.body.velocity.y = 0;
    }
  };
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// "Creator"
Creator = function(game, x, y) {
  Player.call(this, game, x, y, 'p1');
};

Creator.prototype = Object.create(Player.prototype);
Creator.prototype.constructor = Creator;

// "Destroyer"
Destroyer = function(game, x, y) {

  Player.call(this, game, x, y, 'p2');
};

Destroyer.prototype = Object.create(Player.prototype);
Destroyer.prototype.constructor = Destroyer;

// "Hero"
Hero = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'p3');
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);

};

Hero.prototype = Object.create(Phaser.Sprite.prototype);
Hero.prototype.constructor = Hero;

// "Goal"
Goal = function(game, x, y){

  Phaser.Sprite.call(this, game, x, y, 'goal');
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);

};

Goal.prototype = Object.create(Phaser.Sprite.prototype);
Goal.prototype.constructor = Hero;
