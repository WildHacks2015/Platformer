Player = function(game, x, y) {

  var speed = 200;


  Phaser.Sprite.call(this, game, x, y, 'p1');
  this.scale.setTo(2, 2);

  //Enable physics
  game.physics.enable(this, Phaser.Physics.ARCADE);


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
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
  }
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
