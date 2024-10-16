const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value === '') {  // if there's nothing in the input box
        alert("Write something...");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  // task displayed

        // to delete a task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // cross "x" icon
        li.appendChild(span);
    }
    inputBox.value = "";
}