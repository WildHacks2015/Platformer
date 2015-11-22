var update = function(){

  if(cursors.left.isDown) {
     player.moveLeft();
   } else if (cursors.right.isDown) {
     player.moveRight();
   } else if (cursors.up.isDown) {
     player.moveUp();
   } else if (cursors.down.isDown) {
     player.moveDown();
   } else {
      player.stop();
    }

  //ELSE UP, DOWN, STOP
};
