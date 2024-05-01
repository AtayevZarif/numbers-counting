let body = document.querySelector("body")
let container = document.querySelector("#container")

let buttons = document.getElementsByClassName("buttons")
let mines = document.getElementById("mines")
let plus = document.getElementById("plus")
let restart = document.getElementById("restart")

let numberElement = document.getElementById("number")
let number = 0
numberElement.innerText = number


let plusFunction = () => {
    ++number
    numberElement.innerText = number
}

let minesFunction = () => {
    --number
    numberElement.innerText = number
}

let restartFunction = () => {
    number = 0
    numberElement.innerText = number
}


plus.addEventListener("click", plusFunction)
mines.addEventListener("click", minesFunction)
restart.addEventListener("click", restartFunction)


body.style.height = "100vh"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.alignItems = "center"

container.style.display = "flex"
container.style.alignItems = "center"
container.style.gap = "10px"

for (const button of buttons) {
    button.style.height = "50px"
    button.style.width = "50px"
    button.style.borderRadius = "100%"
    button.style.border = "2px solid gray"
    button.style.fontSize = "32px"
    button.style.textAlign = "center"
}

mines.style.background = "red"
plus.style.background = "green"