class Form{
    constructor(){
         this.title=createElement('h2')
          this.input=createInput()
            this.button=createButton("play")
              this.reset=createButton("Reset")
               this.greeting=createElement('h2')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        //this.reset.hide()

    }
    display(){
        
        this.title.html("car racing game")
        this.title.position(displayWidth/2,10)
       
        this.input.position(displayWidth/2-40,displayHeight/2)
        
        this.button.position(displayWidth/2+60,displayHeight/2+40)
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.reset.position(displayWidth/2,+10)
         player.name= this.input.value()
         playerCount+=1
         player.index = playerCount;
        player.update()
        player.updateCount(playerCount)
        
        this.greeting.html("welcome"+player.name)
        this.greeting.position(displayWidth/2,displayHeight/2)
        }) 
        this.reset.mousePressed(()=>{
            database.ref('/').update({
                players:null,
                gameState:0,
                playerCount:0,
                finishPlayers:0
            })
            location.reload()
        })
            }
}