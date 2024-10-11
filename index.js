function getComputerChoice(){
    const choices =['rock', 'paper', 'scissors'];
    const randomChoice= Math.floor(Math.random() * choices.length);
    console.log(choices[randomChoice]);

}
 getComputerChoice();

function playerChoice(){
    const userChoice = window.prompt('Enter rock, paper or scissors');
    console.log(userChoice)

}
playerChoice()