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
