let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function displayCities() {
    let cities =  instructorData.additionalData.moreDetails.citiesLivedIn;
    for(let i=0; i < cities.length; i++) {
        console.log(cities[i]);
    }
}
displayCities();

function displayHomeTownData() {
    let hometownData = instructorData.additionalData.moreDetails.hometown;
    for(let data in hometownData){
        console.log(hometownData[data]);
    }
}
displayHomeTownData();

function addDetail(key, value) {
    instructorData["additionalData"]["moreDetails"][key] = value;
    return instructorData["additionalData"]["moreDetails"];
}
console.log(addDetail("isHilarious", true));
console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"], true));

function removeDetail(key) {
    delete instructorData["additionalData"]["moreDetails"][key];
    return instructorData["additionalData"]["moreDetails"];

}
console.log(removeDetail('citiesLivedIn'));
console.log(removeDetail('hometown'));
console.log(removeDetail('favoriteBasketballTeam'));