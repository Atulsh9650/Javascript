const url="https://cat-fact.herokuapp.com/facts";
let btngetfact=document.querySelector("#getfact");
let parafact=document.querySelector(".factdata");

const getfacts=async()=>{
   console.log("fetching data...");
   let response= await fetch(url);
   let data=await response.json();
   let idx=Math.floor(Math.random()*6);
   parafact.innerText=data[idx].text;
}

btngetfact.addEventListener('click',()=>{
    getfacts();
})
/*
function getfact(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
*/