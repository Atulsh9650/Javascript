let arr=[1,2,3,4];
//taking dunction as parameter
arr.forEach(function(ele){
console.log(ele);
});

arr.forEach((ele)=>{
    console.log(ele);
});

//for each is high order function 
//it takes functions as parameters or return them

arr.forEach((ele)=>
console.log(ele*ele));