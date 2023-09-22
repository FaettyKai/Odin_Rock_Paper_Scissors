const rock = document.querySelector("#rock")
rock.addEventListener("click", () => {
  r = "rock"
  console.log(r)
  console.log(playGame())
  return playGame() === r ? alert("draw")
  :playGame() === "paper" ? alert("Hah. You suck.")
  :playGame() === "scissors" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

const paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
  p = "paper"
  console.log(p)
  console.log(playGame())
  return playGame() === p ? alert("draw")
  :playGame() === "paper" ? alert("Hah. You suck.")
  :playGame() === "scissors" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
  s = "scissors"
  console.log(s)
  console.log(playGame())
  return playGame() === s ? alert("draw")
  :playGame() === "paper" ? alert("Hah. You suck.")
  :playGame() === "scissors" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

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

var slideSource = document.getElementById("slideSource")

document.getElementById("game").onclick = function () {
  slideSource.classList.toggle("fade")
  game.classList.toggle("fade")
}

playGame = (computerSelection) => {
  computerSelection = cpu()
  return computerSelection 
}