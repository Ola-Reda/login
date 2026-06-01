let name = document.getElementById("inputName");
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let errorMessage = document.getElementById("errorMessage");
let user = []


function signup(){
    if(name.value == "" || email.value == "" || password.value == "" ){
        errorMessage.classList.remove("d-none");
    }
    else {
        errorMessage.classList.add("d-none");
        let userInfo = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        user.push(userInfo)
        localStorage.setItem("user",JSON.stringify(user))
        errorMessage.innerHTML = "Success"
        errorMessage.classList.remove("d-none")
        errorMessage.classList.remove("text-danger")
        errorMessage.classList.add("text-success")

    }
}