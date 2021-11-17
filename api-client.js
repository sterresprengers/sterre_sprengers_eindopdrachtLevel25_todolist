const createTask = document.querySelector("#create-task")
const newTaskInput = document.querySelector("#new-task-input-field")
const btnAddNewTask = document.querySelector("#btn-add-new-task")

const getData = async () => {
    const apiUrl = "http://localhost:3000";
    try {
        const response = await fetch(apiUrl, { 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log("The data in getData function is ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};



const postData = async function () {
    const apiUrl = "http://localhost:3000";
    const newTask = {description: `${newTaskInput.value}`, done: false};
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json();
        console.log("The data in postData function is ", data)
        return data._id
    } catch (error) {
        console.log(error)
    }
}

// const todo2 = {description: "buy milk", done: false};
// postData();
// getData();