async function awaitGetData () {
    const fetchedData = await getData()
    console.log("Fetching worked", fetchedData)
    fetchedData.map(data => {
        // console.log(data.description)
        addTaskToList(data);
    });
    // return fetchedData
};
awaitGetData()

const btnAddNewTask = document.querySelector("#btn-add-new-task")

btnAddNewTask.addEventListener("click", async () => {
    console.log("add new task button was clicked");
    const data = await postData();
    console.log("Newly created task-data is:", data)
    addTaskToList(data)
    return data
});

const addTaskToList = (data) => {
    const toDoList = document.querySelector("#to-do-list");
    const labelElement = document.createElement("label");
    labelElement.classList.add("task-item");
    const btnDelete = document.createElement("button");
    const btnDelText = document.createTextNode("Delete"); // to be replaced with trash-icon
    btnDelete.appendChild(btnDelText); // to be replaced with trash-icon
    btnDelete.setAttribute("value", data._id)
    btnDelete.setAttribute("id", "btn-del")
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    // console.log(newCheckbox);
    const checkboxText = document.createTextNode(data.description);
    labelElement.appendChild(newCheckbox);
    labelElement.appendChild(checkboxText);
    labelElement.appendChild(btnDelete);
    toDoList.appendChild(labelElement);
};

const btnDeleteTask = document.querySelectorAll("#btn-del")
// console.log(btnDeleteTask)

btnDeleteTask.forEach(button => { // does this work or should it be an async function? 
    button.addEventListener("click", async (event) => {
        console.log("a del-button was clicked")
        const selectedButton = await event.target.value
        console.log(selectedButton)
        // here a delete-task-function with (selectedButton) as argument
    })
})