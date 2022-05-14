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


function removeTask(id, taskContainer) {
    const removeBtn = document.querySelector(".erase-task-btn");

    removeBtn.addEventListener('click', () => {
        const index = taskList.findIndex((element) => {
            return element.id === id
        });

        taskList.splice(index, 1);

        if (taskContainer.hasChildNodes()) {
            taskContainer.removeChild(taskContainer.children[index]);
        }

        toggleDisplay();

    })

}

function addTask() {
    const addBtn = document.querySelector("#add-item-btn");

    let taskContainer = document.querySelector("#task-container");
    let createNewID = createID();
    let newItemElement = Object.assign({}, itemElement);

    newItemElement.id = String(createNewID);

    taskList.unshift(newItemElement);
    taskContainer.prepend(cloneItem(blueprint));

    toggleDisplay();

    inputStatus(newItemElement.id, taskContainer);
    checkboxStatus(newItemElement.id, taskContainer);
    removeTask(newItemElement.id, taskContainer);

}

function inputStatus(id, taskContainer) {
    const inputElement = taskContainer.querySelector(".todo-text");

    inputElement.addEventListener('blur', () => {
        const index = taskList.findIndex((element) => {
            return element.id === id
        });
        taskList[index].content = inputElement.value;
    });
}

function checkboxStatus(id, taskContainer) {
    const checkboxElement = taskContainer.querySelector(".todo-check");

    checkboxElement.addEventListener('click', () => {
        const index = taskList.findIndex((element) => {
            return element.id === id
        });

        if (taskList[index].isDone === false) {
            taskList[index].isDone = true
        } else {
            taskList[index].isDone = false;
        }

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







