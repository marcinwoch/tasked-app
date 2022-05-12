function createBlueprint() {
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

function createID() {
    let newID = "ID#" + Math.floor(Math.random() * 1000 + 1);
    return newID;
}

function cloneItem(blueprint) {
    let clonedBlueprint = blueprint.cloneNode(true);
    return clonedBlueprint;
}


function renderTasks() {
    const container = document.querySelector("#task-container");
    container.innerHTML = '';
    console.log(taskList);
    taskList.forEach(() => {
        container.prepend(cloneItem(blueprint));
    }) // resetuje kontener

    console.log(container);

}

function removeTask(id) {
    const removeBtn = document.querySelector(".erase-task-btn");

    removeBtn.addEventListener('click', () => {
        const index = taskList.findIndex((element) => element.id === id);
        console.log(index);
        taskList.splice(index, 1);
        console.log(taskList);

        toggleDisplay();
        renderTasks()
    })

}

function addTask() {
    const addBtn = document.querySelector("#add-item-btn");
    addBtn.addEventListener("click", function () {
        let taskContainer = document.querySelector("#task-container");
        let createNewID = createID();
        let newItemElement = Object.assign({}, itemElement);

        newItemElement.id = String(createNewID);

        taskList.unshift(newItemElement);
        console.log(taskList);
        taskContainer.prepend(cloneItem(blueprint));

        toggleDisplay();
        renderTasks();
        removeTask(newItemElement.id)

    });
}

function toggleDisplay() {
    const getItem = document.querySelectorAll('.todo-item');

    if (getItem.length === 0) {
        headerItem.classList.remove('hide')
    } else {
        headerItem.classList.add('hide')
    }
}

let taskList = [];

const headerItem = document.querySelector(".header-add-item");

const blueprint = createBlueprint();

let itemElement = {
    id: "",
    content: "",
    isDone: false
};

addTask();
toggleDisplay();







