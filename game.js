let playerHand;
let computerHand;
let player= document.querySelector(".player");
let computer=document.querySelector(".computer");
let result= document.querySelector(".winner");
let pScore= 0;
let cScore= 0;
let playerScore= document.querySelector(".playerScore p");
let computerScore= document.querySelector(".computerScore p");
let buttons= document.querySelectorAll("button");
let images= document.querySelectorAll(".machine img");


function decideWinner(player, computer){
    if(player=="paper" && computer=="rock" || player=="scissors" && computer == "paper" || player == "rock" && computer== "scissors"){
        result.style.visibility= "visible";
        result.style.backgroundImage= "linear-gradient(73deg, #0093E9 0%, #80D0C7 100%)";
        result.textContent= "Player wins !";
        pScore += 1;
        playerScore.textContent= pScore;
        computerScore.textContent=cScore;
        if(pScore == 5){
            buttons.forEach(function(b){
                b.disabled= true;
            })
            images.forEach(function(img){
                img.classList.add("disabled");
            })
        }
    }
    else if(computer == "paper" && player == "rock" || computer =="scissors" && player=="paper"|| computer=="rock" && player =="scissors"){
        result.style.visibility= "visible";
        result.style.backgroundImage= "linear-gradient(73deg, #e98800 0%, #cfae37 100%)";
        result.textContent="Computer wins!";
        cScore += 1;
        playerScore.textContent= pScore;
        computerScore.textContent=cScore;
        if(cScore == 5){
            buttons.forEach(function(b){
                b.disabled= true;
            })
            images.forEach(function(img){
                img.classList.add("disabled");
            })
         }
    }
    else if(player == "paper" && computer == "paper" || player =="rock" && computer== "rock" || player == "scissors" && computer=="scissors"){
        result.style.visibility= "visible";
        result.style.backgroundImage= "linear-gradient(180deg, #FBAB7E 0%, #F7CE68 50%, #1578dc 100%)";
        result.textContent ="The match ended in a draw ";
        pScore += 0;
        cScore += 0;
        playerScore.textContent= pScore;
        computerScore.textContent=cScore;
        if(pScore == 5 || cScore == 5){
            buttons.forEach(function(b){
                b.disabled= true;
            })
            images.forEach(function(img){
                img.classList.add("disabled");
            })
         }
    }
}

function randomComputerChoice(){
    const choices= ["paper", "scissors", "rock"];
    let rand= Math.floor(Math.random()*choices.length);
    computerHand= choices[rand];
}

function play(chosenBtn){
    if(chosenBtn == "rock"){
        playerHand= "rock";
    }
    else if(chosenBtn == "paper"){
        playerHand= "paper";
    }
    else if(chosenBtn =="scissors"){
        playerHand= "scissors";
    }
    randomComputerChoice();
    player.textContent= playerHand;
    computer.textContent= computerHand;
    decideWinner(playerHand, computerHand);
}

function startGame(){
    pScore=0;
    cScore=0;
    playerScore.textContent= pScore;
    computerScore.textContent=cScore;
    buttons.forEach(function(b){
        b.disabled= false;
    })
    images.forEach(function(img){
        img.classList.remove("disabled");
    })
    result.style.visibility= "hidden";
}
