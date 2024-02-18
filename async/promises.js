/*
let promise=new Promise((resolve,reject)=>{
    resolve("success");
});

function getdata(dataId,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      //      console.log("data ",dataId);
      //      resolve("sucess");
              reject("error occured");
            if(getnextdata){
                getnextdata();
            }
        },5000);
    });
}

let data=getdata(1);
*/
let getadata=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
       // resolve("succes");
          reject("error");
    })
}

let promise=getadata();
promise.then((res)=>{
    console.log("promise resolved ",res);
})
promise.catch((err)=>{
    console.log("promise ",err);
})