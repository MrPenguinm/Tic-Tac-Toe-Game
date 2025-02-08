// *[1] Get All Elements
let gameMessage = document.querySelector(".head");
let currentPlayer = "X";
let boardCells = [];
let restAllplay = document.getElementById("Rest");
const clickSound = new Audio("pen.m4a");
// =====================================================
// *[2] Handle Cell Click
function handleCellClick(cellId) {
  let selectedCell = document.getElementById(cellId);

  if (selectedCell.innerHTML === "") {
    selectedCell.innerHTML = currentPlayer;

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameMessage.innerHTML = `دور اللاعب: ${currentPlayer}`;

    checkForWinner();
  }
}
// *[3] Check for Winner
function checkForWinner() {
  for (let i = 1; i < 10; i++) {
    boardCells[i] = document.getElementById("item" + i).innerHTML;
  }

  let winningPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let pattern of winningPatterns) {
    let [a, b, c] = pattern;
    if (
      boardCells[a] === boardCells[b] &&
      boardCells[b] === boardCells[c] &&
      boardCells[a] !== ""
    ) {
      announceWinner(a, b, c);
      return;
    }
  }
  //*[4] Check for Draw
  checkForDraw();
}
// *[3] Is player is Win
function announceWinner(a, b, c) {
  gameMessage.innerHTML = `🎉 اللاعب ${boardCells[a]} فاز`;
  // Style the sq wind
  document.getElementById("item" + a).classList.add("shake");
  document.getElementById("item" + b).classList.add("shake");
  document.getElementById("item" + c).classList.add("shake");
  let winningStyle =
    "transform: scale(1.05); border-radius: 6px; box-shadow: 0 2px 10px black; background-color:#FFE31A;";
  document.getElementById("item" + a).style.cssText = winningStyle;
  document.getElementById("item" + b).style.cssText = winningStyle;
  document.getElementById("item" + c).style.cssText = winningStyle;

  setTimeout(() => {
    location.reload();
  }, 7500);

  clickSound.play();
}
// *[4] is players draw
function checkForDraw() {
  let isBoardFull = true;

  for (let i = 1; i < 10; i++) {
    if (document.getElementById("item" + i).innerHTML === "") {
      isBoardFull = false;
      break;
    }
  }

  if (isBoardFull) {
    gameMessage.innerHTML = "⚖️ تعادل";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
// *[6] Reset Game
restAllplay.addEventListener("click", () => {
  for (let i = 1; i < 10; i++) {
    let cell = document.getElementById("item" + i);
    cell.innerHTML = "";
    cell.classList.remove("shake");
    cell.style.cssText = "";
  }

  boardCells = [];
  currentPlayer = "X";
  gameMessage.innerHTML = `دور اللاعب: ${currentPlayer}`;

  clickSound.pause();
  clickSound.currentTime = 0;
});
