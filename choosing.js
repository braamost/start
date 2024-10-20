function app(){
    if(document.getElementById("counter").checked){
        window.location.href = "cnt.html";
    }else if(document.getElementById("random_guess").checked){
        window.location.href = "guess.html";
    }else if(document.getElementById("calculater").checked){
        window.location.href = "calculater.html";
    }else{
        alert("please choose an option");
    }
}

document.getElementById("submit2").onclick = app;
