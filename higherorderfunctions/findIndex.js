function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            return array.indexOf(array[i]);
        }
    }
}

// returns 1 (index of the first value greater than or equal to 10)
console.log(findIndex([8,11,4,27], function(val){return val >= 10}));
console.log(findIndex([8,11,4,27], function(val){return val === 7})); // undefined