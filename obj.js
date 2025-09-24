// creating an object :
let person={
    name:"irshad",
    age: "22",
    occupatioon: "merndeveloper"
}

// Accessing properties :
// console.log(person.name);
// console.log(person["age"]);

// adding properties:
person.location="india";
// console.log(person);
// console.log(person.location);

//updating properties:
person.age=31;
// console.log(person.age);

// remove properties
// delete person.occupatioon;
delete person.age;
// console.log(person);

// object methods
// 1. object.keys() : returns an array of property keys
// 2. object.value(): returns an array of property values
// 3. object.entries() : returns an array of key-value pairs

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


//example

let student={
    name: "irshad",
    class : "12th",
    roll: "20",
    age: 22
}

for (let left in student){
    console.log(left +":"+ student[left]);
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

student.rank="#1";
// student.age=18;
// delete student.name;

console.log(student);
delete student["rank"];
console.log(student);