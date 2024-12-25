const dateElement = document.querySelector("#date");
const input = document.querySelector("#input");
const saveIcon = document.querySelector("#saveIcon");
const newTask = document.querySelector("#newTask");
const inputFocus = document.querySelector("#inputFocus");


//date functionality
const today = new Date();
const dayName = today.toLocaleString("default", { weekday: "long" });
const monthName = today.toLocaleString("default", { month: "long" });
const date = today.getDate();

dateElement.textContent = `${monthName} ${date}, ${dayName}`;



saveIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();

  if (!inputValue) {
    alert("Enter your task");
    return;
  }

  // Create task elements
  const task = document.createElement("div");
  task.classList.add("task");

  const taskInput = document.createElement("textarea");//change input to textarea

  taskInput.type = "text";
  taskInput.value = inputValue;
  taskInput.readOnly = true;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Append elements
  task.append(taskInput, editButton, deleteButton);
  newTask.appendChild(task);

  // Clear input
  input.value = "";

  // Edit functionality
editButton.addEventListener("click", () => {
  if (editButton.innerText.toLowerCase() === "edit") {
    editButton.innerText = "save";
    taskInput.removeAttribute("readonly");
    taskInput.focus();
  } else {
    editButton.innerText = "edit";
    if (taskInput.value === '') {
      alert('Write something or delete the task');
    }
    taskInput.setAttribute("readonly", "readonly");
  }
});


  // Delete functionality
  deleteButton.addEventListener("click", () => {
    newTask.removeChild(task);
  });

  //checked functionality
  taskInput.addEventListener("click", () => {
    if (editButton.innerText.toLowerCase() === "save") {
      return; 
    }
    if (taskInput.classList.contains("checked")) {
      taskInput.classList.remove("checked");
    } else {
      taskInput.classList.add("checked");
    }
  });
});

//Focus button functionality
inputFocus.addEventListener("click", () => {
  input.focus();
});
