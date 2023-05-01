let people = ["Greg", "Mary", "Devon", "James"];

for(let i=0; i < people.length; i++) {
    console.log(people[i]);
}

//remove Greg from array
console.log(people.shift());
console.log(people)

//remove James from the array
console.log(people.pop());
console.log(people);

//add matt to the front of the array
people.unshift("Matt");
console.log(people);

//add your name to the end of the array
people.push("Vardan");
console.log(people);

for(let i = 0; i < people.length; i++) {
    if(people[i] === "Mary") {
        break;
    }else {
        console.log(people[i]);
    }
}

//Make a slice copy excluding["Mary", "Matt"]
console.log(people.slice(2));

//Index of Mary
console.log(people.indexOf("Mary"));

//Index of foo
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];
//Remove devon and add Elizabeth and Artie
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
console.log(people);

let withBob = people.concat("Bob");
console.log(withBob);