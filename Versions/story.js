function Welcome_to_the_wrong_game() {    
    tell("if your reading this then you on the wrong game bro")
    handle = function (input) {  
        Name() 
    }

}    

function Name() {
    tell("also get out of my house")
    handle = function (input) {
        tell("ok yea cool but do i care no so get out " + input)
        Password()
    }
}

function Password() {
    tell(`
    Ok I'll let you stay IF...you know the totally secret password thats definently not on the
    frigde because I can't remember stuff for the life of me...
    but anyways. Two oceans cross dimensions as worlds colide but one still stands,
    this world of grey and metal floats from the fray, whats the answer I don't 
    know but a certain 1964 tv show should know`)
    handle = function (input) {
        
    }

}

//-----------------------------------------------------------
Welcome_to_the_wrong_game()