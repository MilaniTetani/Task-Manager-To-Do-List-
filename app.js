const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value === '') {  // if there's nothing in the input box
        alert("Write something...");
    }
    else {
        // Create a new <li> element for the task
        let li = document.createElement("li");  

        // Get the selected category
        let selectedCtgry = document.getElementById("categories").value;

        // Combines the task input with category and display it in the list item
        li.innerHTML = inputBox.value + " (" + selectedCtgry + ")";
        listContainer.appendChild(li);  // task displayed

        // delete a task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // cross "x" icon
        li.appendChild(span); 
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    // when ever we click on the container where we stored the tasks...
    if (e.target.tagName === "LI") {   // it will check if we clicked on "LI"
        e.target.classList.toggle("checked"); //then if the class name is already there it will remove that AS CHECKED (line-through)
        saveData();
    }
    else if (e.target.tagName === "SPAN") { // if we check on "SPAN" the cross icon
        e.target.parentElement.remove();  // the task will be REMOVED/DELETED
        saveData();
    }
}, false);

// saves your current/old tasks (if not removed) even when the browser is closed or refreshed
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// displays saved tasks when opening browser
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();

function currentDate() {
    const time = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = time.toLocaleDateString('en-US', options);
    document.getElementById("time_date").innerHTML = formattedDate;
}
// Call the function when the page loads
window.onload = currentDate;

// function clearTasks() {
//     localStorage.clear();  // This clears all localStorage data
//     listContainer.innerHTML = "";  // Clears the displayed task list
// }
