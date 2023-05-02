let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//Write the command to add the language “Go” to the end of the languages array.
programming["languages"].push("Go");
console.log(programming);

//Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming);

//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

//Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);

for(let lang of programming["languages"]) {
    console.log(lang);
}

for(let keys in programming) {
    console.log(keys);
}

for(let values in programming) {
    console.log(programming[values]);
}
