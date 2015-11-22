var preload = function(){
  this.load.image('p1','assets/sprites/red 8x8.png');
  this.load.image('p2','assets/sprites/blue 8x8.png');
  this.load.image('p3','assets/sprites/green 8x8.png');

  this.load.tilemap('map','assets/tiles/tileset.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.image('tiles','assets/tiles/tiles 8x8.png');

};
