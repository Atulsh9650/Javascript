class Person{
    constructor(){
        this.speicies="homo sapiens";
    }
    eat(){
        console.log("person eat");
    }
    sleep(){
        console.log("every one eat");
    }
}
class Doctor extends Person{
    constructor(){
        super();
        this.branch="mechanical";
    }
    work(){
        console.log("TReat Pateints");
    }
}
class Engineer{
    work(){
        console.log("solve problems");
    }
}
let atul=new Doctor();
//super we can use super keyword to called parent class constructor