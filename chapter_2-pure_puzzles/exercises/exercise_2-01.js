/* 
 ########
  ######
   ####
    ##
*/

let pattern = "";

for (let row = 0; row < 4; row++) {
  for (let column = 0; column < 8; column++) {
    if (column >= row && column < 8 - row) {
      pattern += "#";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
