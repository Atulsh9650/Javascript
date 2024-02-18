let data="some data";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("user name is ",this.name,"and email is ",this.email);
        console.log(data);
    }
}
class Admin extends User{
   constructor(name,email){
    super(name,email);
   }
   editdata(){
    data="value changed";
   }
}
let user1=new User("atul","shsjn");
user1.viewdata();

let admin=new Admin("admin1","dhdbhdc");