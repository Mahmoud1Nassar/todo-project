function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskTable = document.getElementById("taskTable").getElementsByTagName('tbody')[0]; // Get table body

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var newRow = taskTable.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.textContent = taskInput.value;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            newRow.style.textDecoration = "line-through";
        } else {
            newRow.style.textDecoration = "none";
        }
    });

    cell2.appendChild(checkbox);

    taskInput.value = "";
}

function deleteCheckedTasks() {
    var taskTable = document.getElementById("taskTable").getElementsByTagName('tbody')[0];
    var checkedItems = taskTable.querySelectorAll("input[type='checkbox']:checked");

    checkedItems.forEach(function(item) {
        item.parentNode.parentNode.remove();
    });
}

function selectAll() {
    var checkboxes = document.querySelectorAll("#taskTable input[type='checkbox']");
    var selectAllButton = document.querySelector("button");

    checkboxes.forEach(function(checkbox) {
        checkbox.checked = !checkbox.checked;
    });
}









