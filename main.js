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