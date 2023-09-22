const rock = document.querySelector("#fire")
rock.addEventListener("click", () => {
  f = "fire"
  console.log(f)
  console.log(playGame())
  return playGame() === f ? alert("draw")
  :playGame() === "water" ? alert("Hah. You suck.")
  :playGame() === "grass" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

const paper = document.querySelector("#grass")
paper.addEventListener("click", () => {
  g = "grass"
  console.log(g)
  console.log(playGame())
  return playGame() === g ? alert("draw")
  :playGame() === "fire" ? alert("Hah. You suck.")
  :playGame() === "water" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

const scissors = document.querySelector("#water")
scissors.addEventListener("click", () => {
  w = "water"
  console.log(w)
  console.log(playGame())
  return playGame() === w ? alert("draw")
  :playGame() === "grass" ? alert("Hah. You suck.")
  :playGame() === "fire" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

/*
number = (x) => {
  x = Math.floor(Math.random() * 8) +1
  return x
}

cpu = (y) => {
  return number() === 1 || number() === 2 ? y = "rock"
  :number() === 3 || number() === 4 || number() === 5 ? y = "paper"
  :number() === 6 || number() === 7 || number() === 8 ? y = "scissors"
  : y = "rock"
}
*/

function number() {
  const x = Math.floor(Math.random() * 8) + 1;
  return x;
}

function cpu() {
  const randomChoice = number();
  if (randomChoice === 1 || randomChoice === 2) {
    return "fire";
  } else if (randomChoice >= 3 && randomChoice <= 5) {
    return "grass";
  } else {
    return "water";
  }
}

var slideSource = document.getElementById("slideSource")

document.getElementById("game").onclick = function () {
  slideSource.classList.toggle("fade")
  game.classList.toggle("fade")
}

playGame = (computerSelection) => {
  computerSelection = cpu()
  return computerSelection 
}
