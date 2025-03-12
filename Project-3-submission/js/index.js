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
    SaveData();
}

TaskList.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        SaveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

var input = document.getElementById("Task-Box");
input.addEventListener("keypress", function(e){
    if(e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("Add-Task").click();
    }
});

function SaveData() {
    localStorage.setItem("data", TaskList.innerHTML);
}

function LoadData() {
    TaskList.innerHTML = localStorage.getItem("data");
}

LoadData();