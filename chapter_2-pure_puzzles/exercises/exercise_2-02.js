/* 
    ##
   ####
  ######
 ########
##########
 ######## 
  ###### 
   #### 
    ## 
*/

let pattern = "";

for (let row = 0; row < 9; row++) {
  if (row === 4) continue;
  for (let column = 0; column < 10; column++) {
    if (column >= Math.abs(4 - row) && column < 10 - Math.abs(4 - row)) {
      pattern += "#";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
