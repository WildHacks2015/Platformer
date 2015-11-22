var create = function(){
  this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.ARCADE);


  player = new Player(game,100,100);
  game.add.existing(player);

  cursors = game.input.keyboard.createCursorKeys();


};
