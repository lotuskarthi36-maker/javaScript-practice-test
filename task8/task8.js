const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded successfully");
    }, 2000);
});


getData
    .then((message) => {
        console.log("Using .then():", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

async function loadData() {
    try {
        const result = await getData;
        console.log("Using async/await:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

loadData();
