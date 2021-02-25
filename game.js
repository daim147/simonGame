const buttonColor = ["red", "blue", "green", "yellow"];
let myPattern = []
let gamePattern = []
let level = 0
let gameLevel = document.getElementById("level-title")

const buttons = document.querySelectorAll(".btn")
gameLevel.addEventListener("click", randomNumber)
document.addEventListener("keydown", randomNumber)

function randomNumber() {
    level++
    gameLevel.innerText = ` level  ${level}`
    let random = Math.floor(Math.random() * 4)
    let randomChoosenColor = buttonColor[random]
    const colorrandom = document.getElementById(randomChoosenColor)

    addingPressClass(colorrandom)

    gamePattern.push(randomChoosenColor)
    console.log(gamePattern, "  GAme Pattern")
    playSound(`${randomChoosenColor}`)


}




function checkAnswer() {
    if (gamePattern[myPattern.length - 1] === myPattern[myPattern.length - 1]) {
        if (gamePattern.length === myPattern.length) {

            setTimeout(() => {
                randomNumber()
            }, 1000);
            myPattern = []

        }


    } else {
        playSound("wrong")
        document.querySelector("body").classList.add("game-over")
        gameLevel.innerText = `Game Over , Press any key to Start game`
        gamePattern = []
        myPattern = []
        setTimeout(()=>{

            document.querySelector("body").classList.remove("game-over")
        },2000)
        
        
        level = 0

    }
}

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const buttonId = this.id
        myPattern.push(buttonId)
        console.log(myPattern, "  My Pattern")
        addingPressClass(button)
        addingSound(button)
        checkAnswer()

    })
})


function addingPressClass(button) {
    button.classList.add("pressed")
    setTimeout(() => {
        button.classList.remove("pressed")
    }, 700)
}


function addingSound(button) {
    if (button.classList.contains("red")) {
        playSound("red")
    } else if (button.classList.contains("yellow")) {

        playSound("yellow")
    } else if (button.classList.contains("green")) {
        playSound("green")
    } else {
        playSound("blue")
    }
}

function playSound(colour) {
    var audio = new Audio(`./sounds/${colour}.mp3`);
    audio.play();
}
