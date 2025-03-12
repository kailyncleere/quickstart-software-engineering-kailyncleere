const TaskBox = document.getElementById('Task-Box')//user input
const TaskList = document.getElementById('Task-List')//list of tasks

//add task function to append li element to ul
function AddTask() {
    if(TaskBox.value === '') {
        alert("Please enter a task");
    }
    else {
        let li = document.createElement("li");
        li.classList.toggle('unchecked');
        li.innerHTML = TaskBox.value;
        TaskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    TaskBox.value = '';
    SaveData();
}

//adding task on clicking add task button and removing task on clicking close button
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

//adding task on pressing enter
var input = document.getElementById("Task-Box");
input.addEventListener("keypress", function(e){
    if(e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("Add-Task").click();
    }
});

//saving to local storage
function SaveData() {
    localStorage.setItem("data", TaskList.innerHTML);
}

function LoadData() {
    TaskList.innerHTML = localStorage.getItem("data");
}

LoadData();