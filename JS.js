let opponent = {};
const players = { xPlacment: [], oPlacment: [] };
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
        const input2 = document.querySelector("#oPlayer");
        const input1 = document.querySelector("#xPlayer");

        play.addEventListener("click", function () {
          if (!(input1.validity.valid || input2.validity.valid)) {
            const emailError = document.querySelector(".error");
            emailError.textContent = "enter both names to proceed";
          } else if (input1.validity.valid && input2.validity.valid) {
            players.xPlayer = input1.value;
            players.oPlayer = input2.value;
            console.log(players);
            playersNames.style.display = "none";
            //display gameBoard
            const gameBoard = document.querySelectorAll(".gameboard > div");
            gameBoard.forEach((item) => (item.style.display = "grid"));
            document.querySelector("#pA").textContent = players.xPlayer + "(x)";
            document.querySelector("#pB").textContent = players.oPlayer + "(o)";
            playrules();
          }
        });
      }
    })
  );
};

let playerSign = "❌";
opponentPicking();
const gameBoardcells = document.querySelectorAll(".gameboard >div");
function playrules() {
  const gameBoardcells = document.querySelectorAll(".gameboard >div");
  gameBoardcells.forEach((item) =>
    item.addEventListener("click", function (e) {
      console.log(e.target);

      if (e.currentTarget.textContent == "⭕") {
      } else if (e.currentTarget.textContent == "❌") {
      } else if (e.currentTarget.textContent == "") {
        if (playerSign == "❌") {
          playerSign = "⭕";
          players.oPlacment.push(e.currentTarget.id);
        } else {
          playerSign = "❌";

          players.xPlacment.push(e.currentTarget.id);
        }

        console.log(players.xPlacment);
        console.log(players.oPlacment);
        e.currentTarget.textContent = playerSign;
        checkWinner(e);
      }
    })
  );
}
const checkWinner = function () {
  const winConditions = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
  ];

  if (
    winConditions.filter((items) =>
      items.every((item) => players.xPlacment.includes(item))
    ).length != 0
  ) {
    console.log("the winner is" + players.xPlayer);
  } else if (
    winConditions.filter((items) =>
      items.every((item) => players.oPlacment.includes(item))
    ).length != 0
  ) {
    console.log("the winner is " + players.oPlayer);
  }
};
