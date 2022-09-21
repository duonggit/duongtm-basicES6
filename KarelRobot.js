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

/**
 Excercise
 **/
 function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();  
  }
  function goUpTurnRight(){
     turnRight();
     move();
     turnRight();
     
  }
  function goUpTurnLeft(){
     turnLeft();
     move();
     turnLeft();
     
  }
  function beepersRight(){
     putBeeper();
     move();
     move();
     putBeeper();
     move();
     move();
     putBeeper();
     
  }
  
  function beepersLeft() {
     move();
     putBeeper();
     move();
     move();
     putBeeper();
     move();
     
     }
  