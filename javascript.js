
let humanScore = 0;
let computerScore = 0;

//const computerChoice = getComputerChoice();

function getHumanChoice(){
    //let humanChoice = prompt("¿Piedra, papel o tijeras?").toLowerCase();
    return new Promise(resolve => {
    const piedra = document.querySelector("#Piedra");
    const papel = document.querySelector("#Papel");
    const tijeras = document.querySelector("#Tijeras");

    const seleccion = (eleccion) => {
    piedra.removeEventListener("click", rock);
    papel.removeEventListener("click", paper);
    tijeras.removeEventListener("click", scissors);
    resolve(eleccion)
    }

    const rock = () => seleccion("piedra");
    const paper = () => seleccion("papel");
    const scissors = () => seleccion("tijeras");

    piedra.addEventListener("click", rock);
    papel.addEventListener("click", paper);
    tijeras.addEventListener("click", scissors);
});
}

async function playRound(humanChoice,computerChoice){
    
    if (humanChoice === "piedra" && computerChoice === 1){
            //console.log("¡Empate! El rival sacó piedra.");
            const clickPiedra = document.createElement('h1');
            clickPiedra.textContent = "¡Empate! El rival sacó piedra.";
            consola.appendChild(clickPiedra);
        }else if(humanChoice === "piedra" && computerChoice === 2){
            //console.log("¡Perdiste! El rival sacó papel.");
            const clickPiedra = document.createElement('h1');
            clickPiedra.textContent = "¡Perdiste! El rival sacó papel.";
            consola.appendChild(clickPiedra);
            computerScore++;
        }else if(humanChoice === "piedra" && computerChoice === 3){
            //console.log("¡Ganaste! El rival sacó tijeras.");
            const clickPiedra = document.createElement('h1');
            clickPiedra.textContent = "¡Ganaste! El rival sacó tijeras.";
            consola.appendChild(clickPiedra);
            humanScore++;
        }
    if (humanChoice === "papel" && computerChoice === 1){
                //console.log("¡Ganaste! El rival sacó piedra.");
                const clickPapel = document.createElement('h1');
                clickPapel.textContent = "¡Ganaste! El rival sacó piedra.";
                consola.appendChild(clickPapel);
                humanScore++;
         }else if(humanChoice === "papel" && computerChoice === 2){
                //console.log("¡Empate! El rival sacó papel.")  
                const clickPapel = document.createElement('h1');
                clickPapel.textContent = "¡Empate! El rival sacó papel.";
                consola.appendChild(clickPapel);  
        }else if(humanChoice === "papel" && computerChoice === 3){
                //console.log("¡Perdiste! El rival sacó tijeras.");
                const clickPapel = document.createElement('h1');
                clickPapel.textContent = "¡Perdiste! El rival sacó tijeras.";
                consola.appendChild(clickPapel);  
                computerScore++;
        }
    if (humanChoice === "tijeras" && computerChoice === 1){
                //console.log("¡Perdiste! El rival sacó piedra.");
                const clickTijeras = document.createElement('h1');
                clickTijeras.textContent = "¡Perdiste! El rival sacó piedra.";
                consola.appendChild(clickTijeras);  
                computerScore++;
        }else if(humanChoice === "tijeras" && computerChoice === 2){
                //console.log("¡Ganaste! El rival sacó papel.");
                const clickTijeras = document.createElement('h1');
                clickTijeras.textContent = "¡Ganaste! El rival sacó papel.";
                consola.appendChild(clickTijeras);  
                humanScore++;    
         }else if(humanChoice === "tijeras" && computerChoice === 3){
                //console.log("¡Empate! El rival sacó tijeras.");
                const clickTijeras = document.createElement('h1');
                clickTijeras.textContent = "¡Empate! El rival sacó tijeras.";
                consola.appendChild(clickTijeras);  
        }
    console.log(`Puntuación -> Tú: ${humanScore}, Rival: ${computerScore}`);
    }


function getComputerChoice(){
    let computerChoice = Math.floor((Math.random() * 3) + 1);
        return computerChoice;
}



    //rock.addEventListener("click", () => {
    //return humanChoice = "piedra";})

    //paper.addEventListener("click", () => {
    //return humanChoice = "papel";})
    
    //scissors.addEventListener("click", () => {
    //return humanChoice = "tijeras";})   
    //}


async function playGame(){
    const rondaDiv = document.getElementById("ronda");
    //let i = 1;
    //while(i <= 5 ){
    for (let i = 1; i <= 5; i++){
        //console.log(`Ronda ${i}`);
        rondaDiv.textContent = `Ronda ${i}`;
        const humanSelection = await getHumanChoice();
        const computerSelection = getComputerChoice();
        await playRound(humanSelection, computerSelection);
        
    }

    //console.log("Resultado final")
    const final = document.createElement('h1');
    if (humanScore > computerScore){
        final.textContent = ("¡Felicidades! Ganaste a la máquina.");
    }else if (humanScore < computerScore){
        final.textContent = ("¡Cagaste! Te ganó la máquina.")
    }else {
        final.textContent = ("¡Cachis! Es un empate.")
    }
    resultado.appendChild(final)
}

const resultado = document.querySelector("#resultado");




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


const output = document.querySelector('.output');
output.textContent = "";

const countdown = [ "10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "Blastoff"] 

let i = 10;

while ( i < countdown.length ){
	if ( i === countdown.length. -1){
	  output.textContent += `${countdown[-1]}`;
	} else {
	  output.textContent += `${countdown[I]}`;
	}

console.log(countdown);

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
*/