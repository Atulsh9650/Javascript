const student={
    fullname:"Atul Sharma",
    marks:95,
    printmarks:function(){
        console.log("marks are ",this.marks);
        return this.marks;
    }
    //this refers to same object
    //array is also an object
    //js object contains default prototypes
};

const student2={
    name:"amit"
}
student2.__proto__=student;

const student3={
    name:"sumit"
}
student3.__proto__=student;

console.log("student name",student2.name,"got",student2.printmarks());