
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
//arg- number of iterations of loop

function triangles(args) {

   for (var i = "#"; i.length <= args; i+= "#"){

    console.log(i);
    
   }
   
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
    
    for (var i = start; i <= end; i++){
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        }else if(i % 5 === 0){
            console.log("buzz");
        }else {
            console.log(i);
    }
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*Write a program that creates a string that represents an 8×8 grid, using newline characters 
to separate lines. At each position of the grid there is either a space or a "#" character. 
The characters should form a chessboard.*/
//input- size number
//output- string-checkerboard #

function drawChessboard(size) {
  
  let chessboard = "";
  for(let i = 0; i < size; i++){//1
      for(let j = 0; j < size; j++){//0
          if((i + j) % 2 === 0){
              chessboard += " ";
          }else{
              chessboard += "#";
      }
  }
  chessboard += "\n";
  //console.log(chessboard);
 }
//return chessboard;
 console.log(chessboard);
  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
