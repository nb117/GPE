
function Hello() {
  tell("awaken...new one...")
  handle = function (input) {
    Name()
  }
}

function Name() {
  tell("do you know your name...")
  handle = function (input){
    name = input
    tell("welcome, " + name)
    Field()
  }
}

function Field() {
  tell("you awaken after hearing the strange voice fade into the wind, but find yourself in a field of rubble.")
  tell("you also see a what seems to be massive castle in the background, with sounds of life bustilling within.")
  tell("but when you turn around to see what lies behind you, you see a massive spaceship in ruins.")
  handle = function (input) {
    if (input == "castle") {
        castle()
    } else if (input == "spaceship") {
        ship()
    } else {
        tell("!@#%#^*&%&(^*%)((&)%%$##@#$%^.")  
    } 
  }
}

function castle() {
  tell("as you begin to walk towards the castle you hear sounds east of you, as if a battle was happening close by.")
  handle = function (input) {
    if (input == "Keep walking") {
        keep_walking() 
    } else if (input == "Investigate gunfire"){
        investigate_noises()
    } else{
        tell("!@#%#^*&%&(^*%)((&)%%$##@#$%^.")
    }

  } 
}

function spaceship() {
  tell("you walk to the spaceship and see a massive machine underneath all the rubble. sadly its to big to pull it out.")
  handle = function (input) {
    if (input == "Keep walking") {
      
    }
  }

}
//---------------------------
Hello()
