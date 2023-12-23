const inputBox = document.getElementById("task_input");
const listContainer = document.getElementById("list-container");
function addTask() {
    if(inputBox.value === ''){
        alert("No task added yet")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function () {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();