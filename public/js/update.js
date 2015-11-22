var update = function(){

  if(cursors.left.isDown) {
     player.moveLeft();
 
   } else if (cursors.right.isDown) {
     player.moveRight();

   }

  //ELSE UP, DOWN, STOP
};
