var layer;
var boundaryLayer;
var create = function(){
  //this.background = this.game.add.sprite(0, 0, "background");

  //	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();
  wbutton = game.input.keyboard.addKey(Phaser.Keyboard.W);
  abutton = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sbutton = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dbutton = game.input.keyboard.addKey(Phaser.Keyboard.D);
  resetbutton = game.input.keyboard.addKey(Phaser.Keyboard.P);

	// Initialize first level
	nextLevel();

  // add timer end game condition
  timeEndGame();
};

var timeEndGame = function(){

  var timer = 10;
  displayMessage(timer); // initialize timer

  function timerChange(){
    if (timer <= 0){
      // display you lose
      updateMessage("You Lose");
    }else{
      updateMessage(timer);
      timer--;
    }
  }

  game.time.events.loop(Phaser.Timer.SECOND, timerChange,this);
};