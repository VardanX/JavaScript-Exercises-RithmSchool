function createCounter() {
    let count = 0;
    return function inner() {
        count ++;
        return count;
    }

}


let firstCounter = createCounter();

console.log(firstCounter()); // 1
console.log(firstCounter()); // 2
console.log(firstCounter()); // 3
console.log(firstCounter()); // 4

let secondCounter = createCounter();

console.log(secondCounter()); // 1
console.log(secondCounter()); // 2
console.log(secondCounter()); // 3

console.log(firstCounter()); // 5
console.log(firstCounter()); // 6

console.log(secondCounter()); // 4