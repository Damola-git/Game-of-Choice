function getComputerChoice(){
    const choices =['rock', 'paper', 'scissors'];
    const randomChoice= Math.floor(Math.random() * choices.length);
    return choices[randomChoice];


}

function determineWinner(playerChoice, computerChoice){
    
   if (playerChoice === computerChoice){
    return ("It's a tie!");
   }
   else if ((playerChoice=== "rock" && computerChoice === "scissors") ||
            (playerChoice=== "scissors" && computerChoice === "paper") ||
           (playerChoice=== "paper" && computerChoice === "rock")){
            return "Player wins"
           }
           else{
            return("computer wins");
           }

}

function playGame(){
    const playerChoice = window.prompt('Enter rock, paper or scissors').trim().toLowerCase();
    const computerChoice = getComputerChoice();

    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        window.alert("please choose rock or paper or scissors");
    }
    else {
        const result = determineWinner(playerChoice, computerChoice);
        window.alert(`you chose ${playerChoice}/ the engine chose ${computerChoice}/ result is ${result}`)
    }
}

playGame();
