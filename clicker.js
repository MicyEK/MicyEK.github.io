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
    localStorage.stgscore = score;
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
        localStorage.stgscore = score;
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
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 1K to buy this upgrade.")
    }
}

function powerd() {
    if(score>9999){
        power = power + 1000;
        score = score - 10000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 10K to buy this upgrade.")
    }
}

function powere() {
    if(score>99999){
        power = power + 10000;
        score = score - 100000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 100K to buy this upgrade.")
    }
}

function powerf() {
    if(score>999999){
        power = power + 100000;
        score = score - 1000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 1M to buy this upgrade.")
    }
}

function powerg() {
    if(score>9999999){
        power = power + 1000000;
        score = score - 10000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 10M to buy this upgrade.")
    }
}

function powerh() {
    if(score>99999999){
        power = power + 10000000;
        score = score - 100000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 100M to buy this upgrade.")
    }
}

function poweri() {
    if(score>999999999){
        power = power + 100000000;
        score = score - 1000000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 1B to buy this upgrade.")
    }
}

function powerj() {
    if(score>9999999999){
        power = power + 1000000000;
        score = score - 10000000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 10B to buy this upgrade.")
    }
}

function powerk() {
    if(score>99999999999){
        power = power + 10000000000;
        score = score - 100000000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 100B to buy this upgrade.")
    }
}

function powerl() {
    if(score>999999999999){
        power = power + 100000000000;
        score = score - 1000000000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 1T to buy this upgrade.")
    }
}

function powerm() {
    if(score>9999999999999){
        power = power + 1000000000000;
        score = score - 10000000000000;
        document.querySelector("h1").innerHTML=score
        localStorage.stgpower = power;
        localStorage.stgscore = score;
    } else{
        alert("You need a score of 10T to buy this upgrade.")
    }
}