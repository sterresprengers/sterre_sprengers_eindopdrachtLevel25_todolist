async function awaitGetData () {
    const fetchedData = await getData();
    console.log("Fetching worked", fetchedData);
    fetchedData.map(data => {addTaskToList(data)});
    activateBtnDel(fetchedData);
    activateBtnCheckbox(fetchedData);
};
awaitGetData();

const toDoList = document.querySelector("#to-do-list");

const addTaskToList = (data) => {
    const dataId = data._id;
    console.log(dataId);
    const labelElement = document.createElement("label");
    labelElement.classList.add("task-item");
    // >> delete button:
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-del");
    const iElement = document.createElement("i");
    iElement.setAttribute("class", "fa fa-trash");
    iElement.value = dataId;
    // >> checkbox element:
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("class", "btn-checkbox");
    newCheckbox.value = dataId;
    // console.log(newCheckbox);
    const checkboxText = document.createTextNode(data.description);
    btnDelete.appendChild(iElement);
    labelElement.appendChild(newCheckbox);
    labelElement.appendChild(checkboxText);
    labelElement.appendChild(btnDelete);
    toDoList.appendChild(labelElement);
};

const btnAddNewTask = document.querySelector("#btn-add-new-task");
btnAddNewTask.addEventListener("click", async () => {
    const data = await postData();
    addTaskToList(data);
    return data;
});

const activateBtnDel = () => {
    const btnDeleteTask = document.querySelectorAll(".btn-del");
    btnDeleteTask.forEach(button => { 
        button.addEventListener("click", async (event) => {
            if (event.target.className = "btn-del") {
                const taskId = event.target.value;
                deleteData(taskId);
            };
            toDoList.querySelectorAll('*').forEach(n => n.remove());
            awaitGetData();
        });
    });
};

const activateBtnCheckbox = () => {
    const btnCheckbox = document.querySelectorAll(".btn-checkbox");
    btnCheckbox.forEach(button => {
        button.addEventListener("change", (event) => {
            const taskId = event.target.value;
            const connectedLabel = event.target.parentNode;
            putData(taskId, connectedLabel);
        });
    });
};