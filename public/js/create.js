var layer;

var create = function(){
  var map;

  map = game.add.tilemap('map');
  map.addTilesetImage('tiles');

  map.setCollision(1);
  layer = map.createLayer('Tile Layer 1');
  layer.resizeWorld();

  //this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();
  wbutton = game.input.keyboard.addKey(Phaser.Keyboard.W);
  abutton = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sbutton = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dbutton = game.input.keyboard.addKey(Phaser.Keyboard.D);

  // TileMap
  // map = game.add.tilemap('blockage');
  // map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
  // // map.addTilesetImage('', 'tiles');
  // map.setCollisionBetween(1,0);
  // layer = map.createLayer('World1');
  // layer.resizeWorld();

  creator = new Creator(game,100,100);
  destroyer = new Destroyer(game,100,200);
  hero = new Hero(game,100,300);
  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);


};