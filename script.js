//  Start Loading
// Loading
window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");
    loader.classList.add("loading-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});
// End Loading

const Chinwi = new Audio("Winner.mp3");
const rolled = new Audio("rolled.mp3");
const Myswitch = new Audio("switch.mp3");

// check for player
let IsPlayer1 = true;

// Function of rull
let rolle = function () {
    roll.removeEventListener("click", rolle);
    let Current = document.querySelector(".player-active .current p");
    // let Score=document.querySelector(".player-active p:first-of-type");
    let player1 = document.querySelector(".player1");
    let player2 = document.querySelector(".player2");
    let cube = document.querySelector(".cube");

    cube.classList.remove("animation-1");
    cube.classList.add("animation-2");
    rolled.play();
    myrandomroll = Math.floor(Math.random() * 6) + 1;

    setTimeout(function () {
        cube.classList.remove("animation-2");
        for(i=1;i<=6;i++){
            if(cube.classList.contains(`show-${i}`)){
                cube.classList.remove(`show-${i}`)
            }
        }

        
        cube.classList.add(`show-${myrandomroll}`);
        if (myrandomroll != 1) {
        Current.textContent = parseInt(Current.textContent) + myrandomroll;
        } 
        // if roll == 1
        else {
        Current.textContent = 0;
        if (IsPlayer1) {
            player1.classList.remove("player-active");
            player2.classList.add("player-active");
            IsPlayer1 = false;
        } else {
            player2.classList.remove("player-active");
            player1.classList.add("player-active");
            IsPlayer1 = true;
        }
    }
    roll.addEventListener("click", rolle);
  }, 1600); // 3000 milliseconds = 3 seconds
};

let roll = document.querySelector(".roll");
roll.addEventListener("click", rolle);

// Function of hold
let btnhold = document.querySelector(".hold");
function hold() {
    
    let Current = document.querySelector(".player-active .current p");
    let Score = document.querySelector(".player-active p:first-of-type");
    let player1 = document.querySelector(".player1");
    let player2 = document.querySelector(".player2");
    Myswitch.play()
    Score.textContent = parseInt(Score.textContent) + parseInt(Current.textContent);
    Current.textContent = 0;
    if (parseInt(Score.textContent) < 20) {
        if (IsPlayer1) {
            player1.classList.remove("player-active");
            player2.classList.add("player-active");
            IsPlayer1 = false;
        } 
        else {
            player2.classList.remove("player-active");
            player1.classList.add("player-active");
            IsPlayer1 = true;
        }
        
}
    else {
        roll.removeEventListener("click", rolle);
        btnhold.removeEventListener("click", hold);
        document.querySelector("section.player-active").classList.add("winner");
        document.querySelector(".new-game").classList.add("myscale")
        Chinwi.play();
        }
}

btnhold.addEventListener("click", hold);

// New game function
let Newgame = document.querySelector(".new-game").addEventListener("click", function () {
    if (!IsPlayer1) {
        document.querySelector(".player1").classList.add("player-active");
        document.querySelector(".player2").classList.remove("player-active");
        document.querySelector(".player2").classList.remove("winner");
        IsPlayer1 = true;
        
    }

    document.querySelector(".player1 .current p").textContent = 0;
    document.querySelector(".player2 .current p").textContent = 0;
    document.querySelector(".player1 p:first-of-type").textContent = 0;
    document.querySelector(".player2 p:first-of-type").textContent = 0;
    document.querySelector(".player-active").classList.remove("winner");
    document.querySelector(".cube").classList.add("animation-1")
    roll.addEventListener("click", rolle);
    btnhold.addEventListener("click", hold);
    document.querySelector(".new-game").classList.remove("myscale")
}); 