let randomPlay = [`rock`, `paper`, `scissors`]; //Array of choices.
let bufferP = `0`;
let bufferC = `0`;
let result = document.querySelector(`.result`);
let playerScore = document.querySelector(`.playerScore`);
let compScore = document.querySelector(`.compScore`);
let mHistory = document.querySelector(`.matchHistoryResult`);
let matchHistory = [];

//Events for buttons.
const buttonRock = document.querySelector(`.rock`);
buttonRock.addEventListener(`click`, function() {
    computerPlay();   
    compRock();
});

const buttonPaper = document.querySelector(`.paper`);
buttonPaper.addEventListener(`click`, function() {
    computerPlay();   
    compPaper();
});

const buttonScissors = document.querySelector(`.scissors`)
buttonScissors.addEventListener(`click`, function() {
    computerPlay();   
    compScissors();
});

// Value = random of rock, paper, scissors.
function computerPlay() {
    value = (randomPlay[Math.floor(Math.random() * randomPlay.length)]);
    return value;
};

//Handles different outcomes for each button.
function compRock() {
    if (value == `paper`) 
        countCompWin();
    else if (value == `rock`)
        equal();
    else 
        countPlayerWin();
};

function compPaper() {
    if (value == `scissors`)
        countCompWin();
    else if (value == `paper`)
        equal();
    else 
        countPlayerWin();
};

function compScissors() {
    if (value == `rock`) 
        countCompWin();
    else if (value == `scissors`)
        equal();
    else 
        countPlayerWin();
}; 

function countPlayerWin() {
    playerScore.innerHTML = ++bufferP;    
    result.innerHTML = `Computer got ${value}, you won!`;
    result.style.color = `darkgreen`;
    matchHistory.unshift(result.innerHTML);
    showMatchHistory();
}

function equal() {     
    result.innerHTML = `Computer got ${value}, Equal!`;
    result.style.color = `yellow`;
    matchHistory.unshift(result.innerHTML);
    showMatchHistory();
}

function countCompWin() {
    compScore.innerHTML = ++bufferC;    
    result.innerHTML = `Computer got ${value}, computer won!`;
    result.style.color = `red`;
    matchHistory.unshift(result.innerHTML);
    showMatchHistory();
}

let text;
function showMatchHistory() {
    text = "<ul>";
    for (let i = 0; i < matchHistory.length; i++) {
        text +="<li>" + matchHistory[i] + "</li>";
    }
    text += "</ul>";
    mHistory.innerHTML = text;
}
