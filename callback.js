// function callbackfunction(){
//     console.log("callback exccecuted");
// }

// function mainfunction(callback){
//     console.log("hi sir");
//     let a=3;
//     let b=4;
//     let c=a+b;
//     console.log(c);
    
//     callback();
// }

// mainfunction(callbackfunction);


function fetchdata(callback){
    setTimeout(()=>{
        let data={name:"jay",age:22};
        callback(data);
    },4000)
    callback();
    console.log("fetching data...");
}

function displaydata(result){
    console.log("hi");
    console.log("data recieved",result);
}
fetchdata(displaydata);
