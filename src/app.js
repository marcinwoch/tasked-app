//Add event listeners to items

function addItemEventListeners (item){
  const textarea = item.querySelector('.todo-text');
  const eraseButton = item.querySelector('.erase-task-btn');
  const checkbox = item.querySelector('.todo-check');

  addTextareaEventListeners(textarea, item);
  addEraseButtonEventListeners(eraseButton);
  addCheckboxEventListeners(checkbox, textarea);
}

//Add event listeners to textarea node
function addTextareaEventListeners (textarea, item){
  textarea.addEventListener('focus', function () {
    item.classList.add('pressed');
    textarea.classList.add('pressed');
  })

  textarea.addEventListener('blur', function () {
    item.classList.remove('pressed');
    textarea.classList.remove('pressed');
  })
}

//Add event listeners to erase button node

function addEraseButtonEventListeners (eraseButton){
  eraseButton.addEventListener('click', function () {
    eraseButton.parentElement.remove();
  });
}

//Add event listeners to checkbox input

function addCheckboxEventListeners (chechbox, textarea){
  console.log(chechbox);
  chechbox.addEventListener('click', function () {
    if (chechbox.checked === true){
      textarea.classList.add('line-through');
    }else{
      textarea.classList.remove('line-through');
    }
  });
}

//Add task item
function newElement (blueprint){
  const clonedBluprint = blueprint.cloneNode(true);
  addItemEventListeners(clonedBluprint);
  const taskContainer = document.querySelector('#task-container');
  taskContainer.prepend(clonedBluprint);
}


//Get .todo-item and add item listeners

function handleTodoItems () {
  const getItem = document.querySelectorAll('.todo-item');

  for (let i = 0; i < getItem.length; i++) {
    addItemEventListeners(getItem[i]);
  }
}

//Auto-stretch text area

function handleAutoStretch () {
  const getTextareas = document.querySelectorAll('.todo-text');

  for (let i = 0; i < getTextareas.length; i++) {
    getTextareas[i].addEventListener('input', function(){
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }
}

//Get .add-item-btn and add new div item

function handleButton (blueprint){
  const addTaskBtn = document.querySelector("#add-item-btn");
  addTaskBtn.addEventListener('click', function(){
    newElement(blueprint);
    handleAutoStretch();
  });
}

//Create the blueprint of div.todo-item

function createBlueprint () {
  const getItem = document.querySelector('div.todo-item');
  const clonedItem = getItem.cloneNode(true);
  return clonedItem;
}

//Result (clonedItem) of createBlueprint() is referanced to blueprint variable
const blueprint = createBlueprint();

handleButton(blueprint);
handleTodoItems();
handleAutoStretch();



