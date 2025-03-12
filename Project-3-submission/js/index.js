const TaskBox = document.getElementById('Task-Box')
const TaskList = document.getElementById('Task-List')

function AddTask() {
    if(TaskBox.value === '') {
        alert("Please enter a task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = TaskBox.value;
        TaskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    TaskBox.value = '';
}

