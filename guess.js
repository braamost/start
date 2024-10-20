let x = Math.floor(Math.random() *100) +1;

let guess;
let nOfGuesses = 1;

function check_guess(){
    guess = document.getElementById("guess").value;
    guess = Number(guess);
    if(isNaN(guess)){
        document.getElementById("screen").innerHTML = "please enter a number!";
    }
    else if(guess < 1 || guess > 100){
        document.getElementById("screen").innerHTML = "the number should be between 1 and 100!";
    }
    else if(guess == x){
        alert(`correct!\nyou won after ${nOfGuesses} guesses`);
        window.location.reload();
    }
    else if(guess > x){
        document.getElementById("screen").innerHTML = "lower!";
        nOfGuesses++;
    }
    else if(guess < x){
        document.getElementById("screen").innerHTML = "higher!";
        nOfGuesses++;
    }
}

function reset(){
    window.location.reload();
}

document.getElementById("submit").onclick = check_guess;

document.getElementById("reset").onclick = reset;
