let promise=new Promise(async(resolve,reject)=>{
    try{
    const response=await fetch ("https://fakestoreapi.com/products?limit=10");
    const data=await response.json();
    // console.log(data);test
    resolve(data);
}catch(error){
    console.error("data not feched: ");
    reject(error);
}
});

promise.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
});

