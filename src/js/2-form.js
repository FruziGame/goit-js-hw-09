
const formData = {
    email: "",
    message: ""
}

const localStorageData = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form") 

const email = feedbackForm.querySelector('input[type="email"]')
const message = feedbackForm.querySelector('textarea[name="message"]')


feedbackForm.addEventListener("input", (e) => {

    if (e.target.name === "email") formData.email = e.target.value.trim();
    if (e.target.name === "message") formData.message = e.target.value.trim();


    localStorage.setItem(localStorageData, JSON.stringify(formData));
    
 
 });



 function firstStep() {
    const storageData = localStorage.getItem(localStorageData);
    const parsedData = storageData ? JSON.parse(storageData) : {};

    if (parsedData.email !== undefined) {
        feedbackForm.elements.email.value = parsedData.email;
    }
    if (parsedData.message !== undefined) {
        feedbackForm.elements.message.value = parsedData.message;
    }

    formData.email = parsedData.email
    formData.message = parsedData.message
}

firstStep()




feedbackForm.addEventListener("submit", (e) => {

    e.preventDefault();

    if (feedbackForm.elements.email.value.trim() === "" ||  feedbackForm.elements.message.value.trim() === "") {
              
           return alert("Fill please all fields.")
        }


    console.log(formData)

    formData.email = "";
    formData.message = "";

    localStorage.removeItem(localStorageData);
    
    feedbackForm.elements.email.value = "";
    feedbackForm.elements.message.value = "";

    localStorage.setItem(localStorageData, JSON.stringify(formData));

})





