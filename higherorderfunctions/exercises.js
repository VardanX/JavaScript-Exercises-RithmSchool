// function countDown(num) {
//     let timerid = setInterval(function(){
//         num = num - 1;
//         if(num === 0) {
//             console.log("Done!");
//             clearInterval(timerid);
//         }
//         else {
//             console.log(num);
//         }
//     }, 1000);
//     return timerid;
// }

// countDown(4);
// 3
// 2
// 1
// "DONE!"

function randomGame() {
    
    let count = 0;
    let timerId = setInterval(function(){
        let randomNumber = Math.random();
        console.log(randomNumber);
        if(randomNumber > 0.75) {
            clearInterval(timerId);
            console.log(count);
        }
        count++;
        
    }, 1000)
    
}
randomGame();