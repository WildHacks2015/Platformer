var update = function(){

// Control the creator
  game.physics.arcade.collide(creator,layer);
  game.physics.arcade.collide(destroyer,layer);
  game.physics.arcade.collide(hero,layer);

  // game.physics.arcade.collide(creator, destroyer);
  // game.physics.arcade.collide(creator, hero);
  // game.physics.arcade.collide(destroyer, hero);

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

  game.physics.arcade.collide(destroyer, game.layer);
  creator.body.velocity.x = 0;

  //ELSE UP, DOWN, STOP
};
