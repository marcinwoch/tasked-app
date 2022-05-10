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
    let newID = "ID#" + Math.floor(Math.random() * 10000);
    return newID;
}

function handleBtn() {
    const btn = document.querySelector("#add-item-btn");
    btn.addEventListener("click", function () {
        let taskContainer = document.querySelector("#task-container");
        let createNewID = createID();
        //   console.log(createNewID);
        let newItemElement = Object.assign({}, itemElement);
        newItemElement.id = String(createNewID);
        //   console.log(newItemElement);
        taskList.push(newItemElement);
        console.log(taskList);
        // console.log(taskList.length);

        for (let i = 0; i < taskList.length; i++) {
            console.log(taskList[i].content);
            taskContainer.prepend(taskList[i].content);
        }


        // taskList.forEach(function (index) {
        //     let list = 
        //     console.log(index.content);

        // })

    });
}


let taskList = [];

const blueprint = createBlueprint();

let itemElement = {
    id: "",
    content: blueprint,
    isDone: false
};

handleBtn();

  // https://jsbin.com/minutesoye/edit?html,js,console,output







