let btn=document.querySelector("button");
let body=document.querySelector("body");
let currMode="light";
btn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        btn.style.background="black";
        btn.style.color="white";
        
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        btn.style.background="white";
        btn.style.color="black";
        body.classList.add("light");
        body.classList.remove("dark");
    }
console.log(currMode)
})