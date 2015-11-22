Player = function(game, x, y) {

  var speed = 200;


  Phaser.Sprite.call(this, game, x, y, 'p1');
  this.scale.setTo(0.3, 0.3);

  //Enable physics
  game.physics.p2.enable(this);
  //  Modify a few body properties
  //this.body.setZeroDamping();
  this.body.fixedRotation = true;

  this.moveLeft = function() {
      this.body.moveLeft(speed);
  };

  this.moveRight = function() {
      this.body.moveRight(speed);
  };
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
