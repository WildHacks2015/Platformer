var layer;

var create = function(){

  map = game.add.tilemap('map');
  map.addTilesetImage('tiles');

  map.setCollision(1);
  layer = map.createLayer('Tile Layer 1');
  layer.resizeWorld();
  layer.dirty = true;


  //this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();
  wbutton = game.input.keyboard.addKey(Phaser.Keyboard.W);
  abutton = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sbutton = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dbutton = game.input.keyboard.addKey(Phaser.Keyboard.D);

  creator = new Creator(game,96,96);
  destroyer = new Destroyer(game,96,200);
  hero = new Hero(game,96,300);
  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);


};