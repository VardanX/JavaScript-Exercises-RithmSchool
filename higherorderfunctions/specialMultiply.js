
// function specialMultiply(param1, param2) {
//     if(arguments.length === 2) {
//         return param1 * param2;
//     }else {
//         return function(param3) {
//             return param1 * param3;
//         }
//     }
// }

function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }
  








console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // returns a function 