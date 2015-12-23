var currentLevel = 0;
var gridsize = 8; //used for grid snapping and player placement
var whiteTile = 1;
var blackTile = 2;
var greyTile = 3;
var solidTile = 4;
var creaTile = 5;
var destTile = 6;
var heroTile = 7;
var goalTile = 8;

var maps = ['testmap','m1','m2','m3'];

var nextLevel = function(){
  if (!debugging)
    currentLevel++;
  resetLevel();
}

var tileToCoord = function(game, id){
  // make create object too?!
  t = map.searchTileIndex(id); //tile in question
  layer.map.putTile(greyTile, t.x, t.y); //cover tile
  return [gridsize*t.x, gridsize*t.y];//pixel coordinates of tile
}

var resetLevel = function(){
  // Destroy onscreen objects?s
    Level(currentLevel);
}

var Level = function(levelId){ //consider making this a prototype. CUrrently doesnt allow for different behavior, only maps

  console.log("Loading level " + levelId);
  map = game.add.tilemap(maps[levelId]);
  map.addTilesetImage('tiles');

  layer = map.createLayer('Tile Layer 1');
  boundaryLayer = map.createLayer('Boundary Layer');
  layer.resizeWorld();
  layer.dirty = true;
  map.setCollision(1,true, layer);
  map.setCollision(4,true, boundaryLayer);

  playerGroup = game.add.group();
  allObjGroup = game.add.group();
  console.log(playerGroup);

  cc = tileToCoord(game, creaTile); //use argument spreading?
  dc = tileToCoord(game, destTile);
  hc = tileToCoord(game, heroTile);
  gc = tileToCoord(game, goalTile);
  creator = new Creator(game,cc[0], cc[1]);
  destroyer = new Destroyer(game,dc[0], dc[1]);
  hero = new Hero(game,hc[0], hc[1]);
  goal = new Goal(game,gc[0], gc[1]);

  creator.anchor.set(.5);
  destroyer.anchor.set(.5);

  //Make groups (implement later)
  /*
  playerGroup.add(creator);
  playerGroup.add(destroyer);
  allObjGroup.add(creator);
  allObjGroup.add(destroyer);
  allObjGroup.add(hero);
  */

  //add hero properties
  hero.body.velocity.x = hspeed;

  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);
  game.add.existing(goal);
};

/*
var level1 = function(){
  map = game.add.tilemap('map1');
  map.addTilesetImage('tiles');

  map.setCollision(1);
  map.setCollision(4);
  layer = map.createLayer('Tile Layer 1');
  layer.resizeWorld();
  layer.dirty = true;

  creator = new Creator(game,104,104);
  destroyer = new Destroyer(game,104,200);
  hero = new Hero(game,104,304);
  goal = new Goal(game,544,304);

  //add hero properties
  hero.body.velocity.x = hspeed;

  game.add.existing(creator);
  game.add.existing(destroyer);
  game.add.existing(hero);
  game.add.existing(goal);
};

var level2 = function(){
  map = game.add.tilemap('map2');
  map.addTilesetImage('tiles');

  map.setCollision(1);
  map.setCollision(4);
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
};
*/

var displayMessage = function(message){
  style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  text = game.add.text(0, 0, message,style);
  text.setTextBounds(0, 100, 800, 100);
  //game.lockRender = true
  console.log("Game end");
};

var updateMessage = function(message){
  text.setText(message);
};
