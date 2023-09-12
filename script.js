function number(x) {
	x = Math.floor(Math.random() * 3) + 1
  return x
}

function cpuSelection(y) { 
	if(number() === 1)
  	y = "rock"
  else if(number() === 2)
  	y = "paper"
  else 
  	y = "scissors"
  return y
}

function player() {
	z = prompt("what is your selection?")
	if(z === "rock" || z === "paper" || z === "scissors")
  	return z
  else
  	return alert("do you not know how to play?")
}


function playRound(playerSelection, computerSelection) {
  playerSelection = player()
  computerSelection = cpuSelection()
  if(playerSelection === computerSelection) 
  	return alert("draw")
  else if(playerSelection != computerSelection)
  	return alert("no draw")
}

