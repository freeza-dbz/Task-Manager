let tasks = [];

function addTask() {
    const inputElem = document.getElementById("task-input");
    let taskText = inputElem.value;

    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        task: taskText,
        completed: false
    });

    inputElem.value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks available.</p>";
    } else {
        tasks.forEach((task, index) => {
            let taskElement = document.createElement("li");
            if (task.completed) {
                taskElement.style.textDecoration = "line-through";
            }

            taskElement.textContent = task.task;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function () {
                deleteTask(index);
            };

            taskElement.appendChild(deleteButton);
            taskList.appendChild(taskElement);
        });
    }
    document.getElementById("task-count").textContent = `Total Tasks: ${tasks.length}`;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

document.getElementById("add-task").addEventListener("click", addTask);