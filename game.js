import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from "figlet";
import ora from 'ora';
import readline from "node:readline/promises" //'node:readline' uses callbacks
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface({ input, output });

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); //for waiting

function getComputerInput(){
    let randomNumber = Math.floor(Math.random() * (3 - 1) + 1); //(max - min) + min

    if(randomNumber == 1){
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function getResult(player, computer){
    if (player === computer) {
        console.log(chalk.blue("It's a tie!"));
    } else if (
        player === "rock" && computer === "scissors" ||
        player === "scissors" && computer === "paper" ||
        player === "paper" && computer === "rock"
    ) {
        console.log(chalk.green("Player wins!"));
    } else {
        console.log(chalk.red("Computer wins!"));
    }

}

async function main() {
    let playerInput;
    let gamePlaying = true;
    let computerInput;
    const gameTitle = await figlet.text("ROCK PAPER SCISSORS");

    while(gamePlaying) {
        console.clear();
        console.log(gradient.pastel.multiline(gameTitle));

        while(true){
            
            playerInput = await rl.question("Enter option: (rock) (paper) (scissors) (exit)" + "\n");
            playerInput = playerInput.toLowerCase();

            if(
                playerInput === "rock" || 
                playerInput === "paper" || 
                playerInput === "scissors" || 
                playerInput === "exit"
            ){
                console.log()
                break;
            } else {
                console.log("Error: not an option." + "\n")
            }
           
        }

        if(playerInput === "exit"){
            const spinner = ora(chalk.gray("Exiting...")).start();
            await sleep(3000);
            spinner.stop();
            break;
        } else{
            console.log(chalk.gray(`Player chose ${playerInput}...`) + "\n");
            await sleep(3000);

            computerInput = getComputerInput();
            console.log(chalk.gray(`Computer chose ${computerInput}...`) + "\n");
            await sleep(3000);

            getResult(playerInput, computerInput);
            await sleep(3000);

        }


    }

    rl.close();

}

main();