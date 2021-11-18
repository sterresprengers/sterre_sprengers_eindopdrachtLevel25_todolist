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
        // console.log("The data in getData function is ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

const postData = async function () {
    const apiUrl = "http://localhost:3000";
    const newTaskInput = document.querySelector("#new-task-input-field")
    const newTask = {description: `${newTaskInput.value}`, done: false};
    newTaskInput.value= null;
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
        return data
    } catch (error) {
        console.log(error)
    }
}

// const deleteData = async (id) => {
//     console.log("deleteData function was entered");
//     const apiUrl = `http://localhost:3000/${id}`;
//     try {
//         console.log("fetching in deleteData started");
//         await fetch(apiUrl, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         console.log("fetching in deleteData finished")
//     } catch (error) {
//         console.log(error)
//     }
// }

const deleteData = (id) => {
    console.log("deleteData function was entered");
    const apiUrl = `http://localhost:3000/${id}`;
    console.log("fetching in deleteData started");
    fetch(apiUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log("fetching in deleteData finished")
}


const getSingleData = async (id) => {
    console.log("getSingleData fetch function was entered");
    const apiUrl = `http://localhost:3000/${id}`;
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json();
        const dataDone = data.done;
        console.log("This is the data.done fetched in getSingleData", dataDone);
        return dataDone;
    } catch (error) {
        console.log(error);
    }
}

const putData = async (id, connectedLabel) => {
    console.log("putData function was entered");
    const apiUrl = `http://localhost:3000/${id}`;
    let dataDone = await getSingleData(id);
    console.log("This is the returned dataDone by getSingleData in putData function", dataDone)
    console.log("connectedLabel in putDat is:", connectedLabel)
    if (dataDone == true) {
        try {
            const setToFalse = {done: false};
            connectedLabel.classList.remove("crossed-through")
            console.log("connectedLabel has changed to:", connectedLabel)
            const response = await fetch(apiUrl , {
                method: "PUT",
                body: JSON.stringify(setToFalse),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            console.log(data, "if dataDone === true")
        } catch (error) {
            console.log(error);
        };
    } 
    if (dataDone == false) {
        try {
            const setToTrue = {done: true}
            connectedLabel.classList.add("crossed-through")
            console.log("connectedLabel has changed to:", connectedLabel)
            const response = await fetch(apiUrl , {
                method: "PUT",
                body: JSON.stringify(setToTrue),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json();
            console.log(data, "if dataDone === false")
        } catch (error) {
            console.log(error);
        }
    }
}