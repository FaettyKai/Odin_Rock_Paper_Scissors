function random(x) {
	x = Math.floor(Math.random() * 3) + 1 
  return x
}

function cpuSelection(y) {
	if(random() === 1)
  	y = "rock"
  else if(random() === 2)
  	y = "paper"
  else
  	y = "scissors"
  return y 
}

function playerSelect() {
	prompt = prompt("what you pickin")
  if(prompt === "rock" || prompt === "paper" || prompt === "scissors")
  	return prompt
  else 
  	return alert("What. Don't tell me you dont know how to play Rock, Paper, Scissors")
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelect()
  computerSelection = cpuSelection()
  if(playerSelection === computerSelection)
  	return alert("draw.")
  else if((playerSelection === "rock" && computerSelection === "paper") || 
  				 (playerSelection === "paper" && computerSelection === "scissors") ||
           (playerSelection === "scissors" && computerSelection === "rock"))
  	return alert("hah. You suck loser") 	
  else if((playerSelection === "rock" && computerSelection === "scissors") || 
  				 (playerSelection === "paper" && computerSelection === "rock") ||
           (playerSelection === "scissors" && computerSelection === "paper"))
    return alert("pft. You got lucky")       
}
playRound()


