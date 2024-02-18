class Toyotacar{
    constructor(){
        console.log("creating new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}

let fortuner=new Toyotacar();
fortuner.setBrand("fortuner");

let lexus=new Toyotacar();
lexus.setBrand("lexus");

