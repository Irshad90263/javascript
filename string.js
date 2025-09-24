// stirng : a string is a sequese of characters used to represents text..

// stirng basics :
// 1. string are enclosed in quotes(single or double) or backtics.
// 2. string can contain letters, numbers and spacial characters. 

// let name = 'john doe';
// let greetings = "hello world";
// let template= `my name is ${name}`;
// console.log(template);



// string methods

//1. length
// let str="IRSHAD";
// console.log(str.length);

//2. toUppercase
// let str="irshad";
// console.log(str.toUpperCase());

// 3. tolowercase
// let str="IRSHAD";
// console.log(str.toLowerCase());

//4. includes(): returns a boolian indicating whether the string includes a specified value.
// let str="hello world";
// console.log(str.includes("world"));
// console.log(str.includes("hell"));
// console.log(str.includes("h"));
// console.log(str.includes("b"));  //false

//5. splite():splites the string into an array of substrings
// let str="hello world";
// console.log(str.split(""));
// console.log(str.split(" "));

//6. trim() removes whitespace from both ends of the string.
// let str=" hello world ";
// console.log(str);
// console.log(str.trim());

//7. substring : retirns a subset of string
// let str="hello world";
// console.log(str.substring(0,5));  //takes -1 means it will return 0 to 4.
// console.log(str.substr(0,5));  //takes -1 means it will return 0 to 4.


//8. replace(): replace a specifeid value with another value
// let str="hello world";
// console.log(str.replace("world","digicoders"));

//9. charat(); returns the character at the specifeid index.
// let str="hello world";
// console.log(str.charAt(7));

//10. charcodeat(): return a unicode value of the character of the soecifeid index.
// 

// concat():conatnates two or more strings
// let str="hello";
// let str1=" world";
// console.log(str.concat(str1));

// 11. repeat()
// let str="hello ";
// console.log(str.repeat(10));

//12 slice()
// let str="hello";
// console.log(str.slice(2,3));  // takes -1 
// console.log(str.slice(1,-1));
// console.log(str.slice(-1));
// console.log(str.slice(1));


//check is slice return array or string if we apply it on an array
let arr=[1,2,3,4,5];
console.log(arr.slice(0,4));
console.log(arr.slice(0,-1));
console.log(arr.slice(-1));
console.log(arr.slice(1));
console.log(arr.slice(0));

//check if substring works on an array
// console.log(arr.substring(0,4)); //doesnt work



