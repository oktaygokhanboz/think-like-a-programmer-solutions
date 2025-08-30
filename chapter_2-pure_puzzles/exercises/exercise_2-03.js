/* 
#            #
 ##        ##
  ###    ###
   ########
   ########
  ###    ###
 ##        ##
#            #
*/

let pattern = "";

for (let row = 0; row < 9; row++) {
  if (row === 4) continue;
  for (let column = 0; column < 14; column++) {
    if (column >= 4 - Math.abs(4 - row) && column < 10 + Math.abs(4 - row)) {
      if (
        column <= 8 - Math.abs(8 - row * 2) ||
        column >= 5 + Math.abs(8 - row * 2)
      ) {
        pattern += "#";
      } else {
        pattern += " ";
      }
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
