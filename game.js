let turn = "X";
let gameOver = false;
const boxes = document.querySelectorAll(".box");
boxes.forEach((div) => div.addEventListener("click", makeMove));

function makeMove() {
  document.getElementById(this.id).textContent = turn;
  checkForWin();
  turn === "X" ? (turn = "O") : (turn = "X");
  if (gameOver == false) {
    document.getElementById("currentTurn").textContent = turn;
  }
}

function checkForWin() {
  let box1 = document.getElementById("box1").textContent;
  let box2 = document.getElementById("box2").textContent;
  let box3 = document.getElementById("box3").textContent;
  let box4 = document.getElementById("box4").textContent;
  let box5 = document.getElementById("box5").textContent;
  let box6 = document.getElementById("box6").textContent;
  let box7 = document.getElementById("box7").textContent;
  let box8 = document.getElementById("box8").textContent;
  let box9 = document.getElementById("box9").textContent;

  //win conidtions
  if (
    (box1 === box2 && box2 === box3 && box1 !== "") ||
    (box4 === box5 && box5 === box6 && box4 !== "") ||
    (box7 === box8 && box8 === box9 && box7 !== "") ||
    (box1 === box4 && box4 === box7 && box1 !== "") ||
    (box2 === box5 && box5 === box8 && box2 !== "") ||
    (box3 === box6 && box6 === box9 && box3 !== "") ||
    (box1 === box5 && box5 === box9 && box1 !== "") ||
    (box3 === box5 && box5 === box7 && box3 !== "")
  ) {
    document.getElementById("turn").textContent = `${turn} wins!`;
    removeEventListeners();
    drawStrikeThru();
    gameOver = true;
    return;
  }
  if (
    box1 !== "" &&
    box2 !== "" &&
    box3 !== "" &&
    box4 !== "" &&
    box5 !== "" &&
    box6 !== "" &&
    box7 !== "" &&
    box8 !== "" &&
    box9 !== ""
  ) {
    document.getElementById("turn").textContent = "Cat's game";
  }
}

function removeEventListeners() {
  boxes.forEach((div) => div.removeEventListener("click", makeMove));
}

function drawStrikeThru() {
  let box1 = document.getElementById("box1").textContent;
  let box2 = document.getElementById("box2").textContent;
  let box3 = document.getElementById("box3").textContent;
  let box4 = document.getElementById("box4").textContent;
  let box5 = document.getElementById("box5").textContent;
  let box6 = document.getElementById("box6").textContent;
  let box7 = document.getElementById("box7").textContent;
  let box8 = document.getElementById("box8").textContent;
  let box9 = document.getElementById("box9").textContent;

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  canvas.setAttribute("z-index", 2);
  context.strokeStyle = "black";
  context.lineWidth = 2;
  if (box1 === box2 && box2 === box3 && box1 !== "") {
    context.beginPath();
    context.moveTo(25, 32);
    context.lineTo(150, 32);
    context.stroke();
  }
  if (box4 === box5 && box5 === box6 && box4 !== "") {
    context.beginPath();
    context.moveTo(25, 83);
    context.lineTo(150, 83);
    context.stroke();
  }
  if (box7 === box8 && box8 === box9 && box7 !== "") {
    context.beginPath();
    context.moveTo(25, 133);
    context.lineTo(150, 133);
    context.stroke();
  }
  if (box1 === box4 && box4 === box7 && box1 !== "") {
    context.beginPath();
    context.moveTo(37, 22);
    context.lineTo(37, 145);
    context.stroke();
  }
  if (box2 === box5 && box5 === box8 && box2 !== "") {
    context.beginPath();
    context.moveTo(87, 22);
    context.lineTo(87, 145);
    context.stroke();
  }
  if (box3 === box6 && box6 === box9 && box3 !== "") {
    context.beginPath();
    context.moveTo(137, 22);
    context.lineTo(137, 145);
    context.stroke();
  }
  if (box1 === box5 && box5 === box9 && box1 !== "") {
    context.beginPath();
    context.moveTo(25, 25);
    context.lineTo(150, 150);
    context.stroke();
  }
  if (box3 === box5 && box5 === box7 && box3 !== "") {
    context.beginPath();
    context.moveTo(150, 25);
    context.lineTo(25, 150);
    context.stroke();
  }
}
