let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  let taskContainer = document.getElementById('taskContainer');
  taskContainer.innerHTML = '';

  tasks.forEach((task, index) => {
    let priorityClass = '';

    if (task.priority === 'High') {
      priorityClass = 'priority-high';
    } else if (task.priority === 'Medium') {
      priorityClass = 'priority-medium';
    } else if (task.priority === 'Low') {
      priorityClass = 'priority-low';
    }

    taskContainer.innerHTML += `
      <div class="task-card ${task.status === 'Completed' ? 'completed' : ''}">
        <h3>${task.projectName}</h3>
        <p><strong>Task:</strong> ${task.taskName}</p>
        <p><strong>Deadline:</strong> ${task.deadline}</p>
        <p><strong>Priority:</strong> <span class="${priorityClass}">${task.priority}</span></p>
        <p><strong>Status:</strong> ${task.status}</p>

        <div class="task-actions">
          <button class="complete-btn" onclick="markCompleted(${index})">Mark Completed</button>
          <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

function addTask() {
  let projectName = document.getElementById('projectName').value.trim();
  let taskName = document.getElementById('taskName').value.trim();
  let deadline = document.getElementById('deadline').value;
  let priority = document.getElementById('priority').value;
  let status = document.getElementById('status').value;

  if (
    projectName === '' ||
    taskName === '' ||
    deadline === '' ||
    priority === '' ||
    status === ''
  ) {
    alert('Please fill all fields');
    return;
  }

  tasks.push({
    projectName: projectName,
    taskName: taskName,
    deadline: deadline,
    priority: priority,
    status: status
  });

  saveTasks();
  renderTasks();

  document.getElementById('projectName').value = '';
  document.getElementById('taskName').value = '';
  document.getElementById('deadline').value = '';
  document.getElementById('priority').value = '';
  document.getElementById('status').value = '';
}

function markCompleted(index) {
  tasks[index].status = 'Completed';
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function clearAllTasks() {
  tasks = [];
  saveTasks();
  renderTasks();
}

renderTasks();