var preload = function(){
  // this.load.image('background', 'assets/bg.jpeg');
  this.load.image('p1','assets/sprites/bigred.png');
  this.load.image('p2','assets/sprites/bigblue.png');
  this.load.image('p3','assets/sprites/biggreen.png');
  this.load.tilemap('blockage', 'assets/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
};
