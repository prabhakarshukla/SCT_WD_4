const taskInput = document.querySelector("#taskInput");
const taskDate = document.querySelector("#taskDate");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", addTask);

function addTask(){

    const taskText = taskInput.value.trim();
    const taskTime = taskDate.value;

    if(taskText === ""){

        alert("Please enter a task!");
        return;

    }

    createTask(taskText, taskTime);

    taskInput.value = "";
    taskDate.value = "";

    saveTasks();

}

function createTask(taskText, taskTime, isCompleted = false){
    const li = document.createElement("li");
    li.classList.add("task");
    if(isCompleted){
    li.classList.add("completed");
}
    li.innerHTML = `
<div class="task-info">
    <h3>${taskText}</h3>
    <p>${taskTime}</p>
</div>

<div class="task-actions">

    <button class="complete-btn">
        <i class="fa-solid fa-check"></i>
    </button>

    <button class="edit-btn">
        <i class="fa-solid fa-pen"></i>
    </button>

    <button class="delete-btn">
        <i class="fa-solid fa-trash"></i>
    </button>

</div>
`;
taskList.appendChild(li);
const deleteBtn = li.querySelector(".delete-btn");
const completeBtn = li.querySelector(".complete-btn");
const editBtn = li.querySelector(".edit-btn");
deleteBtn.addEventListener("click", function(){

    li.remove();
    saveTasks();
});
completeBtn.addEventListener("click", function(){

    li.classList.toggle("completed");
    saveTasks();
});
editBtn.addEventListener("click", function(){
    const taskHeading = li.querySelector("h3");
    const updatedTask = prompt(
        "Edit your task:",
        taskHeading.textContent
    );

    if(updatedTask !== null && updatedTask.trim() !== ""){

        taskHeading.textContent = updatedTask.trim();

    }
    saveTasks();
});
}

function saveTasks(){

    const tasks = [];

    const allTasks = document.querySelectorAll(".task");

    allTasks.forEach(function(task){

        const text = task.querySelector("h3").textContent;

        const date = task.querySelector("p").textContent;

        tasks.push({

            text: text,

            date: date,

            completed: task.classList.contains("completed")

        });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function(task){
        createTask(task.text, task.date, task.completed);
    });
}
loadTasks();

searchInput.addEventListener("input", function(){

    const searchText = searchInput.value.toLowerCase();

    const allTasks = document.querySelectorAll(".task");

    allTasks.forEach(function(task){

        const taskName = task.querySelector("h3").textContent.toLowerCase();

        if(taskName.includes(searchText)){

            task.style.display = "flex";

        }else{

            task.style.display = "none";

        }

    });

});