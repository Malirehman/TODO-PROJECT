const inputbox = document.getElementById("inputb");
const listcon = document.getElementById("listc");
function addtask(){
    if(inputbox.value===''){
        alert("you must add task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = '';
    savedata()
}

listcon.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("CHECKED");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcon.innerHTML);
}
function showtask(){
    listcon.innerHTML = localStorage.getItem("data");
}
showtask();