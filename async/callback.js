function getdata(dataId,getnextdata){
    setTimeout(()=>{
        console.log("data ",dataId);
        if(getnextdata){
            getnextdata();
        }
    },2000);
}

//callback hell nested callback
getdata(1,()=>{
    console.log("getting data2...");
    getdata(2,()=>{
        console.log("getting data3...");
        getdata(3,()=>{
            console.log("getting data4...");
            getdata(4);
        });
    });
});