const cent=100;
const month=12;

// inputs
let loan=document.getElementById("loan");
let roi=document.getElementById("roi");
let tenure=document.getElementById("tenure");
let LOANrangeInput=document.getElementById("LOANrangeinput");
let ROIrangeInput=document.getElementById("ROIrangeinput");
let TNRrangeInput=document.getElementById("TNRrangeinput");

// results
let monthly=document.getElementById("monthly");
let principle=document.getElementById("principle");
let intrest=document.getElementById("intrest");
let total=document.getElementById("total");



LOANrangeInput.addEventListener('input',()=>{
   loan.value=LOANrangeInput.value; 
});
loan.addEventListener('input',()=>{
    LOANrangeInput.value=loan.value;
});
ROIrangeInput.addEventListener('input',()=>{
   roi.value=ROIrangeInput.value; 
});
roi.addEventListener('input',()=>{
    ROIrangeInput.value=roi.value;
});
TNRrangeInput.addEventListener('input',()=>{
   tenure.value=TNRrangeInput.value; 
});
tenure.addEventListener('input',()=>{
    TNRrangeInput.value=tenure.value;
});


function calculate(){
    principle.innerHTML=loan.value;

    let percentValue=(loan.value*roi.value)/cent;
    intrest.innerHTML=percentValue*tenure.value;

    total.innerHTML=parseInt(loan.value) + parseInt(intrest.innerText);

    let months=tenure.value * month;
    monthly.innerHTML=parseFloat(total.innerHTML/months).toFixed(2);

    let intrestGraph=(parseInt(intrest.innerHTML)*cent)/parseInt(total.innerHTML);
    console.log(intrestGraph);
    
    document.getElementById("circuler-graph").style.background=`conic-gradient(blue ${intrestGraph}%,lightgray 0)`;
    
}