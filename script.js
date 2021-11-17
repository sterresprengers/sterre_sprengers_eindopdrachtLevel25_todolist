// async function awaitGetData () {
//     const fetchedData = await getData()
//     console.log("Fetching worked", fetchedData)
//     // return fetchedData
// }
// awaitGetData()

btnAddNewTask.addEventListener("click", () => {
    console.log("add new task button was clicked");
    const taskId = postData();

    // const newTask = {description: `${newTaskInput.value}`, done: false};
    // console.log("Newly added task is:", newTask);
    // let taskId = postData(newTask);
    console.log("Newly created task id is:", taskId)
    // getData();
    // return taskId
});


