const body = document.querySelector("body");
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

if(darkTheme.matches){
    dark.style.display = "none";
    light.style.display = "block";
    const message = document.createElement("div");
    message.innerHTML = "System Theme: Dark";
    message.className = "message";
    body.appendChild(message);
    setTimeout(()=> {
        body.removeChild(message);
    }, 1000)
}
else{
    dark.style.display = "block";
    light.style.display = "none";
    const message = document.createElement("div");
    message.innerHTML = "System Theme: Light";
    message.className = "message";
    body.appendChild(message);
    setTimeout(()=> {
        body.removeChild(message);
    }, 1000)
}

light.addEventListener("click", () => {
    light.style.display = "none";
    dark.style.display = "block";
    body.style.color = "black";
    body.style.backgroundColor = "white";
})

dark.addEventListener("click", () => {
    dark.style.display = "none";
    light.style.display = "block";
    body.style.color = "white";
    body.style.backgroundColor = "black";
})

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
        taskInfo.style.overflowX = "auto";
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