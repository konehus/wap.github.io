
/////////////////////////////////////number 1/////////////////////////////////
String.prototype.filter = function(banned){
    var arr = (() => this.split(" "))();
    return arr.filter( w => w !== banned ).join(" "); 
}

console.log('not every place is home. not home is either'.filter('not'));

//////////////////////////////////number 2////////////////////////////////////
Array.prototype.bubbleSort = function(){
    arr = this;
    n = arr.length;
    for( let i = 0; i < n-1; i++){
        for ( let j = 0; j < n-i-1; j++)
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
    }
    return arr;
}
console.log([1,8,3,5,9,2].bubbleSort())

/////////////////////////////////number 3////////////////////////////////////
function Person(name){
    this.name = name;
}

function Teacher(name, subject){
    Person.call(this,name);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(){
    console.log(this.name + " is now teaching " + this.subject);
}

const smith = new Teacher('Smith', 'Biology');
smith.teach();



///////////////////////////////////number 4////////////////////////////////////
let person5 = {
    name : "default",
    age : 0,
    greet : function(){console.log("Greetings, my name is " + this.name + 
                                    " and I am " + this.age + " years old");},

    salute: function(){console.log("Good Morning! and in case I dont't see you" +
                        "good afternoon, good evening and good night!") }

};

let student5 = Object.create(person5);
student5.major = "default"
student5.greet = function(){console.log("Hey, my name is " + 
                    this.name + " and I am studying " + this.major)};


let professor5 = Object.create(person5);
professor5.department = "default";
professor5.greet = function(){console.log("Hey, my name is " + this.name + 
                    " and I am in " + this.department)};

professor5.name = 'Smith';
professor5.department = 'CS472';
professor5.greet();
professor5.salute();