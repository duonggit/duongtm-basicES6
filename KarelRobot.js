/** Karel GoRight Basic Function */
function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }
 function moveFourTimes(){
    move();
    move();
    move();
    move();
 }
/** Karel GoRight Basic Function */

/**Move And Beeper Karel */
function main(){
    MoveAndBeeper();
    MoveAndBeeper();
    MoveAndBeeper();
    MoveAndBeeper();   
  }
  function MoveAndBeeper(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
  }
/**Move And Beeper Karel */  