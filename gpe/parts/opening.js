const s = require('storyeng')

s.parts.Start = {
    onenter: "Awaken new born, and claim that of your birth right",
    oninput: "Name" 
}

s.parts.Name = {
    onenter: "what will your name be?",
    oninput: e => {
        s.data.name = e.line
        return 'Race'
    },
    onleave: e => `interesting, ${s.data.name}`
}

const races = `Choose your race ...

   zerg - 
   protoss - 
   human - 
   sangheilli -
   ork - ruthless fighters and scavangers
   tau - 
   eldar - warriors of the warp
   undead -
   chaos - those of death and carnage
   lizzard -
   machine -
   infected -
   craver -
   draken -
   keadren -
   elemental - 
   scentients -




   
`

s.parts.Race = {
    onenter: e => {
        s.show(races)
    },
    oninput: e => {
        switch (e.lower){
            case 'fight':
            case 'figher':
            case 'bash their head in':
            case 'fighter':
                s.tell('fighter eh')
                s.data.class = 'fighter'
                break
            case 'mage':
                break
            default:
                s.tell("Wha?")
        }
    }
}