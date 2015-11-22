var layer;

var create = function(){
  var map;
  this.gameRunning = true; //for win conditions

  map = game.add.tilemap('map');
  map.addTilesetImage('tiles');



  map.setCollision(1);
  layer = map.createLayer('Tile Layer 1');
  layer.resizeWorld();

  //this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

  cursorsds = game.input.keyboard.createCursorKeys();
  wbutton = game.input.keyboard.addKey(Phaser.Keyboard.W);
  abutton = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sbutton = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dbutton = game.input.keyboard.addKey(Phaser.Keyboard.D);

  creator = new Creator(game,100,100);
  destroyer = new Destroyer(game,100,200);
  hero = new Hero(game,100,304);
  goal = new Goal(game,500,304);

  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);
  game.add.existing(goal);
};
var text;
var endGame = function(){
  //Uncaught TypeError: this.endGame is not a function
  style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  text = game.add.text(0, 0, "Uncaught TypeError: this.endGame\nis not a function",style);
  text.setTextBounds(0, 100, 800, 100);
  //game.lockRender = true;
  console.log("Game end");
}
