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
    let cloneItem = blueprint.cloneNode(true);
    return cloneItem;
}

function removeTask(id) {

}

function handleBtn() {
    const btn = document.querySelector("#add-item-btn");
    btn.addEventListener("click", function () {
        let taskContainer = document.querySelector("#task-container");
        let createNewID = createID();
        let newItemElement = Object.assign({}, itemElement);

        newItemElement.id = String(createNewID);

        taskList.push(newItemElement);
        taskContainer.prepend(cloneItem(blueprint));

        console.log(taskList);

        toggleDisplay();

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

handleBtn();
toggleDisplay();







