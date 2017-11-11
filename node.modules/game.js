const parts = {
    "welcome": require("welcome"),
    "name": require("name")
}

let current = ""

function tell(text) {
    console.log(text)
}

function start(part){
    go(part)
}

function go(part) {
    current = part
    parts[current].onenter
}

module.exports = {
    tell: tell,
    start: start,
    go: go

}