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

let taskList = [];

const taskElement = {
    id: "ID#" + Math.floor(Math.random() * 100000),
    blueprint: createBlueprint(),
    isDone: false
}

taskList.push(taskElement);
taskList.push(taskElement);

console.log(taskList);
console.log(taskElement.blueprint);




