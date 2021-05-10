let turn = "X";
const boxes = document.querySelectorAll(".box");
boxes.forEach((div) => div.addEventListener("click", makeMove));

function makeMove() {
  if (document.getElementById(this.id).textContent == " ") {
    document.getElementById(this.id).textContent = turn;
    checkForWin();
    turn === "X" ? (turn = "O") : (turn = "X");
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
    (box1 === box2 && box2 === box3 && box1 !== " ") ||
    (box4 === box5 && box5 === box6 && box4 !== " ") ||
    (box7 === box8 && box8 === box9 && box7 !== " ") ||
    (box1 === box4 && box4 === box7 && box1 !== " ") ||
    (box2 === box5 && box5 === box8 && box2 !== " ") ||
    (box3 === box6 && box6 === box9 && box3 !== " ") ||
    (box1 === box5 && box5 === box9 && box1 !== " ") ||
    (box3 === box5 && box5 === box7 && box3 !== " ")
  ) {
    document.getElementById("turn").textContent = turn + " wins!";
    removeEventListeners();
    drawStrikeThru();
    return;
  }
  if (
    box1 !== " " &&
    box2 !== " " &&
    box3 !== " " &&
    box4 !== " " &&
    box5 !== " " &&
    box6 !== " " &&
    box7 !== " " &&
    box8 !== " " &&
    box9 !== " "
  ) {
    document.getElementById("turn").textContent = "Cat's game";
  }
}

function removeEventListeners() {
  boxes.forEach((div) => {
    div.removeEventListener("click", makeMove);
  });
}

function drawStrikeThru() {
  const canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  if (box1 === box2 && box2 === box3 && box1) {
    context.moveTo(10, 10);
    context.lineTo(10, 150);
    context.stroke();
  }
  if (box4 === box5 && box5 === box6 && box4) {
    context.moveTo(10, 60);
    context.lineTo(10, 150);
    context.stroke();
  }
  if (box7 === box8 && box8 === box9 && box7) {
    context.moveTo(10, 150);
    context.lineTo(150, 150);
    context.stroke();
  }
  if (box1 === box4 && box4 === box7 && box1) {
    context.moveTo();
    context.lineTo();
    context.stroke();
  }
  if (box2 === box5 && box5 === box8 && box2) {
    context.moveTo();
    context.lineTo();
    context.stroke();
  }
  if (box3 === box6 && box6 === box9 && box3) {
    context.moveTo();
    context.lineTo();
    context.stroke();
  }
  if (box1 === box5 && box5 === box9 && box1) {
    context.moveTo();
    context.lineTo();
    context.stroke();
  }
  if (box3 === box5 && box5 === box7 && box3) {
    context.moveTo();
    context.lineTo();
    context.stroke();
  }
}
