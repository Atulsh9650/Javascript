let asyncfun1=()=>{
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{
         console.log("data1");
         resolve("success");
        },3000);
     });
}

let asyncfun2=()=>{
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
           },3000);
     });
}

console.log("fetching data1..");
asyncfun1().then((res)=>{
    console.log("fetching data2...");
    asyncfun2().then((res)=>{});
});
/*
getdata(1).then((res)=>{
    return getdata(2);
}).then((res)=>{
    return getdata(3);
}).then((res)=>{
    console.log(res);
})
*/