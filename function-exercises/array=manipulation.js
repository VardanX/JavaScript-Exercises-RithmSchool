/* 
this function should take in at most four parameters (an array, command, location, and value).
If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.
*/

function add(array, location, value) {
    if(location === "end") {
        array.push(value);
        return array;
    }
    if(location === "beginning") {
        array.unshift(value);
        return array;
    }
    
}

function remove(array, location) {
    if(location === "beginning") {
        return array.shift();
    }
    else if(location === "end") {
        return array.pop();
    }

}

function arrayManipulation(array, command, location, value) {
    if(command === "remove") {
        return remove(array, location);
    }
    if(command === "add") {
        return add(array, location, value);
    }
}
console.log(arrayManipulation([1,2,3], "remove", "end"));
console.log(arrayManipulation([1,2,3], "remove", "beginning"));
console.log(arrayManipulation([1,2,3], "add", "beginning", 20));
console.log(arrayManipulation([1,2,3], "add", "end", 30));