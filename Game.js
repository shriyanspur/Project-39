class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
    runner1 = createSprite(100,40);
    runner1.addAnimation("runner1", ri1);
    runner1.scale = 1.5;

    runner2 = createSprite(100,147);
    runner2.addAnimation("runner2", ri2);
    runner2.scale = 1.5;

    runner3 = createSprite(100,254);
    runner3.addAnimation("runner3", ri3);
    runner3.scale = 1.5;

    runner4 = createSprite(100,361);
    runner4.addAnimation("runner4", ri4);
    runner4.scale = 1.5;

    runners = [runner1, runner2, runner3, runner4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    player.getRunnersAtEnd();
    
    if(allPlayers !== undefined){
      
      background("#3BAB21");
      image(track, 1035, 0, 0, displayHeight-280);

      var index = 0;

      var x;

      for(var plr in allPlayers){
        
        index = index + 1 ;

        x = displayWidth + allPlayers[plr].distance;
        runners[index-1].x = x;

        if (index === player.index){
          runners[index - 1].shapeColor = "red";
          camera.position.x = runners[index-1].x;
          camera.position.y = displayHeight-522;
        }
      
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 6810){
      gameState = 2;
      player.rank +=1;
      Player.updateRunnersAtEnd(player.rank);
    }

    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }

}
