var gWidth = 640;
var gHeight = 480;

var game = new Phaser.Game(gWidth,
  gHeight, Phaser.AUTO, '',
  {preload: preload, create: create, update: update});
