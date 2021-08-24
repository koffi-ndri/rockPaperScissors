const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error: invalid user input.');
  }
}

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return 'rock';

    case 1:
      return 'paper';

    case 2:
      return 'scissors';

    default:
      return 'Invalid';    
  }
}
function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'The game is a tie!';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won the game!';
    }else{
      return 'The user won the game!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won the game!';
    }else{
      return 'The user won the game!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won the game!';
    }else{
      return 'The user won the game!';
    }
  }
  if(userChoice === 'bomb'){
    return 'The user won the game!';
  }
}
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`User threw ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();