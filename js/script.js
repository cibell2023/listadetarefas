const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const listTasks = [];
let id = 0;

function addTask(){
    
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskItemContainer.innerText = inputElement.value;
    taskContent.id = id

    taskItemContainer.appendChild(taskContent);

    tasksContainer.appendChild(taskItemContainer);
    if(inputElement.value != ""){
        listTasks.push(inputElement.value);
    }
    inputElement.value = "";
    id++
}

addTaskButton.addEventListener("click", () => addTask());