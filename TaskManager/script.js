const taskName = document.getElementById("taskName");
const taskPriority = document.getElementById("taskPriority");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  sortedTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add(task.priority.toLowerCase());
    li.innerHTML = `
      ${task.name} 
      <span>(${task.priority})</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTaskBtn.addEventListener("click", () => {
  const name = taskName.value.trim();
  const priority = taskPriority.value;

  if (name === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push({ name, priority });
  taskName.value = "";
  renderTasks();
});

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
