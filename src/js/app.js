 
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

        //Create a complete button for each task
        const completeButton = document.createElement('button')
        completeButton.textContent =  '';
        completeButton.className = 'completeButton';

        // Add task complete functionality to the button
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');    
            completeButton.classList.toggle('filledCircle');
        });

        // Create a delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        
        // Add delete functionality to the button
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Prepend complete button to <li>, append the delete button to the <li>, then the <li> to the <ul>
        li.prepend(completeButton);
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