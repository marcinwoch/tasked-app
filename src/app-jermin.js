//jshint esnext:true

const tasks = [];

function createHTMLElement(task) {
    const HTMLelement = document.createElement("div");
    const HTMLinput = createInput(task.name, task.id);
    const HTMLcheckbox = createCheckbox(task.isDone, task.id);
    const HTMLbutton = createRemoveButton(task.id);
    HTMLelement.appendChild(HTMLinput);
    HTMLelement.appendChild(HTMLcheckbox);
    HTMLelement.appendChild(HTMLbutton);

    return HTMLelement;
}


function createInput(value, id) {
    const HTMLInput = document.createElement("input");
    HTMLInput.value = value;
    HTMLInput.addEventListener('input', (e) => {
        tasks.find((element) => element.id === id).name = e.target.value;
    });
    return HTMLInput;
}

function createRemoveButton(id) {
    const HTMLButton = document.createElement("button");
    HTMLButton.innerHTML = "x";
    HTMLButton.addEventListener('click', () => removeElement(id));
    return HTMLButton;
}

function createCheckbox(isChecked, id) {
    const HTMLInput = document.createElement("input");
    HTMLInput.type = "checkbox";
    HTMLInput.checked = isChecked;
    HTMLInput.addEventListener('click', (e) => {
        tasks.find((element) => element.id === id).isDone = !isChecked;
    });
    return HTMLInput;
}

function renderTasks() {
    console.log(tasks)
    const container = document.querySelector("#container");
    container.innerHTML = ''; // resetuje kontener
    const HTMLelements = tasks.map((task) => {
        const newElement = createHTMLElement(task);
        container.appendChild(newElement);
    })
}

function addElement() {
    tasks.push({
        id: Math.floor(Math.random() * 100),
        name: "",
        isDone: false,
    });

    renderTasks()
}

function removeElement(id) {
    console.log("removing", id);
    const index = tasks.findIndex((element) => element.id === id);
    tasks.splice(index, 1);
    renderTasks();
}