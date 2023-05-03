// function singleLetterCount(word, letter) {
//     let count = 0
//     let slicedLetter = word.slice(0, 1);
//     if(word.length === 1) {
//         if(word === letter) {
//             count++;
//             return count;
//         }
//         else {
//             return 0;
//         }
//     }
//     else if(slicedLetter === letter) {
//         count++;
//     }
//     return count + singleLetterCount(word.slice(1), letter);
// }
// console.log(singleLetterCount('eefyyfe', 'e'));
// console.log(singleLetterCount('Rithm School','o'))
// console.log(singleLetterCount('Rithm School','z'))
let letterCount = {};

(function multipleLetterCount(word) {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        let letter = word[i];
        for(let j = 0; j < word.length; j++) {
            if(letter === word[j]) {
                count++;
            }
        }
        letterCount[letter] = count;
        count = 0;
    }

})("person");
console.log(letterCount);
