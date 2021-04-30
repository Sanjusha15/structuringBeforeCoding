class Form{
    constructor(){}
    dispaly(){
        var title = createElement("h2");
        title.html("Multiplayer Car Racing");
        title.position(130,0);
        
        var input = createInput("");
        var button = createButton("Play");
        var greeting = createElement("h3");
        input.position(350,250);
        button.position(400,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello"+name);
            greeting.position(400,200);
        })
    }
}