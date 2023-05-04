function map(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        let newVal = callback(array[i]);
        newArray.push(newVal);
    }
    return newArray
}

console.log(map([1, 2, 3, 4], function(val) {
    return val * 2;
}));


function reject(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i]) !== true) {
            newArray.push(array[i]);
        }
    }
    return newArray;

}


console.log(reject([1,2,3,4], function(val){
    return val > 2;
}));

console.log(reject([2,3,4,5], function(val){
    return val % 2 === 0;
}));