//syntax
// promise.then((value)=>{
//     ///
// })
// .catch((error)=>{

// })


let fetchdata=new Promise((resolve,reject)=>{
    let success=true;
        if(!success){
            resolve({name:"john",age:24});
            console.log(success);
        }
        else{
            reject("Error:Failed to fetch data");
        }
});

//using .then() and catch()

fetchdata.then((result)=>{
    console.log("data",result);
})
.catch((error)=>{
    console.log(error);
    
})