var create = function(){
  this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();
  wbutton = game.input.keyboard.addKey(Phaser.Keyboard.W);
  abutton = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sbutton = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dbutton = game.input.keyboard.addKey(Phaser.Keyboard.D);

  creator = new Creator(game,100,100);
  destroyer = new Destroyer(game,100,100);
  hero = new Hero(game,100,100);
  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);




};
