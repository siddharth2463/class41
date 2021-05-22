class Player{
constructor(){
this.name=null
this.distance=0
this.index=0
this.rank=0

}
update(){
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        rank:this.rank
    })
}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
getCount(){
    var playerCountref=database.ref('playerCount')
    playerCountref.on("value",(data)=>{
        playerCount=data.val()
    })
}
static getPlayerinfo(){
    var playerInforef=database.ref('players')
    playerInforef.on("value",(data)=>{
        allPlayers=data.val()
    })
}
getFinishedPlayers(){
    database.ref('finishPlayers').on("value",(data)=>{
        fp=data.val()
    })
}
static updateFinishedPlayers(){
database.ref('/').update({
    finishPlayers:fp+1
})
this.rank+=1
}
}