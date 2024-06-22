var isComppleted = false;
var score = 88;
var message = "TypeScript is fun";
// score = "hello"; Error of types
console.log("=======================New=========================");
var evenNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
evenNumbers.push(12);
evenNumbers.forEach(function (j) { return console.log(j); });
console.log("=======================New=========================");
var employee = ["ISY", "WASHINGTON", 23231];
employee[0] = "Doe";
employee.push(30);
employee.forEach(function (person) { return console.log(person); });
console.log("=======================New=========================");
function printGreeting(name) {
    var message = "Welcome ".concat(name);
    console.log(message);
}
printGreeting("Alex");
