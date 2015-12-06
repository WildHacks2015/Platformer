var currentLevel = 1;

var nextLevel = function(){
  currentLevel++;
  switch (currentLevel) {
    case 1:
      level1();
      break;
    case 2:
      level2();
      break;
    default:
      endGame();
  }
}

var level1 = function(){
  map = game.add.tilemap('map1');
  map.addTilesetImage('tiles');

  map.setCollision(1);
  layer = map.createLayer('Tile Layer 1');
  layer.resizeWorld();
  layer.dirty = true;

  creator = new Creator(game,104,104);
  destroyer = new Destroyer(game,104,200);
  hero = new Hero(game,104,304);
  goal = new Goal(game,144,304);

  //add hero properties
  hero.body.velocity.x = hspeed;

  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);
  game.add.existing(goal);
}

var level2 = function(){
  map = game.add.tilemap('map2');
  map.addTilesetImage('tiles');

  map.setCollision(1);
  layer = map.createLayer('Tile Layer 1');
  layer.resizeWorld();
  layer.dirty = true;

  creator = new Creator(game,104,104);
  destroyer = new Destroyer(game,104,200);
  hero = new Hero(game,104,304);
  goal = new Goal(game,544,304);

  //add special properties
  hero.body.gravity.y = gravstr;
  hero.body.velocity.x = hspeed;

  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);
  game.add.existing(goal);
}

var endGame = function(){
  this.gameRunning = false;

  var text;
  //Uncaught TypeError: this.endGame is not a function
  style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  // text = game.add.text(0, 0, "Uncaught TypeError: this.endGame\nis not a function",style);
  text = game.add.text(0, 0, "You Win!",style);
  text.setTextBounds(0, 100, 800, 100);
  //game.lockRender = true;
  console.log("Game end");
};
