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
	z = prompt("What is your selection?")
  l = z.toLowerCase()
  return l
}

function playRound(playerSelection, computerSelection) {
  playerSelection = player()
  computerSelection = cpuSelection()
  console.log(playerSelection, computerSelection)
  if(playerSelection === "rock" && computerSelection === "paper" ||
  	 playerSelection === "paper" && computerSelection === "scissors" ||
     playerSelection === "scissors" && computerSelection === "rock")
     		return alert("Hah, you suck pleb")
  else if(playerSelection === "rock" && computerSelection === "scissors" ||
  	 playerSelection === "paper" && computerSelection === "rock" ||
     playerSelection === "scissors" && computerSelection === "paper")
     		return alert("tch. you got lucky this time")
  else if(playerSelection === computerSelection)	
   			return alert("draw. you're only delaying the inevitable")
  else
  			return alert("what? do you know how to play a child's game")
}



