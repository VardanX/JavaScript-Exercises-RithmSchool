// this function should accept 2 parameters, put them in!
function each(array, callback){
    // put your code inside here!
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}


each([1,2,3,4], function(val){
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1,2,3,4], function(val){
    console.log(val*2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8