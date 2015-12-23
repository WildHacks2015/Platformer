var gWidth = 640;
var gHeight = 480;
var debugging = true;

var game = new Phaser.Game(gWidth,
  gHeight, Phaser.AUTO, '',
  {preload: preload, create: create, update: update});
