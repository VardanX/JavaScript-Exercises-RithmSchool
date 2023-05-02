let myInfo = {
    firstName : "Vardan",
    lastName : "Bogati", 
    occupation : "Software Engineer"
};

console.log(myInfo.firstName);
console.log(myInfo.lastName);
console.log(myInfo.occupation);

console.log(myInfo["firstName"]);
console.log(myInfo["lastName"]);
console.log(myInfo["occupation"]);

//adding hobby key to the object 
myInfo.hobby = "Playing games";
console.log(myInfo);

delete myInfo.occupation;
console.log(myInfo);

/*The difference between dot notation and bracket notataion is that
    Dot notation is used when we want to evaluate an expression or use variables as keys of an object.
    Bracket notation is used other times such as when we know the name of the key and when it is not a variable for expression
*/