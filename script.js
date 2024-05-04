// These varibales are used for counting score of user and computer
let userScore = 0;
let compScore = 0;

//Declare variable for choices
const choices = document.querySelectorAll('.choice');

//Showing  message in paragraph
const msg = document.querySelector('#msg');

//These Variables for counters of user and computer where counting  will be store  
const userCount = document.getElementById("user-score");
const compCount = document.getElementById("computer-score");

//Here we generate random computer number with math function of js
const genCompChoice = () => {
    let options = [
        "rock", "paepr", "scissors"
    ];
    const randmIdx = Math.floor(Math.random() * 3);
    return options[randmIdx];
}

//When game is draw then this message is shown.
const drawGame = () =>{
    msg.innerText = "Game is Drawn, play again";
    msg.style.color = "white";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        //Here user score is count and show in paragraph
        userScore++;
        userCount.innerText = userScore;
        //When user is win then this message will be show
        msg.innerText = `You Win, your ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
    }else{
        //Here Computer score is count and show in paragraph
        compScore++;
        compCount.innerText = compScore;
        //When Computer is win then this message will be show
        msg.innerText = `You Loose, ${compChoice} beats your ${userChoice}`;
        msg.style.color = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice  = genCompChoice();
    //Here when user and computer choices is same then draw game function is called.
    if (userChoice === compChoice) {
        drawGame();
    }else{
        //By defualt user value is true. 
        let userWin = true;
        //If user pick rock 
        if (userChoice === "rock") {
            // Then the remaining choices are paper and scissors if computer
            //pick paper then user is win and computer loose
            userWin = compChoice === "paper" ? false : true;
        }else
            //If user pick paper
            if (userChoice === "paper") {
            // Then the remaining choices are rock and scissors if computer
            //pick scissors then user is loose because scissors cut the papper
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //The remaining choices are scissors and paper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ( ) => {
        //User choice variable is declared and get choice with id name.
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
