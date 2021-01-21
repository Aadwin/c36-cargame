class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        // Whenever you want to write to database you should write in key:value pairs
        
        // '/'  refers the root node or database node
        
        database.ref('/').update({
            playerCount:count
        })
        
    }

    update(name){
        var playerIndex = "player"+playerCount;

         database.ref(playerIndex).set({
             name : name
         })
    }
}