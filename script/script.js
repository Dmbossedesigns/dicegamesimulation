

var statone = "statone";
var stattwo = "stattwo";


function game() {

    let playerone = randgenerator();
    let playertwo = randgenerator()
    let playeroneclass = "player-one";
    let persontwoclas = "palyer-two"
    if (playerone === 1) {


        console.log(document.querySelector("#p1").className = 'diceone')
        console.log(playeroneclass = "diceone")

    }

    else if (playerone === 2) {

        document.querySelector("#p1").className = 'dicetwo'
        playeroneclass = "dicetwo"

    } else if (playerone === 3) {

        document.querySelector("#p1").className = 'dicethre'
        playeroneclass = "dicethre"
    } else if (playerone === 4) {

        document.querySelector("#p1").className = 'dicefor'
        playeroneclass = "dicefor"
    } else if (playerone === 5) {

        document.querySelector("#p1").className = 'dicefive'
        playeroneclass = "dicefive"
    } else if (playerone === 6) {

        document.querySelector("#p1").className = 'dicesix'
        playeroneclass = "dicesix"
    }


    if (playertwo === 1) {


        console.log(document.querySelector("#p2").className = 'diceone')
        console.log(persontwoclas = "diceone")

    }

    else if (playertwo === 2) {

        document.querySelector("#p2").className = 'dicetwo'
        persontwoclas = "dicetwo"

    } else if (playertwo === 3) {

        document.querySelector("#p2").className = 'dicethre'
        persontwoclas = "dicethre"
    } else if (playertwo === 4) {

        document.querySelector("#p2").className = 'dicefor'
        persontwoclas = "dicefor"
    } else if (playertwo === 5) {

        document.querySelector("#p2").className = 'dicefive'
        persontwoclas = "dicefive"
    } else if (playertwo === 6) {

        document.querySelector("#p2").className = 'dicesix'
        persontwoclas = "dicesix"
    }



    if (playerone > playertwo) {
        console.log("player one win")
        document.querySelector("#img1").classList.replace(statone, "win")
        document.querySelector("#img2").classList.replace(stattwo, "loose")
        document.querySelector(".img-h11").innerHTML = "WINNER";
        document.querySelector(".img-h12").innerHTML = "LOOSER";
        statone = "win";
        stattwo = "loose";
    } else if (playertwo > playerone) {
        console.log("player two win")
        document.querySelector("#img2").classList.replace(stattwo, "win")
        document.querySelector("#img1").classList.replace(statone, "loose")
        document.querySelector(".img-h11").innerHTML = "LOOSER";
        document.querySelector(".img-h12").innerHTML = "WINNER";
        statone = "loose";
        stattwo = "win";
    } else if (playerone === playertwo) {
        document.querySelector("#img2").classList.replace(stattwo, "draw")
        document.querySelector("#img1").classList.replace(statone, "draw")
        document.querySelector(".img-h11").innerHTML = "DRAW";
        document.querySelector(".img-h12").innerHTML = "DRAW";
        statone = "draw";
        stattwo = "draw";
    }


}


function randgenerator() {
    return Math.floor(Math.random() * 6 + 1)
}