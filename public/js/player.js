var speed = 50;
var hspeed = 200;
var gridsize = 8;
var spriteScale = 1;

Player = function(game, x, y, playerId){
  Phaser.Sprite.call(this, game, x, y, playerId);
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.collideWorldBounds = true;
  this.inputEnabled = true;
  this.input.enableSnap(32, 32, true, true);

  this.moveLeft = function() {
      this.body.velocity.x = -speed;
      this.body.velocity.y = 0;
  };

  this.moveRight = function() {
      this.body.velocity.x = speed;
      this.body.velocity.y = 0;
  };

  this.moveUp = function() {
      this.body.velocity.y = -speed;
      this.body.velocity.x = 0;
  };

  this.moveDown = function() {
      this.body.velocity.y = speed;
      this.body.velocity.x = 0;
  };

  this.stop = function(){
    if (this.body.velocity.x > 0)
    {
      this.body.x = this.body.x + gridsize - (this.body.x % gridsize);
    }
    else if (this.body.velocity.x < 0)
    {
      this.body.x = this.body.x - (this.body.x % gridsize);
    }

    if (this.body.velocity.y > 0)
    {
      this.body.y = this.body.y + gridsize - (this.body.y % gridsize);
    }
    else if (this.body.velocity.y < 0)
    {
      this.body.y = this.body.y - (this.body.y % gridsize);
    }
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
  };
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Creator = function(game, x, y) {

  Player.call(this, game, x, y, 'p1');
};

Creator.prototype = Object.create(Player.prototype);
Creator.prototype.constructor = Creator;

Destroyer = function(game, x, y) {

  Player.call(this, game, x, y, 'p2');
};

Destroyer.prototype = Object.create(Player.prototype);
Destroyer.prototype.constructor = Destroyer;


Hero = function(game, x, y) {

  Phaser.Sprite.call(this, game, x, y, 'p3');
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.body.velocity.x = hspeed;

};

Hero.prototype = Object.create(Phaser.Sprite.prototype);
Hero.prototype.constructor = Hero;

Goal = function(game, x, y){

  Phaser.Sprite.call(this, game, x, y, 'goal');
  this.scale.setTo(spriteScale);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);

};

Goal.prototype = Object.create(Phaser.Sprite.prototype);
Goal.prototype.constructor = Hero;
