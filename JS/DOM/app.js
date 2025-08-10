function generate(){
   let i = Math.ceil(Math.random()*255);
    return i;
}

let btn = document.querySelector(".clickBtn");
let disp = document.querySelector(".heading");
let box = document.querySelector(".changeColor");

btn.addEventListener("click", function(){
    let i =[1];
    for(let c = 0; c<3; c++){
        i[c]=generate();
    }
    let color = `rgb(${i[0]}, ${i[1]}, ${i[2]})`;
    disp.innerText = color;
    box.style.backgroundColor = color;
});