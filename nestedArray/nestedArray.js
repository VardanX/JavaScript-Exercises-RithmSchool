let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

function printEvens() {
    for(let i = 0; i < nestedArr.length; i++) {
        for(let j = 0; j < nestedArr[i].length; j++) {
            if(nestedArr[i][j] % 2 === 0) {
                console.log(nestedArr[i][j]);
            }
        }
    }
}

printEvens();

// 2
// 4
// 6
// 8
// 10
// 12

let nestedArr2 = [[1, 2], [3, 4], [5, 6]];

function sumTotal() {
    let sum = 0
    for(let i = 0; i < nestedArr2.length; i++) {
        for(let j=0; j < nestedArr2[i].length; j++) {  
            sum += nestedArr2[i][j];
        }
        
    }
    console.log(sum);

}
sumTotal(); // 21