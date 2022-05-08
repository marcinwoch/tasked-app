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
    toggleDisplay();
  });
}

//Add event listeners to checkbox input

function addCheckboxEventListeners (chechbox, textarea){
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
    toggleDisplay();
  });

}

//Create the blueprint of div.todo-item

function createBlueprint () {
  const todoRootElement = document.createElement('div');
  todoRootElement.setAttribute("class", "todo-item");

  const checkboxElement = document.createElement('input');
  checkboxElement.setAttribute("type", "checkbox");
  checkboxElement.setAttribute("class", "todo-check")

  const textareaElement = document.createElement('textarea');
  textareaElement.setAttribute("type", "text");
  textareaElement.setAttribute("class", "todo-text");
  textareaElement.setAttribute("rows", "1");
  textareaElement.setAttribute("placeholder", "Add task");

  const buttonElement = document.createElement('button');
  buttonElement.setAttribute("class", "erase-task-btn");

  const eraseElement = document.createElement('i');
  eraseElement.setAttribute("class", "fa fa-times");
  eraseElement.setAttribute("aria-hidden", "true");

  todoRootElement.appendChild(checkboxElement);
  todoRootElement.appendChild(textareaElement);
  todoRootElement.appendChild(buttonElement);
  buttonElement.appendChild(eraseElement); 
   
  return todoRootElement;
}

//Toggle header display

function toggleDisplay(){
  const getItem = document.querySelectorAll('.todo-item');
  
  if (getItem.length === 0){
    headerItem.classList.remove('hide')
  } else {
    headerItem.classList.add('hide')
  }
}

//Result (clonedItem) of createBlueprint() is referanced to blueprint variable
const blueprint = createBlueprint();
const headerItem = document.querySelector(".header-add-item");


handleButton(blueprint);
toggleDisplay();



