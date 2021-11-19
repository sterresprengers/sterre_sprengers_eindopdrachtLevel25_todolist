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
        return data;
    } catch (error) {
        console.log(error);
    };
};

const postData = async function () {
    const apiUrl = "http://localhost:3000";
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
    const apiUrl = `http://localhost:3000/${id}`;
    try {
        const response = await fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        // const data = await response.json();
        // console.log("data in deleteData is:", data);
        // awaitGetData(data)
        // return data;
    } catch (error) {
        console.log(error);
    };
};

const getSingleData = async (id) => {
    // console.log("getSingleData fetch function was entered");
    const apiUrl = `http://localhost:3000/${id}`;
    try {
        const response = await fetch(apiUrl, {
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
    const apiUrl = `http://localhost:3000/${id}`;
    let dataDone = await getSingleData(id);
    if (dataDone == true) {
        try {
            const setToFalse = {"done": false};
            connectedLabel.classList.remove("crossed-through")
            const response = await fetch(apiUrl , {
                method: "PUT",
                body: JSON.stringify(setToFalse),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // const data = await response.json();
            // return data;
        } catch (error) {
            console.log(error);
        };
    } 
    if (dataDone == false) {
        try {
            const setToTrue = {"done": true};
            connectedLabel.classList.add("crossed-through");
            const response = await fetch(apiUrl , {
                method: "PUT",
                body: JSON.stringify(setToTrue),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // const data = await response.json();
            // return data;
        } catch (error) {
            console.log(error);
        };
    };
};