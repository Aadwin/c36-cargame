class Form{
    constructor(){

    }
    registerForm(){
        var title=createElement('h2');
        title.html('Car Racing Game');
        title.position(130,0);
        
        var input=createInput("Name");
        var button=createButton('play');
        var greeting=createElement('h3');

        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            button.hide();
            input.hide();

            var name = input.value();

            playerCount++
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello "+name);
            greeting.position(150,150);

            
        })
    }
}