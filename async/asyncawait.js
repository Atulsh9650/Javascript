function getdata(dataid){
    return new Promise((resolve, reject) => { 
     setTimeout(()=>{
      console.log("data",dataid);
      resolve("sucess");
     },2000);
     });
}

async function getalldata(){
    console.log("getting data1..");
    await getdata(1);
    console.log("getting data2..");
    await getdata(2);
    console.log("getting data3..");
    await getdata(3);
}

getalldata();