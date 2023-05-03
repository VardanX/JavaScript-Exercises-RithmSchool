(function displayName(firstName, lastName){
    return firstName +  " " + lastName;
})('Elie', 'Schoppik')

//Create calc
function createCalculator() {
    return {
        add : function(num1, num2) {
            return num1 + num2;
        },
        subtract : function(num1 ,num2) {
            return num1 - num2;
        }, 
        multiply : function(num1, num2) {
            return num1 * num2;
        },
        divide : function(num1, num2) {
            return num1 / num2;
        }
    }
}
let calc = createCalculator();
console.log(calc.add(20,20)); // 40
calc.subtract(2,2); // 0
calc.multiply(2,2); // 4
calc.divide(12,2); // 6
