async function fetching(){
            let data=await fetch("https://jsonplaceholder.typicode.com/users");
            console.log(data);
        } ;
    fetching();