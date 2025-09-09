/*
#
##
###
####
###
##
#
*/

let pattern = "";

for (let row = 0; row < 7; row++) {
  for (let column = 0; column < 4 - Math.abs(3 - row); column++) {
    pattern += "#";
  }
  pattern += "\n";
}

console.log(pattern);
