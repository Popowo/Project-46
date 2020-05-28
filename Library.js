function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 100 === 0) {
      var cloud = createSprite(1500,120,80,20);
      cloud.addImage("sd",cloudImage);
      

      var r = Math.round(random(200,300));
      cloud.y = r;
        //cloud.addImage(cloudImage);
      cloud.scale = 0.4;
      cloud.velocityX = -(3+score/100)
      
       //assign lifetime to the variable
      cloud.lifetime = 500;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
}