
let person = {
    name: 'Henok',
    age: 30
};

//Dot Notation
person.name = 'John';

///Bracket Notation
person['name'] = 'Mary';

console.log(person.name);
console.log(person['age']);

let selection = 'name';
person[selection] = 'kiros';
console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 5;
console.log(selectedColors.length);

//Performint a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Henok', 'Haile');
greet('Mary' );

//calculation a value
function square(number){
    return number*number;
}

//Use function call
let number = square(5);
console.log("\n" +number);

//Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y); //Addition
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x/y); //division
console.log(x%y); //remainder
console.log(x**y); //exponentiation
console.log(x++); //post increment
console.log(x--); //post decrement
console.log(++y); //pre increment
console.log(--y); //pre decrement

//Assignment Operators
let z = 10;
z++; //z = z + 1;
z+=5; //z = z + 5;
z*=2; //z = z *2;
z%=1; //z = z % 1;

//Comparison Operators
let p = 1;
//Relationsl
console.log(p > 0); //true
console.log(p >= 0); //true
console.log(p < 0); //false
console.log(p <= 0); //false
//Equality
console.log(p === '1'); //strict equality (Type + value)  
console.log(p !== 0);
console.log(p == '1'); //lose equality (value);

//Ternary Operator
let points = 110;
let type = points > 100 ? 'gold':'silver';
//if points > 100 true('gold') else ('silver')
console.log(type);

function pop(){
    var box = document.getElementById("output");
    box.setAttribute("value","thank you" );
    console.log("clicked");
}