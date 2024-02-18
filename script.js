let arr=[250,300,270,400,500];
for(let i=0;i<arr.length;i++){
    let netprice=arr[i]-(arr[i]*(10/100));
    arr[i]=netprice;
}
arr.push(500);
arr.pop();
arr.shift(60);
arr.unshift();
for(let ele of arr){
    console.log(ele);
}

