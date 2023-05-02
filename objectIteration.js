let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim

for(let people in namesAndHobbies) {
    console.log(`${namesAndHobbies[people]} => ${people}`);
}

namesAndHobbies["vardan"] = "playing games";

if("vardan" in namesAndHobbies) {
    console.log("vardan", namesAndHobbies.vardan);
}