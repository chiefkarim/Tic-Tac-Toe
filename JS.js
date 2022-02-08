let opponent = {};
const players = {};
let opponentPicking = function () {
  let buttons = [...document.querySelectorAll(".oponentbtn")];
  const opponentPickingDiv = document.querySelector(".opponentPicking");

  function hide() {
    opponentPickingDiv.classList.add("hide");
  }

  buttons.forEach((item) =>
    item.addEventListener("click", function (event) {
      if (event.target.innerText === "Computer") {
        if (opponentPickingDiv.childElementCount > 2) {
          const alert = document.querySelector(".alert");
          alert.setAttribute("style", "transform: scale(1.2);");
        } else {
          opponentPickingDiv.innerHTML +=
            "<h1 class='alert'>Not availabel at the moment</h1>";
          opponentPicking();
        }
      } else {
        opponent.opponent = event.target.innerText;
        console.log(opponent);
        hide();
        const showinut = document.querySelector("form");
        const playersNames = document.querySelector(".playersNames");
        playersNames.style.display = "grid";
        showinut.classList.add("active");
        const play = document.querySelector(".play");
        const input2 = document.querySelector("#sPlayer");
        const input1 = document.querySelector("#fPlayer");

        play.addEventListener("click", function () {
          if (!(input1.validity.valid || input2.validity.valid)) {
            const emailError = document.querySelector(".error");
            emailError.textContent = "enter both names to proceed";
          } else if (input1.validity.valid && input2.validity.valid) {
            players.fPlayer = input1.value;
            players.sPlayer = input2.value;
            console.log(players);
            playersNames.style.display = "none";
            //display gameBoard
            const gameBoard = document.querySelectorAll(".gameboard > div");
            gameBoard.forEach((item) => (item.style.display = "grid"));
            document.querySelector("#pA").textContent = players.fPlayer;
            document.querySelector("#pB").textContent = players.sPlayer;
            playrules();
          }
        });
      }
    })
  );
};
opponentPicking();
const gameBoardcells = document.querySelectorAll(".gameboard >div");
function playrules() {
  const gameBoardcells = document.querySelectorAll(".gameboard >div");
  gameBoardcells.forEach((item) =>
    item.addEventListener("click", function (e) {
      console.log(e.target);
      if ((e.currentTarget.innerText = "⭕")) {
        e.currentTarget.innerText = "❌";
      } else if ((e.currentTarget.innerText = "❌")) {
      } else if (e.currentTarget.innerText == "") {
      } else {
        e.currentTarget.innerText = "⭕";
      }
    })
  );
}
