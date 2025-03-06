
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    
    if (humanChoice === "piedra" && computerChoice === 1){
            console.log("¡Empate! El rival sacó piedra.");
        }else if(humanChoice === "piedra" && computerChoice === 2){
            console.log("¡Perdiste! El rival sacó papel.");
            computerScore++;
        }else if(humanChoice === "piedra" && computerChoice === 3){
            console.log("¡Ganaste! El rival sacó tijeras.");
            humanScore++;
        }
    if (humanChoice === "papel" && computerChoice === 1){
                console.log("¡Ganaste! El rival sacó piedra.");
                humanScore++;
         }else if(humanChoice === "papel" && computerChoice === 2){
                console.log("¡Empate! El rival sacó papel.")    
        }else if(humanChoice === "papel" && computerChoice === 3){
                console.log("¡Perdiste! El rival sacó tijeras.");
                computerScore++;
        }
    if (humanChoice === "tijeras" && computerChoice === 1){
                console.log("¡Perdiste! El rival sacó piedra.");
                computerScore++;
        }else if(humanChoice === "tijeras" && computerChoice === 2){
                console.log("¡Ganaste! El rival sacó papel.");
                humanScore++;    
         }else if(humanChoice === "tijeras" && computerChoice === 3){
                console.log("¡Empate! El rival sacó tijeras.");
        }
    console.log(`Puntuación -> Tú: ${humanScore}, Rival: ${computerScore}`);
    }


function getComputerChoice(){
    let computerChoice = Math.floor((Math.random() * 3) + 1);
        return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("¿Piedra, papel o tijeras?").toLowerCase();
        return humanChoice;
}


function playGame(){

    for(let i = 1; i <= 5; i++){
        console.log(`Ronda ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Resultado final")
    if (humanScore > computerScore){
        console.log("¡Felicidades! Ganaste a la máquina.");
    }else if (humanScore < computerScore){
        console.log("¡Cagaste! Te ganó la máquina.")
    }else {
        console.log("¡Cachis! Es un empate.")
    }
}

playGame();



/*function playGame(){
console.log("Ronda 1");
    playRound(humanSelection, computerSelection);

    console.log("Ronda 2");
    playRound(humanSelection, computerSelection);

    console.log("Ronda 3");
    playRound(humanSelection, computerSelection);

    console.log("Ronda 4");
    playRound(humanSelection, computerSelection);

    console.log("Ronda 5");
    playRound(humanSelection, computerSelection);


/*let computer = getComputerChoice(3);
switch (computer) {
    case 1:
    console.log("Piedra");
break;
    case 2:
    console.log("Papel");
break;
    case 3:
    console.log("Tijeras");
}

let humanChoice = getHumanChoice();
*/

