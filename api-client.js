const apiUrl = "http://localhost:3000"

const getData = async () => {
    try {
        const response = await fetch(apiUrl, { 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    };
};

const postData = async function () {
    const newTaskInput = document.querySelector("#new-task-input-field");
    const newTask = {"description": `${newTaskInput.value}`, "done": false};
    newTaskInput.value= null;
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    };
};

const deleteData = async (id) => {
    const apiUrlid = `${apiUrl}${id}`;
    try {
        const response = await fetch(apiUrlid, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log(error);
    };
};

const getSingleData = async (id) => {
    const apiUrlid = `${apiUrl}${id}`;
    try {
        const response = await fetch(apiUrlid, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        const dataDone = data.done;
        return dataDone;
    } catch (error) {
        console.log(error);
    };
};

const putData = async (id, connectedLabel) => {
    const apiUrlid = `${apiUrl}${id}`;
    let dataDone = await getSingleData(id);
    if (dataDone == true) {
        try {
            const setToFalse = {"done": false};
            connectedLabel.classList.remove("crossed-through")
            await fetch(apiUrlid , {
                method: "PUT",
                body: JSON.stringify(setToFalse),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log(error);
        };
    } 
    if (dataDone == false) {
        try {
            const setToTrue = {"done": true};
            connectedLabel.classList.add("crossed-through");
            await fetch(apiUrlid , {
                method: "PUT",
                body: JSON.stringify(setToTrue),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log(error);
        };
    };
};