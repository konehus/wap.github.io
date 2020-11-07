/*JavaScript is loosely typed laguage. Automatic type conversion which
makes is dynamically typed.
JavaScript(lightweight prog language)
Used --insert dynamic text to HTML
     --react to events
     --get information about users computer
     --perform calculations on users computer
*/


//alert - pops up a dialog box with a msg
//alert("Welcome to JavaScript");

//Variables(case sensitive) and types(lossly typed)
//Datatypes undefined, Boolean, Number, String, Symbol, 
//Object, Function, null, NaN


var name = 'Henok'; //type String
let age = 29; //type number
const PI = 3.14; //constant number
let isMale = true; //type boolean
let race = null; //type object
let opinion = undefined; //type undefined
let place; //type undefined, has been declared but not assigned
let theme = {}; //type object

let numArr = [];
for(var i = 1; i<=3; i++){
    numArr[i] = i * i;
}
console.log('"i" can be accessed outof scope (var)' + i);
console.log(numArr);

//Constants- immutable variables but for objects content isnt immutable
const point = {
    x:10,
    y:3
};

//point = 3;  //error assignment of immutable object
point['x'] = 20; //content of immutable can be changed
point.y = 6;  //content of immutable not immutable

//Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y);// 13        //Addition
console.log(x - y);//7          //subtraction
console.log(x * y);//30         //multiplication
console.log(x/y); //3.33333333    //division
console.log(x%y); //1           //remainder
console.log(x**y); //1000           //exponentiation
console.log(x++); //10++ = 10   post increment
console.log(x--); //11-- = 11   post decrement
console.log(++y); //++3  = 4    pre increment
console.log(--y); //--4  = 2    pre decrement

console.log("2" * 3); //6   operator auto conversion
console.log("2" + 3); //23  concatenation

let p = 1; //ALWAYS USE STRICT EQUALITY
console.log(p === '1');//false strict equality (Type + value)  
console.log(p !== 0);//true   strict !equality test(type & value)
console.log(p == "1"); //true lose equality (value);
console.log(5 < "7");//true   "7" automatic conversion
console.log(42.0 == 42); //true no double or int

//String Type
let s = "Henok Haile";
let fName = s.substring(0, 5);//Henok
console.log(s.charAt(4)); //4   at index 4
console.log(s.charCodeAt(4)); //107     unicode of char at 4
console.log(s.indexOf('H')); //0   first index of char 'H'
console.log(s.lastIndexOf('H'));//6 first index of chart 'H'
console.log(s.replace('H','M')); //Menok Haile
console.log(s.toUpperCase() ); //HENOK HAILE 
console.log(s.length); //11    not a method as in java
console.log(s[0] + s[1] + s[2] + s[3] + s[4]); //can be accesses as []
var as = s.split(" ");
console.log(as + s.length);

console.log('\'   \"   \t  \\');  //escape sequence
let s1 = 10 + ""; //s1 = "10"   type of string
let int = parseInt("42.34 is answer"); //42 typeof is number
let n1 = parseFloat("booyah"); //NaN

//Boolean Type -- any values can be used as boolean
//"falsey" values: false, 0, 0.0, Nan, emptyString(""), null, undefined
//"truthly" values: anything else
var ILikeWebApps = "IE6" > 0; //false
let dude = 5;
console.log(!dude);
console.log(dude);
console.log(!!dude); //Idiom -gives boolean value of variable
console.log(null === undefined); // false - identity operators
console.log(null == undefined); // true

//if/else same as java exept JS allows anything as condition
//for and while loop same as java including break and continue

//Arrays
let emptyNames = [];  //empty array
let names = ['cat', 'dog', 'mouse'];
console.log(names); //['cat', 'dog', 'mouse']
console.log(emptyNames);// []
names[6] = 'human'; //adding to index 5
console.log(names.length); //length of names is 7
console.log(names[4]); //undefined element of names array
//Array methods ----push and pop add / remove from back
//              ----unshift and shift add / remove from front
//              ----shift and pop return the element that is removed
//concat, join, reverse, sort, toString

//functional programming
//map, filter reduce
const a = [1, 3, 5, 4, 3, 2];
const b = a.map(a => 2 * a ); //2, 6, 10, 8, 6, 4
console.log(b);
console.log(a.map(function(elem){
    return elem + 3;}))
//filter
const c = a.filter(a => a>2); //3, 5, 4, 3
console.log(c);

const e = a.findIndex(a => a == "4");
console.log(e); //3

console.log(a.reduce((a,b)=> a+b) ); //sums all the numbers


//Function declaration-can be called before they appear(hoisted)
                    //-they have a name(useful for debugging)
function print(){
     console.log( square(8) ); //calls another function to do the job
}

function square(number){
    return number*number;
}
print();


//function expression (semicolons are optional.)
var printer = function(fName, lName){ //Anonymous function can be assigned as event handler
    console.log(fName + " A. " + lName);
};
printer("John", "Smith");

var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n-1) }

console.log(factorial(3)); //cannt call fact(n), its undefined out scope

//JS programs(no main) - event-driven programming (by users);


var pop = function(){
    alert("Thank you for cliking me!");
    var textbox = document.getElementById("output");
    var buttonObj = document.getElementById("button");

    if(textbox.value.toString() == "Hello, world from DOM!"){
        textbox.value = "Hello! World!";
    }else{
    textbox.value = "Hello, world from DOM!";
    }
    buttonObj.innerHTML = "clicked!!!";
    console.log(textbox.value);
}