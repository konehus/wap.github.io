console.log("hello, we'll make several function tests!!!" ); 
 
 
 /* runs test to see if expected argument is === to value returned by function2test argument */
 function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

function myarr(){
   return [1,1];
}

console.log("Expected output of myarr() is 40  " + myFunctionTest([1,1], function () {
    return myarr();
}));

/*************************************  lab question  #2 ************************************************* */
function max(num1, num2){
    return num1>num2 ? num1 : num2;
}

console.log("Expected output of max(20,10) is 20 and " +
myFunctionTest(20, function(){ return max(20,10) } ) );


/*************************************  lab question  #3************************************************* */
function maxOfThree(num1, num2, num3){
    let temp = num1 > num2 ? num1 : num2;
    return temp > num3 ? temp : num3;
}
console.log("Expected output of maxOfThree(20,10, 30) is 30 and " +
myFunctionTest(30, function(){ return maxOfThree(20,10, 30) } ) );



/*************************************  lab question  #4 ************************************************* */
function isVowel(char){
    let vowels = "aeoiuAEOIU";
    if ( char == "")
        return false;
    if( vowels.indexOf(char) > -1)
        return true;

    return false;
}
console.log("Expected output of isVowel('i') is true and " +
myFunctionTest(true, function(){ return isVowel('i') } ) );



/*************************************  lab question  #5A ************************************************* */
function sum(num){
    let total = 0;
    for(var i = 0; i < num.length; i++){
        total += num[i];
    }
    return total;
}
console.log("Expected output of sum([1,2,3,4,5]) is 15 and " +
myFunctionTest(15, function(){ return sum([1,2,3,4,5]) } ) );



/*************************************  lab question  #5B ************************************************* */
function multiply(num){
    product = 1;
    for(var i = 0; i < num.length; i++){
        product *= num[i];
    }
    return product;
}
console.log("Expected output of multiply([1,2,3,4,5]) is 120 and " +
myFunctionTest(120, function(){ return multiply([1,2,3,4,5]) } ) );




/*************************************  lab question  #6 ************************************************* */
function reverse(text){
    if(text == undefined)
        return false;

    let temp = "";
    for(i = text.length-1; i >=0; i--){
        temp += text[i];
    }
    return temp;
}
console.log("Expected output of reverse('tina Xing') is 'gniX anit' and " +
myFunctionTest('gniX anit', function(){ return reverse('tina Xing') } ) );



/*************************************  lab question  #7 ************************************************* */
function findLongestWord(words){
    temp = "";
    for(let i = 0; i < words.length; i++){
        temp = temp.length > words[i].length ? temp : words[i];
    }
    return temp;
}
console.log("Expected output of findLongestWord(['abcd','ab', 'asdfe', 'a']) is 'asdfe' and " +
myFunctionTest('asdfe', function(){ return findLongestWord(['abcd','ab', 'asdfe', 'a']) } ) );



/*************************************  lab question  #8 ************************************************* */
function filterLongWords( words, i){
    return words.filter( elem => elem.length > i );
}
console.log("Expected output of filterLongWords(['abcd','ab', 'asdfe', 'a'], 2) is 'asdfe' and " +
myFunctionTest(['abcd', 'asdfe'], function(){ return filterLongWords(['abcd','ab', 'asdfe', 'a'], 2) } ) );



/*************************************  lab question  #9 ************************************************* */
const a = [1, 2, 3, 4, 5];

const b =function(elem){
    return elem * 10;
}

console.log("Expected output of a.map(b) is [10,20,30,40,50] and " +
myFunctionTest([10,20,30,40,50], function(){ return a.map(b) } ) );

const c = function(elem){
    return elem === 3;
}
console.log("Expected output of a.filter(c) is [3] and " +
myFunctionTest([3], function(){ return a.filter(c) } ) );


const d = function(accum, current){
    return accum *= current;
}
console.log("Expected output of a.reduce(d) is 120 and " +
myFunctionTest(120, function(){ return a.reduce(d) } ) );