// function is a block of code that perform a task based on what you want
// types of function
// 1. user defined
// 2.predefined

// example of user defined function

// function greet(name){
//     console.log(`hello,${name}`);
// }

// greet("Irshad");

// in this example
// 1. function is the keyword used to declare a function
// 2.greet is the function name
// 3.name is the parameter of taht function

// function sum(a,b){
//     var c=a+b;
//     console.log(c);
// }

// sum(6,7);

// function mul(a,b){
//     console.log(a*b);
// }

// mul(6,7);

// arrow function
// benefits
// 1.readability
// 2.concisenss
// 3.less boilerplaate
// where:
// 1ShadowRoot,one line function
// 2.callback : Map(), filter(), reduce()
// 3.event handlers

// example1
// let sayhello=()=>console.log("hello");
// sayhello();

// example2

// let add=(a,b)=>a+b;
// console.log(add(5,5));

// example3
// let calarea=(width,height)=>{
//     let area=width*height;
//     console.log(area);
// }

// calarea(5,8);

// example 1

// function iseven(num){
//     return num%2===0;
// }
// console.log(iseven(6));

// example2
// function CtoF(num){
//     return (num*9/5)+32;
// }

// console.log(CtoF(37));

// example3

// let sqr=(num)=>num*num;
// console.log(sqr(5));

// example3

// let reverse=(z)=>{
//     return z.split("").reverse().join("");
// }
// console.log(reverse("irshad"));

// let reverse=(z)=>{
//     return z.split(" ").reverse().join("");  by space string will split whole word by word
// }
// console.log(reverse("irshad 1"));
// let reverse=(z)=>{
//     return z.split("").reverse().join(""); by no space string will split every single character 
// }
// console.log(reverse("irshad 1"));

let isPalindrome=(num)=>{
    return num===num.split("").reverse().join("");
}
console.log(isPalindrome("kak"));