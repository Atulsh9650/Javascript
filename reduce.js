let arr=[1,2,3,4];
const sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);

//to find the largest

const largest=arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
}
);
console.log(largest);