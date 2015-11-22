var create = function(){
  this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

  //  Make things a bit more bouncey
  game.physics.p2.defaultRestitution = 0.8;

  
  player = new Player(game,100,100);
  game.add.existing(player);

  cursors = game.input.keyboard.createCursorKeys();

  createPlatforms();


};

var createPlatforms = function(){
  platforms = game.add.group();
  platforms.enableBody = true;

  var platform = platforms.create(300, 100, 'platform');
  platform.scale.x = 1;
  platform.scale.y = 1;
  platform.anchor.setTo(0.5, 0.5);
  platform.body.immovable = true;
};