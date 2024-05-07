const inputBox =document.getElementById("inputbox");
const taskList =document.getElementById("tasklist");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        taskList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value="";
    saveTask();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false)

function saveTask(){
    localStorage.setItem("task",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML=localStorage.getItem("task");
}
showTask();