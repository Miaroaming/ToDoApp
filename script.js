function addTodo() {
    // get the input element and its value
    const input = document.getElementById("todo-input");
    //get value and trim whitespace from start/end
    const inputValue = input.Value.trim();

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