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
    activateBtnDel();
    // activateBtnCheckbox();
};
awaitGetData();

const btnAddNewTask = document.querySelector("#btn-add-new-task");

btnAddNewTask.addEventListener("click", async () => {
    console.log("add new task button was clicked");
    const data = await postData();
    console.log("Newly created task-data is:", data);
    addTaskToList(data);
    return data;
});

const addTaskToList = (data) => {
    const toDoList = document.querySelector("#to-do-list");
    const labelElement = document.createElement("label");
    labelElement.classList.add("task-item");
    const btnDelete = document.createElement("button");
    const btnDelText = document.createTextNode("Delete"); // to be replaced with trash-icon
    btnDelete.appendChild(btnDelText); // to be replaced with trash-icon
    btnDelete.setAttribute("value", data._id);
    btnDelete.setAttribute("class", "btn-del");
    // console.log("this is the btn-del:", btnDelete);
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("class", "btn-checkbox");
    newCheckbox.setAttribute("value", data._id);
    // console.log(newCheckbox);
    const checkboxText = document.createTextNode(data.description);
    labelElement.appendChild(newCheckbox);
    labelElement.appendChild(checkboxText);
    labelElement.appendChild(btnDelete);
    toDoList.appendChild(labelElement);
};

const activateBtnDel = () => {
    const btnDeleteTask = document.querySelectorAll(".btn-del");
    console.log("These are the del-btns:", btnDeleteTask);
    btnDeleteTask.forEach(button => { 
        button.addEventListener("click", (event) => {
            console.log("a del-button was clicked");
            const taskId = event.target.value;
            console.log("the ID of clicked del-button is:", taskId);
            deleteData(taskId);
        });
    });
};


// const activateBtnCheckbox = (data) => {
//     const btnCheckbox = document.querySelectorAll(".btn-checkbox");
//     console.log("these are the checkbox-btns:", btnCheckbox)
//     btnCheckbox.forEach(button => {
//         button.addEventListener("change", (event) => {
//             // const checkboxText = document.querySelector(`${taskId}`);
//             // console.log("This is the checkbox selected via change-event", checkboxText)
//             const taskId = event.target.value;
//             console.log("the ID of the changed checkbox is:", taskId)
//             const connectedLabel = event.target.parentNode;
//             console.log("Label connected to the checkbox is:", connectedLabel)
//             // event.target.parentNode.classList.add("crossed-through");
//             putData(taskId, connectedLabel)
//         })
//     })
// }