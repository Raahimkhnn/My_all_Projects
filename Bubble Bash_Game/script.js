var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewhit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}
function makebubble(){
var clutter = "";

for(var i = 1; i<177; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer() {
    var timerint = setInterval(function (){
        if(timer>0){
        timer--;
        document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over<h1>`;
        }
    }
    , 1000);
}
document.querySelector("#pbtm")
.addEventListener("click",function (details){ 
    var clickednumber = Number(details.target.textContent);
    if(clickednumber === hitrn){
        increaseScore();
        makebubble();
        getNewhit();

    }
})
runtimer();
makebubble();
getNewhit();
increaseScore();