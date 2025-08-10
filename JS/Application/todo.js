let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let list = document.querySelector("ol");

function show(colArr){
    list.innerText = "";
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li); 
    }

}

btn.addEventListener("click", async ()=>{
    let state = inp.value;
    let colArr = await getColInfo(state);
    show(colArr);
})

 async function getColInfo(state) {
    try{
        let res = await axios.get(url+state);
        return res.data;
    }catch(err){
        console.log(err);
    }
 }