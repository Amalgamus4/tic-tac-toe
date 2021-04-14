var turn = 'X';
<<<<<<< HEAD
for (i = 1; i < 9; i++){
document.getElementById("box" + i).addEventListener("click", makeMove);
}
=======

document.getElementById("box1").addEventListener("click", makeMove);
document.getElementById("box2").addEventListener("click", makeMove);
document.getElementById("box3").addEventListener("click", makeMove);
document.getElementById("box4").addEventListener("click", makeMove);
document.getElementById("box5").addEventListener("click", makeMove);
document.getElementById("box6").addEventListener("click", makeMove);
document.getElementById("box7").addEventListener("click", makeMove);
document.getElementById("box8").addEventListener("click", makeMove);
document.getElementById("box9").addEventListener("click", makeMove);
>>>>>>> 678deaf1d3be898778d5d5083db925a23e7aa4d0

function makeMove(){
 if (document.getElementById(this.id).innerHTML == ' ') {
    document.getElementById(this.id).innerHTML = turn;
    let winner = checkForWin();
    if (winner == true) declareWinner();
    turn === 'X' ? turn = 'O' : turn = 'X';
    document.getElementById("currentTurn").innerHTML = turn;
  }
}

function checkForWin(){
  let box1 = document.getElementById('box1').innerHTML;
  let box2 = document.getElementById('box2').innerHTML;
  let box3 = document.getElementById('box3').innerHTML;
  let box4 = document.getElementById('box4').innerHTML;
  let box5 = document.getElementById('box5').innerHTML;
  let box6 = document.getElementById('box6').innerHTML;
  let box7 = document.getElementById('box7').innerHTML;
  let box8 = document.getElementById('box8').innerHTML;
  let box9 = document.getElementById('box9').innerHTML;
    //win conidtions
     if ((box1 === box2 && box2 === box3 && box1 !== ' ' ) ||
        (box4 === box5 && box5 === box6 && box4 !== ' ') ||
        (box7 === box8 && box8 === box9 && box7 !== ' ') ||
        (box1 === box4 && box4 === box7 && box1 !== ' ') ||
        (box2 === box5 && box5 === box8 && box2 !== ' ') ||
        (box3 === box6 && box6 === box9 && box3 !== ' ') ||
        (box1 === box5 && box5 === box9 && box1 !== ' ') ||
        (box3 === box5 && box5 === box7 && box3 !== ' '))

      {return true;}
    }

function declareWinner() {
        document.getElementById('turn').innerHTML = turn + " wins!";
        removeListeners();
      }
<<<<<<< HEAD

function removeListeners() {
  for (i = 1; i < 9; i++){
        document.getElementById("box" + i).removeEventListener("click", makeMove);
        }
=======
      
function removeListeners() {
        document.getElementById("box1").removeEventListener("click", makeMove);
        document.getElementById("box2").removeEventListener("click", makeMove);
        document.getElementById("box3").removeEventListener("click", makeMove);
        document.getElementById("box4").removeEventListener("click", makeMove);
        document.getElementById("box5").removeEventListener("click", makeMove);
        document.getElementById("box6").removeEventListener("click", makeMove);
        document.getElementById("box7").removeEventListener("click", makeMove);
        document.getElementById("box8").removeEventListener("click", makeMove);
        document.getElementById("box9").removeEventListener("click", makeMove);
>>>>>>> 678deaf1d3be898778d5d5083db925a23e7aa4d0
      }
