let name = document.getElementById("inputName");
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let message = document.getElementById("message");
let userName = document.getElementById("userName")
let users = []



if(JSON.parse(localStorage.getItem("user")) != null){
    users = JSON.parse(localStorage.getItem("user"))
}

//signup function
function signup(){
    if(name.value == "" || email.value == "" || password.value == "" ){
        message.classList.remove("d-none");
    }
    else {
        //check if email is exist
        for(let i=0; i < users.length; i++) {
        if(users[i].email == email.value) {
                message.classList.remove("d-none");
                message.classList.add("text-danger");
                message.innerHTML = "email already exists"
                return false
            }
        }
        message.classList.add("d-none");
        let userInfo = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        users.push(userInfo)
        localStorage.setItem("user",JSON.stringify(users))
        message.innerHTML = "Success"
        message.classList.remove("d-none")
        message.classList.remove("text-danger")
        message.classList.add("text-success")
        setTimeout(() => {
            location.href = "index.html"
        },1000) 

    }
}






// //login function
function login(){ 
    if (email.value == "" || password.value == "" ) {
        message.classList.remove("d-none");
    } 
    else {
        message.classList.remove("d-none");
        message.innerHTML = "you should sign up"
        for(let i = 0; i < users.length; i++) {
            if (email.value == users[i].email && password.value == users[i].password) {
                localStorage.setItem("userName",users[i].name)
                message.classList.add("d-none");
                location.href = "home.html"
            }
            else {
                message.classList.remove("d-none");
                message.innerHTML = "incorrect email or password"
            }
    }
    }
}
//shoe userName
userName.innerHTML = localStorage.getItem("userName")


// //logout function
function logout() {
    location.href = "index.html"
    localStorage.removeItem("userName")
}