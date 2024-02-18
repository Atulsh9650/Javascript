const add=(a,b)=>console.log(a+b);
add(5,6);
//create a function which return no. of vowels in string
const vowelcount=(str)=>{
  let count=0;
 for(let ele of str){
   if(ele=='i' || ele=='a' ||ele=='e' || ele=='o' || ele=='u'){
    count++;
   }
 }
  return count;
};
let count =vowelcount("hellooa");
console.log("total count is ",count );