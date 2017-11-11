const game = require("game")

function onenter(){
    game.tell("HELLO BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!")
    game.go("name")
}

module.exports = {
    onenter: onenter
 }