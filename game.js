var turn = 'X';
const boxes = document.querySelectorAll('.box');

boxes.forEach((div) => {
  div.addEventListener('click', makeMove);
});


function makeMove(){
 if (document.getElementById(this.id).innerHTML == ' ') {
    document.getElementById(this.id).innerHTML = turn;
    checkForWin();
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

      {
        document.getElementById('turn').innerHTML = turn + " wins!";
        removeListeners();
      }
    }

function removeListeners() {

  boxes.forEach((div) => {
    div.removeEventListener('click', makeMove);
  });
}
