function number(x) {
	x = Math.floor(Math.random() * 3) + 1
  return x
}

function computerSelection() {
	if(number() === 1)
  	y = "rock";
  else if(number() === 2)
  	y = "paper";
  else 
  	y = "scissors"
  return y;
}


function playerSelection() {
	x = prompt("what's your selection?")
 	if(x != "rock" || x != "paper" || x != "scissors")
  	x = "error"
  return x
}

console.log(playerSelection())
