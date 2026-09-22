 
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

     // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Prevent adding empty tasks
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new <li> element dynamically
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'deleteButton';
        
        // Add delete functionality to the button
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the delete button to the <li>, then the <li> to the <ul>
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear the input box for the next task
        taskInput.value = "";
    }

    // Attach event listeners to trigger the function
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" inside the input box to add the task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });