if(Storage.length !== 0){

}

const inputBox = document.querySelector("#inputBox");
const tasks = document.querySelector("#tasks");

inputBox.focus();
const hr = document.createElement("hr");  

const minus = document.createElement('button');
minus.classList.add("btn");
minus.innerHTML = "-"; 
minus.style.marginLeft = "10px";
minus.style.marginRight = "10px";

inputBox.addEventListener("keyup", addTask);

function addTask(e){
    if(e.key == "Enter"){
        let taskNumber = tasks.children.length;
        if(taskNumber == 0){
            tasks.innerHTML = "";
        }

        const newTask = document.createElement("div");
        newTask.classList.add("taskItem");
        newTask.id = "";

        const taskInfo = document.createElement("h3");
        taskInfo.innerHTML = inputBox.value;
        inputBox.value = "";
        
        newTask.appendChild(taskInfo);
        newTask.appendChild(minus.cloneNode(true));

        tasks.appendChild(newTask);
        tasks.appendChild(hr.cloneNode(true));
    }
}

document.addEventListener('click', (e) => {
    if(e.target.className == "btn"){
        tasks.removeChild(e.path[1].nextSibling);
        tasks.removeChild(e.path[1]);
        if(tasks.children.length == 0){
            tasks.innerHTML = "No Tasks - Enjoy Your Day";
        }
        console.log(tasks.children);
    }
})