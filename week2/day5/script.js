
const message = document.getElementById("message");

const successBtn = document.getElementById("successBtn");

const failureBtn = document.getElementById("failureBtn");




function fakeApiCall(shouldFail) {

    return new Promise((resolve, reject) => {

        console.log("API call started...");

        
        setTimeout(() => {

            if (shouldFail) {

               
                reject("API request failed!");

            } else {

               
                resolve("Data received successfully!");

            }

        }, 2000);

    });

}




async function getData(shouldFail) {

    try {

        
        message.textContent = "Loading data...";

        console.log("Waiting for API response...");

        
        const result = await fakeApiCall(shouldFail);

        
        console.log(result);

        message.textContent = result;

    } catch (error) {

        // Handle error
        console.error(error);

        message.textContent = "Something went wrong!";

    }

}




successBtn.addEventListener("click", function () {

    getData(false);

});



failureBtn.addEventListener("click", function () {

    getData(true);

});