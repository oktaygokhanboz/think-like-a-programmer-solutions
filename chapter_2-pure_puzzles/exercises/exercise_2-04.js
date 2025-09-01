/*
    #     
   ###   
  #####
 ### ###
###   ###
###   ###
 ### ###
  #####
   ###
    # 
*/

let pattern = "";

for (let row = 0; row < 11; row++) {
  if (row === 5) continue;
  for (let column = 0; column < 11; column++) {
    if (column >= Math.abs(5 - row) && column < 11 - Math.abs(5 - row)) {
      if (column <= 2 + Math.abs(5 - row) || column > 7 - Math.abs(5 - row)) {
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
