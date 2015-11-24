var update = function(){

// Control the creator
  // game.physics.arcade.collide(creator,layer);
  // game.physics.arcade.collide(destroyer,layer);
  game.physics.arcade.collide(hero,layer);

  game.physics.arcade.collide(creator, destroyer);
  game.physics.arcade.collide(creator, hero);
  game.physics.arcade.collide(destroyer, hero);

  if(cursors.left.isDown) {
     creator.moveLeft();
   } else if (cursors.right.isDown) {
     creator.moveRight();
   } else if (cursors.up.isDown) {
     creator.moveUp();
   } else if (cursors.down.isDown) {
     creator.moveDown();
   } else {
      creator.stop();
    }

  platformX = layer.getTileX(creator.x);
  platformY = layer.getTileY(creator.y);
  impassableTile = map.getTile(37, 12);
  layer.map.putTile(impassableTile, platformX, platformY);

  nonPlatformX = layer.getTileX(destroyer.x);
  nonPlatformY = layer.getTileY(destroyer.y);
  passableTile = map.getTile(12,4);
  layer.map.putTile(passableTile, nonPlatformX, nonPlatformY);


  // Control the destroyer
  if(abutton.isDown) {
     destroyer.moveLeft();
   } else if (dbutton.isDown) {
     destroyer.moveRight();
   } else if (wbutton.isDown) {
     destroyer.moveUp();
   } else if (sbutton.isDown) {
     destroyer.moveDown();
   } else {
     destroyer.stop();
  }

  //Check for win conditions
  if (this.gameRunning && game.physics.arcade.collide(hero,goal)){
    this.gameRunning = false;
    endGame();
  }
};
