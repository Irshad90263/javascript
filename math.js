export const add=(a,b)=>a+b;
export const sqr=(a)=>a*a;
export const ran=(min,max)=>{
let a=Math.random();
let b=a*(max-min)+min;
// b=parseFloat(b);
return b;    
}