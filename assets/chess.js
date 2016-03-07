
var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];


function move (p1,p2,p3,p4){

var className = 1 + "-" + 2;
className = String(className);
className = " ' " + "." + className + " ' ";
console.log(className);

board[p1][p2] = "";
board[p1][p2] = board[p3][p4]; //make the destination equal the present position
// $(className).html(board[p1][p2]); // update the DOM
board[p3][p4] = ' '; //clear the old position
console.log(board.join('\n') + '\n\n');
}
move(4,4,6,4);
move(3,1,1,1);
console.log(board[0][1]);

for(var i=0; i<=7; i++){
$("body").append("<div class='box " + i + "-0'></div> ");
$("body").append("<div class='box " + i + "-1'></div> ");
$("body").append("<div class='box " + i + "-2'></div> ");
$("body").append("<div class='box " + i + "-3'></div> ");
$("body").append("<div class='box " + i + "-4'></div> ");
$("body").append("<div class='box " + i + "-5'></div> ");
$("body").append("<div class='box " + i + "-6'></div> ");
$("body").append("<div class='box " + i + "-7'></div> ");
}

$(".0-0").html(board[0][0]);
$(".0-1").html(board[0][1]);
$(".0-2").html(board[0][2]);
$(".0-3").html(board[0][3]);
$(".0-4").html(board[0][4]);
$(".0-5").html(board[0][5]);
$(".0-6").html(board[0][6]);
$(".0-7").html(board[0][7]);

$(".1-0").html(board[1][0]);
$(".1-1").html(board[1][1]);
$(".1-2").html(board[1][2]);
$(".1-3").html(board[1][3]);
$(".1-4").html(board[1][4]);
$(".1-5").html(board[1][5]);
$(".1-6").html(board[1][6]);
$(".1-7").html(board[1][7]);

$(".2-0").html(board[2][0]);
$(".2-1").html(board[2][1]);
$(".2-2").html(board[2][2]);
$(".2-3").html(board[2][3]);
$(".2-4").html(board[2][4]);
$(".2-5").html(board[2][5]);
$(".2-6").html(board[2][6]);
$(".2-7").html(board[2][7]);

$(".3-0").html(board[3][0]);
$(".3-1").html(board[3][1]);
$(".3-2").html(board[3][2]);
$(".3-3").html(board[3][3]);
$(".3-4").html(board[3][4]);
$(".3-5").html(board[3][5]);
$(".3-6").html(board[3][6]);
$(".3-7").html(board[3][7]);

$(".4-0").html(board[4][0]);
$(".4-1").html(board[4][1]);
$(".4-2").html(board[4][2]);
$(".4-3").html(board[4][3]);
$(".4-4").html(board[4][4]);
$(".4-5").html(board[4][5]);
$(".4-6").html(board[4][6]);
$(".4-7").html(board[4][7]);

$(".5-0").html(board[5][0]);
$(".5-1").html(board[5][1]);
$(".5-2").html(board[5][2]);
$(".5-3").html(board[5][3]);
$(".5-4").html(board[5][4]);
$(".5-5").html(board[5][5]);
$(".5-6").html(board[5][6]);
$(".5-7").html(board[5][7]);

$(".6-0").html(board[6][0]);
$(".6-1").html(board[6][1]);
$(".6-2").html(board[6][2]);
$(".6-3").html(board[6][3]);
$(".6-4").html(board[6][4]);
$(".6-5").html(board[6][5]);
$(".6-6").html(board[6][6]);
$(".6-7").html(board[6][7]);

$(".7-0").html(board[7][0]);
$(".7-1").html(board[7][1]);
$(".7-2").html(board[7][2]);
$(".7-3").html(board[7][3]);
$(".7-4").html(board[7][4]);
$(".7-5").html(board[7][5]);
$(".7-6").html(board[7][6]);
$(".7-7").html(board[7][7]);
