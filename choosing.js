function app(){
    if(document.getElementById("counter").checked){
        window.location.href = "simple_projects/counter/cnt.html";
    }else if(document.getElementById("random_guess").checked){
        window.location.href = "simple_projects/random_guess/guess.html";
    }else if(document.getElementById("calculater").checked){
        window.location.href = "calculater.html";
    }else{
        alert("please choose an option");
    }
}

document.getElementById("submit2").onclick = app;