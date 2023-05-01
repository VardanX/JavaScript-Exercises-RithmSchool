let favoriteFood = ['Pizza', 'Sushi', 'Ramen'];
console.log(favoriteFood[1]);
favoriteFood.splice(2,1,"Ichiraku Ramen");
console.log(favoriteFood[favoriteFood.length - 1]);
console.log(favoriteFood);
favoriteFood.push("Burrito");
console.log(favoriteFood);

let formerFavoriteFood = favoriteFood.shift();
console.log(formerFavoriteFood);
console.log(favoriteFood);

favoriteFood.unshift("Margarita Pizza");
console.log(favoriteFood);

favoriteFood.push("Chocolate/Coffe Icecream");
console.log(favoriteFood);

//empty array
let emptyArray = [];
console.log(emptyArray.pop());
console.log(emptyArray);

//array splice practice

//1
let array = [2, 3, 4, 5]; // Chage to [2, 4, 5];
array.splice(1, 1);
console.log(array);

//2
let array2 = ["alpha", "gamma", "delta"];  // conver to ["alpha", "beta", "gamma", "delta"]
array2.splice(1, 0, "beta");
console.log(array2); 

//3
let array3 = [10,-10,-5,-3,2,1] //-> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
array3.splice(1, 3, 9, 8, 7, 6, 5, 4, 3); //start from index 0, remove 3 items starting from index 0
console.log(array3);