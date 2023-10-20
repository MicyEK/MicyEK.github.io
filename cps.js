if (localStorage.stgcps >= 0){
    cps = Number(localStorage.stgcps);
} else {
    cps = 0;
}

setInterval(clickauto, 1000);

function clickauto() {
  const d = new Date();
  score = score + cps;
  document.querySelector("h1").innerHTML=score
    localStorage.stgscore = score;
}