


function validEmail() {
    const emailValue = document.querySelector("#email").value
    const infoAlert = document.querySelector("#result")
    const email = document.querySelector("#email")
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    
    

    if (validRegex.test(emailValue)) {
        console.log("valid email")
        email.style.borderColor = "hsl(0, 36%, 70%)"
        infoAlert.textContent = ""
    } else {
        console.log("x") 
        infoAlert.textContent = "Please provide a valid email"
        email.style.borderColor = "red"
    }
}

document.querySelector("#email-btn").addEventListener("click", validEmail)