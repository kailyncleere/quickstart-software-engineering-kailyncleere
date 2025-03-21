const TaskBox = document.getElementById('Task-Box')//user input
const TaskList = document.getElementById('Task-List')//list of tasks
let CurrentFilter = 'all'; //stores the status of list items

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
    FilterTask(CurrentFilter);
}

//adding task on clicking add task button and removing task on clicking close button
TaskList.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        SaveData();
        FilterTask(CurrentFilter);
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

//filtering tasks
function FilterTask(status) {
    CurrentFilter = status;
    let tasks = Array.from(TaskList.getElementsByTagName('li'));

    if (status === 'all') {
        tasks.sort((a,b) => {
            if (a.classList.contains('checked') && !b.classList.contains('checked')) {
                return 1;
            }
            else if (!a.classList.contains('checked') && b.classList.contains('checked')) {
                return -1;
            }
            else {
                return 0;
            }
        })
        tasks.forEach(task => TaskList.appendChild(task));
    }

    for (let task of tasks) {
        switch(status) {
            case 'all':
                task.style.display = '';
                break;
            case 'completed':
                task.style.display = task.classList.contains('checked') ? '' : 'none';
                break;
            case 'uncompleted':
                task.style.display = task.classList.contains('checked') ? 'none' : '';
                break;
        }
    }
}

document.getElementById('AllTaskBtn').addEventListener('click', function() {
    FilterTask('all');
});

document.getElementById('CompleteTaskBtn').addEventListener('click', function() {
    FilterTask('completed');
});

document.getElementById('IncompleteTaskBtn').addEventListener('click', function() {
    FilterTask('uncompleted');
});

//saving to local storage
function SaveData() {
    localStorage.setItem("data", TaskList.innerHTML);
}

function LoadData() {
    TaskList.innerHTML = localStorage.getItem("data");
    FilterTask(CurrentFilter);
}

LoadData();