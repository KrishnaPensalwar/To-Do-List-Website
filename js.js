const inputbox= document.getElementById("input-box");
const listcont=document.getElementById("list-container");

function AddTask(){
    if(inputbox===''){
        
    }

    else {
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcont.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputbox.value="";
    savedata();

    

}

function message(){
    
}
listcont.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",listcont.innerHTML);
}

function showdata(){
    listcont.innerHTML=localStorage.getItem("data");
}
showdata();
message();