var preload = function(){
  this.load.image('p1','assets/sprites/red 8x8.png');
  this.load.image('p2','assets/sprites/blue 8x8.png');
  this.load.image('p3','assets/sprites/green 8x8.png');
  this.load.image('goal','assets/sprites/yellow 8x8.png');

  //this.load.tilemap('map1','assets/tiles/map1.json', null, Phaser.Tilemap.TILED_JSON);
  //this.load.tilemap('map2','assets/tiles/map2.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('testmap','assets/tiles/testmap.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.image('tiles','assets/tiles/tiles 8x8.png');

};
