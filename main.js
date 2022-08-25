// Object with Functions

let person = {
    name:"Arun",
    age:23,
    skills:["HTML", "CSS", "JavaScript"],
    isStatus:true,
    address:{
        street:"ABC Street",
        state:"TamilNadu"
    },
    greeting:function(){
        let msg=`My name is ${this.name}, I love ${this.skills[2]} `;
        console.log(msg);
    }

};
person.greeting();

// Factory Function - Naming Conversion using camelcase (myFirstName)

function myFirstName(name){
    return{
    name,
    greeting(){
        console.log(`My name is ${this.name}`);
    }
};
}
let first=myFirstName("Arunkumar")
first.greeting();

// Construtor Function - Naming Conversion using Pascal (FirstName)

function FirstName(){
    this.name=prompt("Enter Your Name");
    this.greeting=function() {
        console.log(`My name is ${this.name}`);
    }
}
let firstName=new FirstName()
firstName.greeting();

// Dynamic Object - Adding the Values in Dynamically and Delete the values

const number={
    name:"Arunkumar"
}
// Adding the values
number.age = 24
number.welcome =function(){
    console.log(`My name is ${this.name}`);
}

// Delete the values
delete number.welcome
delete number.age
console.log(number)

// Primitives vs Reference value

// Primitives value can't change the x variable
let x=10
let y=x
x=20
console.log("value of a is "+ x + ", value of b is "+ y);

// Reference type value can change the x variable
let f={
    x:5,
    
};

let r=f
console.log(r);
f.value=30
console.log(r);

// Global Variable Scope
let c=10
function greet(){
    c =20
}
console.log(c);
greet();
console.log(c); //varible can change different areas in the program

// Local variable Scope

let d="hello"

function invite(){
    let e="World"
    console.log(d +" "+ e);
}
invite();
console.log(d+e);// e is not defined, because variable can accessed within a functions

// let - Block-Scoped Variable
// var - Function Scoped variable

let h="hello"

function invites(){
    let e="World"
    console.log(h +" "+ e);
    if(e=="World"){
        var g ="world"
        console.log(dh+" "+ e +" "+ g); //g is not defined because using let varible. Change the variable let to var it's working
    }
    console.log(h+" "+e+" "+g);
}
invites();

// Enumerating Properties of an Object

let user ={
    name:"Arun",
    greetingFullName(){
        console.log(`My name is ${this.name}`);
    }
};

// keys and enteries method

for(let news of Object.keys(user))
    console.log(news);

for(let key of Object.entries(user))
    console.log(key);
// for in loop
for(let key in user){
    console.log(key,user[key]);
}
// for of loop
for(let key of user){
    console.log(key); // Objects are not iterable
}

// Object Cloning

// assign()
let obj={
    name:"Arun",
    age:24
}
let obj2=Object.assign({gender:"male"},obj)
console.log(obj);
console.log(obj2);

// Spread Operator

let jungle={
    name:"edward"
}
let anotherObject ={
    ...jungle
};

anotherObject.age=23
console.log(jungle);
console.log(anotherObject);

