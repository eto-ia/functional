let tasks = [];
let filter = "all";

const addTask = (title) => {
  const newTask = { id: Date.now(), title, completed: false };
  tasks = [...tasks, newTask];
  render();
};

const toggleTask = (id) => {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  render();
};

const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
  render();
};

const getFilteredTasks = () => {
  const filters = {
    all: tasks,
    active: tasks.filter(task => !task.completed),
    completed: tasks.filter(task => task.completed)
  };
  return filters[filter];
};

const render = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  getFilteredTasks().forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = task.title;
    span.onclick = () => toggleTask(task.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Удалить";
    delBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
};

document.getElementById("addTaskBtn").onclick = () => {
  const input = document.getElementById("taskInput");
  const title = input.value.trim();
  if (title) {
    addTask(title);
    input.value = "";
  }
};

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  };
});

render();
