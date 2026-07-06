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
    const li = document.createElement("li");
    li.classList.add("task");
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
deleteBtn.addEventListener("click", function(){

    li.remove();

});
completeBtn.addEventListener("click", function(){

    li.classList.toggle("completed");

});
taskInput.value = "";
taskDate.value = "";
}