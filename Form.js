class Form {

  constructor() {
    this.input = createInput("username");
    this.button = createButton('PLAY');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  
  display(){
    this.title.html("RUN FOR THE GOLD");
    this.title.position(displayWidth/4 + 10, displayHeight/10 + 20);

    this.input.position(displayWidth/3 - 45, displayHeight/2 - 135);
    this.button.position(displayWidth/2 - 205, displayHeight/2-55);
    this.reset.position(displayWidth/3+450,displayHeight/2+70);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome " + player.name + " !!")
      this.greeting.position(displayWidth/3 - 100, displayHeight/2 - 120);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      RunnersAtEnd.update(0);
    });

  }
}
