class Game{
    constructor(){
        
    }

    getState(){
      var gameStateRef=database.ref('gameState')
      gameStateRef.on("value",function(data){
          gameState=data.val()
      })

    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        })

    }

    start(){
     if (gameState===0){
         player=new Player();
         player.getCount();

         console.log(player);

         form=new Form();
         console.log("form object"+form)
         form.registerForm();
     }
    }
}
