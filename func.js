let current =0;

function decrease(){
    current--;
    document.getElementById("screen").textContent = current;
}

function reset(){
    current =0;
    document.getElementById("screen").textContent = current;
}

function increase(){
    current++;
    document.getElementById("screen").textContent = current;
}

document.getElementById("decrease").onclick = decrease;

document.getElementById("reset").onclick = reset;

document.getElementById("increase").onclick = increase;