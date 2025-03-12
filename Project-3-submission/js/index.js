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

TaskList.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);
