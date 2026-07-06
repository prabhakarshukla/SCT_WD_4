const taskInput = document.querySelector("#taskInput");
const taskDate = document.querySelector("#taskDate");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", addTask);

function addTask(){
    const taskText = taskInput.value.trim();
    const taskTime = taskDate.value;
}