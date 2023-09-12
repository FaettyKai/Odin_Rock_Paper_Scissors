function getRandom(x) {
	choice = Math.floor(Math.random()*3) + 1;
  return choice
}

function getComputerChoice(y) {
	if(getRandom() === 1)
  	y = "rock"
  else if(getRandom() === 2)
  	y = "paper"
  else
  	y = "scissors"
  return y
}

function playerSelection(x) {
	selection = prompt("what is your selection?")
  x = selection
}


function game(playerSelection, getComputerChoice) {
	alert("Rock, Paper, Scissors. What's your move?")
  playerSelection();
  getComputerChoice();
  if(playerSelection() === getComputerChoice())
  	alert("It's a draw")
  if(playerSelection() === "rock" && getComputerChoice() === "scissors")
  	alert("you win this time")
}

console.log(getComputerChoice)