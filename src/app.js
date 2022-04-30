//Add event listeners to items

function addItemEventListeners (item){
  const textarea = item.querySelector('.todo-text');
  const eraseButton = item.querySelector('.erase-task-btn');
  addTextareaEventListeners(textarea);
  addEraseButtonEventListeners(eraseButton);
}

//Add event listeners to textarea node
function addTextareaEventListeners (textarea){
  textarea.addEventListener('focus', function () {
    textarea.style.backgroundColor = "red";
  })

  textarea.addEventListener('blur', function () {
      textarea.style.backgroundColor = "green";
  })
}

//Add event listeners to erase button node

function addEraseButtonEventListeners (eraseButton){
  eraseButton.addEventListener('click', function () {
    eraseButton.parentElement.remove();
  });
}

//Add task item
function newElement (blueprint){
  const xItem = blueprint.cloneNode(true);
  addItemEventListeners(xItem);
  const taskContainer = document.querySelector('#task-container');
  taskContainer.prepend(xItem);
}

//Get .todo-item and add item listeners

function handleTodoItems () {
  const getInputs = document.querySelectorAll('.todo-item');

  for (let i = 0; i < getInputs.length; i++) {
    addItemEventListeners(getInputs[i]);
  }
}

//Get .add-item-btn and add new div item

function handleButton (blueprint){
  const addTaskBtn = document.querySelector("#add-item-btn");
  addTaskBtn.addEventListener('click', function(){
    newElement(blueprint);
  });
}

//Create the blueprint of div.todo-item

function createBlueprint () {
  const newItem = document.querySelector('div.todo-item');
  const clonedItem = newItem.cloneNode(true);
  return clonedItem;
}

//Result (clonedItem) of createBlueprint() is referanced to blueprint variable
const blueprint = createBlueprint();

handleButton(blueprint);

handleTodoItems();






//Auto-strech textarea

const tx = document.getElementsByClassName("todo-text");

for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}


