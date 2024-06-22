let isComppleted: boolean = false;
let score: number = 88;
let message: string = "TypeScript is fun";

// score = "hello"; Error of types



console.log("=======================New=========================");


const evenNumbers: Array<number> = [2,3,4,5,6,7,8,9,10];
evenNumbers.push(12);
evenNumbers.forEach((j) => console.log(j));


console.log("=======================New=========================");


const employee : [string,string,number] = ["ISY","WASHINGTON",23231];
employee[0] = "Doe";
employee.push(30);
employee.forEach((person) => console.log(person));


console.log("=======================New=========================");


function printGreeting(name:string):void {
    let message = `Welcome ${name}`
    console.log(message);

}
printGreeting("Alex");


console.log("=======================New=========================");


let data:any = [45,'Hello',false];
let value:string|number = 45;
value = "Hello";
