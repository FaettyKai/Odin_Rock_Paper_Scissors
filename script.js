const rock = document.querySelector("#fire")  /* Selector for fire (charizard) */
rock.addEventListener("click", () => {
  f = "fire"
  console.log(f)
  console.log(playGame())
  return playGame() === f ? alert("draw")
  :playGame() === "water" ? alert("Hah. You suck.")
  :playGame() === "grass" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

const paper = document.querySelector("#grass")  /* Selector for grass (Bulbasaur) */
paper.addEventListener("click", () => {
  g = "grass"
  console.log(g)
  console.log(playGame())
  return playGame() === g ? alert("draw")
  :playGame() === "fire" ? alert("Hah. You suck.")
  :playGame() === "water" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

const scissors = document.querySelector("#water")  /* Selector for water (Squirtle) */
scissors.addEventListener("click", () => {
  w = "water"
  console.log(w)
  console.log(playGame())
  return playGame() === w ? alert("draw")
  :playGame() === "grass" ? alert("Hah. You suck.")
  :playGame() === "fire" ? alert("Tch. You got lucky this time.")
  : alert("What you scared")
})

number = (x) => {                                /* Generates random number for Cpu */
  x = Math.floor(Math.random() * 8) +1
  return x
}

cpu = (y) => {                                    /* Genereates cpu selection */
  return number() === 1 || number() === 2 ? y = "fire"
  :number() === 3 || number() === 4 || number() === 5 ? y = "grass"
  :number() === 6 || number() === 7 || number() === 8 ? y = "water"
  : y = "fire"
}

/*
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
*/
var slideSource = document.getElementById("slideSource")    /* for fade */

document.getElementById("game").onclick = function () {
  slideSource.classList.toggle("fade")
  game.classList.toggle("fade")
}

playGame = (computerSelection) => {                         /* logs computerSelection */
  computerSelection = cpu()
  return computerSelection 
}

playerScore = 0;
computerScore = 0;

function updateScore(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    alert("Draw");
  } else if (
    (computerSelection === "fire" && playerSelection === "grass") ||
    (computerSelection === "grass" && playerSelection === "water") ||
    (computerSelection === "water" && playerSelection === "fire")
  ) {
    alert("Computer wins");
    computerScore++;
  } else {
    alert("Player wins");
    playerScore++;
  }

  // Update the score display on the webpage
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}