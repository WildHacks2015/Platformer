var create = function(){
  this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

  //  Make things a bit more bouncey
  game.physics.p2.defaultRestitution = 0.8;

  
  player = new Player(game,100,100);
  game.add.existing(player);

  cursors = game.input.keyboard.createCursorKeys();


};
