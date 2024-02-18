let items=document.getElementById('items');

let item5=document.createElement('li');
item5.innerText="item5";

items.append(item5);

let heading=document.createElement("h1");
heading.innerText="hello this is main heading";

let heading2=document.createElement("h2");
heading2.innerText="hello this is sub heading";

document.getElementById("maindiv").prepend(heading);
document.getElementById("maindiv").append(heading2);

//delte element
//node.remove()

let h2=document.querySelector("h2");
h2.remove();


let btn=document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";
btn.style.cursor="pointer";

document.getElementById("maindiv").append(btn);

