function getComputerChoice(){
    const choices =['rock', 'paper', 'scissors'];
    const randomChoice= Math.floor(Math.random() * choices.length);
    console.log(choices[randomChoice]);

}
 getComputerChoice();

function getPlayerChoice(){
    const userChoice = window.prompt('Enter rock, paper or scissors').trim().toLowerCase();
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        window.alert("please choose rock or paper or scissors")
    }
    else{
        console.log(userChoice)
    };
}
getPlayerChoice()
