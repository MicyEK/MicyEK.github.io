if (localStorage.stgscore >= 0){
    score = Number(localStorage.stgscore);
} else {
    score = 0;
}

if (localStorage.stgpower >= 0){
    power = Number(localStorage.stgpower);
} else {
    power = 1;
}

window.onload = function exampleFunction() { 
    score = Number(localStorage.stgscore);
    power = Number(localStorage.stgpower);
    document.querySelector("h1").innerHTML=score
} 

function hello() {
    score = score + power;

    document.querySelector("h1").innerHTML=score
    localStorage.stgscore = score;
            
    if(score == 7122010){
        alert("You have found my birthday July 12 2010")
    }
}

function powera() {
if(score>9){
    power ++;
    score = score - 10;
    document.querySelector("h1").innerHTML=score
    localStorage.stgpower = power;
    } else{
        alert("You need a score of 10 to buy this upgrade.")
    }
}

function powerb() {
    if(score>99){
        power = power + 10;
        score = score - 100;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
    } else{
        alert("You need a score of 100 to buy this upgrade.")
    }
}

function powerc() {
    if(score>999){
        power = power + 100;
        score = score - 1000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
    } else{
        alert("You need a score of 1000 to buy this upgrade.")
    }
}

function powerd() {
    if(score>9999){
        power = power + 1000;
        score = score - 10000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
    } else{
        alert("You need a score of 10000 to buy this upgrade.")
    }
}

function powere() {
    if(score>99999){
        power = power + 10000;
        score = score - 100000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
    } else{
        alert("You need a score of 100000 to buy this upgrade.")
    }
}

function powerf() {
    if(score>999999){
        power = power + 100000;
        score = score - 1000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
    } else{
        alert("You need a score of 1000000 to buy this upgrade.")
    }
}