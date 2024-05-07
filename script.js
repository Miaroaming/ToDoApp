function addTodo() {
    // get the input element and its value
    const input = document.getElementById("todo-input");
    //get value and trim whitespace from start/end
    const inputValue = input.value.trim();

    //check to see if the input value isnt empty
    if (inputValue !== "") {
        //create a new list item
        // get the unordered list:
        const todoList = document.getElementById("todo-list");
        // create a list item using createElement:
        const li = document.createElement("li");
        // create a checkbox using createElement:
        const checkbox = document.createElement("input");
        // set checkbox input to a checkbox
        checkbox.type = "checkbox";
        // create a textNode that uses the inputvalue
        const textNode = document.createTextNode(inputValue);
        
        // Append checkbox and text to the list item:
        li.appendChild(checkbox);
        li.appendChild(textNode);
        //Append the list item to the ul of todo list:
        todoList.appendChild(li);
    } else {
        // alert user if value is empty
        alert("Please enter a valid todo item");
    }
}

// Add event listener to the "add" button to add a new to do item:
document.getElementById('add-button').addEventListener("click", addTodo);

//event listener to mark todo items as completed
// onchange event on the to do item
document.getElementById("todo-list").addEventListener("change", function(event) {
    // check if the event trigger was a checkbox
    if (event.target.type === "checkbox") {
        // get the parent list item of the checkbox
        const listItem = event.target.parentNode;
        //check if the checkbox is checked or not
        if (event.target.checked) {
            // apply line-through style when the checkbox is checked:
            listItem.style.textDecoration = "line-through";
        } else {
            // remove the line-through when unchecked:
            listItem.style.textDecoration = "none";
        }
    }
});