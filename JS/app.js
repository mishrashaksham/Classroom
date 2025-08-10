let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
});

btn.addEventListener("click", ()=>{
    let item = document.createElement("li");
    item.innerText = inp.value;
    let del = document.createElement("button");
    del.innerText = "Delete!!";
    ul.appendChild(item);
    item.appendChild(del);
    inp.value = "";
});

ul.addEventListener("click", (event)=>{
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});