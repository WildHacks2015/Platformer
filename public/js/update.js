var tBC= [0,0]; //toBeCreated

var update = function(){


  //make creator/destroyer collide with things?
  //make GROUPS collide
  game.physics.arcade.collide(hero,layer);

  game.physics.arcade.collide(creator, boundaryLayer);
  game.physics.arcade.collide(destroyer, boundaryLayer);
  game.physics.arcade.collide(creator, layer);
  game.physics.arcade.collide(hero, boundaryLayer);

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


/** Place Tiles **/
  xc = layer.getTileX(creator.x);
  yc = layer.getTileY(creator.y);

  if (layer.map.getTile(xc,yc).index !=1 && !(xc == tBC[0] && yc == tBC[1]))
  {
    layer.map.putTile(1, tBC[0],tBC[1]);
    tBC = [xc,yc];
  }

  xd = layer.getTileX(destroyer.x);
  yd = layer.getTileY(destroyer.y);

  if (layer.map.getTile(xd,yd).index !=2 )
      layer.map.putTile(2, xd, yd);



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
