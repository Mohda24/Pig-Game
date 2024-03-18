

// check for player
let IsPlayer1=true;
// Function of rull
let rolle = function(){
    let Current=document.querySelector(".player-active .current p");
    let Score=document.querySelector(".player-active p:first-of-type");
    let player1=document.querySelector(".player1");
    let player2=document.querySelector(".player2");

    myrandomroll= Math.floor(Math.random() * 6) + 1
    myimg = document.querySelector(".img img")
    myimg.src=`img/dice-${myrandomroll}.png`
    
        if(myrandomroll!=1){
            Current.textContent=(myrandomroll+parseInt(Current.textContent))
        }
        else{
            Current.textContent=0
            if(IsPlayer1){
                player1.classList.remove("player-active")
                player2.classList.add("player-active")
                IsPlayer1=false
            }
            else{
                player2.classList.remove("player-active")
                player1.classList.add("player-active")
                IsPlayer1=true
            }
        }
    

}
let roll=document.querySelector(".roll");
roll.addEventListener("click",rolle);
// Function of hold
let btnhold=document.querySelector(".hold");
function hold(){
    let Current=document.querySelector(".player-active .current p");
    let Score=document.querySelector(".player-active p:first-of-type");
    let player1=document.querySelector(".player1");
    let player2=document.querySelector(".player2");
    Score.textContent=parseInt(Score.textContent)+parseInt(Current.textContent);
        Current.textContent=0;
    if(parseInt(Score.textContent)<100){
        if(IsPlayer1){
            player1.classList.remove("player-active")
            player2.classList.add("player-active")
            IsPlayer1=false
        }
        else{
            player2.classList.remove("player-active")
            player1.classList.add("player-active")
            IsPlayer1=true
        }
    }
    else{
        roll.removeEventListener("click",rolle);
        btnhold.removeEventListener("click",hold)
        document.querySelector("section.player-active").style.backgroundColor="#5dff5d"
        
    }
    

}
btnhold.addEventListener("click",hold);
// New game function
let Newgame = document.querySelector(".new-game").addEventListener("click",function(){
    if(IsPlayer1){
        document.querySelector(".player1").classList.add("player-active")
    }
    else{
        document.querySelector(".player1").classList.add("player-active")
        document.querySelector(".player2").classList.remove("player-active")

        IsPlayer1=true
    }
    document.querySelector(".player-active").style.backgroundColor="rgba(255, 255, 255, 0.4)"
    document.querySelector(".player1 .current p").textContent=0;
    document.querySelector(".player2 .current p").textContent=0;
    document.querySelector(".player1 p:first-of-type").textContent=0;
    document.querySelector(".player2 p:first-of-type").textContent=0;
    roll.addEventListener("click",rolle);
    btnhold.addEventListener("click",hold);
});