var update = function(){

  // Reset the level
  if(resetbutton.isDown)
    resetLevel();

  //game.physics.arcade.collide(creator,layer);
  //game.physics.arcade.collide(destroyer,layer);
  game.physics.arcade.collide(hero,layer);

  game.physics.arcade.collide(creator, destroyer);
  game.physics.arcade.collide(creator, hero);
  game.physics.arcade.collide(destroyer, hero);

  // Control the creator
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
  layer.map.putTile(1, platformX, platformY);

  nonPlatformX = layer.getTileX(destroyer.x);
  nonPlatformY = layer.getTileY(destroyer.y);
  layer.map.putTile(2, nonPlatformX, nonPlatformY);


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
  if (game.physics.arcade.collide(hero,goal)){
    nextLevel();
  }
};
