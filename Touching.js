function touching(bodyA,bodyB){
  if(bodyB.x-bodyA.x<=bodyA.width/2+bodyB.width/2){
      bodyA.velocityX=0;
      bodyA.velocityY=0;
      return true;
  }
  else {
      return false;
  }
}