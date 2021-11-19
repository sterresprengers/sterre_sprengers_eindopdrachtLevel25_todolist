async function awaitGetData () {
    const fetchedData = await getData();
    console.log("Fetching worked", fetchedData);
    fetchedData.map(data => {
        // console.log(data.description);
        addTaskToList(data);
        // console.log("status of fetchedData.done is:", fetchedData.done)
        // const dataDone = data.done;
        // console.log("This is dataDone:", dataDone)
        // return dataDone
        // activateBtnCheckbox(data);
    });
    activateBtnDel(fetchedData);
    activateBtnCheckbox(fetchedData);
};
awaitGetData();

const addTaskToList = (data) => {
    const toDoList = document.querySelector("#to-do-list");
    const dataId = data._id;
    console.log(dataId);
    const labelElement = document.createElement("label");
    labelElement.classList.add("task-item");
    // >> delete button:
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-del");
    // btnDelete.value = dataId;
    // console.log("this is the btnDelete", btnDelete)
    // const btnDelText = document.createTextNode("Delete"); // to be replaced with trash-icon
    // btnDelete.appendChild(btnDelText); // to be replaced with trash-icon
    const iElement = document.createElement("i");
    // iElement.classList.add("fa fa-trash")
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
    // console.log("add new task button was clicked");
    const data = await postData();
    // console.log("Newly created task-data is:", data);
    addTaskToList(data);
    return data;
});

const activateBtnDel = () => {
    const btnDeleteTask = document.querySelectorAll(".btn-del");
    console.log("These are the del-btns:", btnDeleteTask);
    btnDeleteTask.forEach(button => { 
        button.addEventListener("click", async (event) => {
            // if (event.target.className = "btn-del") {
                event.preventDefault()
                console.log("a del-button was clicked with", event.target.value);
                const taskId = event.target.value;
                console.log("the value of clicked del-button is:", taskId);
                deleteData(taskId);
                // getData();
            // };
        });
    });
};

const activateBtnCheckbox = () => {
    const btnCheckbox = document.querySelectorAll(".btn-checkbox");
    // console.log("these are the checkbox-btns:", btnCheckbox);
    btnCheckbox.forEach(button => {
        button.addEventListener("change", (event) => {
            event.preventDefault()
            // const checkboxText = document.querySelector(`${taskId}`);
            // console.log("This is the checkbox selected via change-event", checkboxText)
            const taskId = event.target.value;
            console.log("the ID of the changed checkbox is:", taskId)
            const connectedLabel = event.target.parentNode;
            // console.log("Label connected to the checkbox is:", connectedLabel)
            // event.target.parentNode.classList.add("crossed-through");
            putData(taskId, connectedLabel);
        });
    });
};