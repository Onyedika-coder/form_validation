const form = document.getElementById("forms");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_pass = document.getElementById("password2");


form.addEventListener("submit", e => {
e.preventDefault();

const name_err = document.getElementById("name_err");
const email_err = document.getElementById("email_err");
const pass_err = document.getElementById("pass_err");
const pass2_err = document.getElementById("pass2_err");



if(username.value === ""){
username.style.borderColor = "red";
name_err.classList.add('err');
name_err.innerText = "input username";
}else{
    username.style.borderColor = "green";
    name_err.classList.add('success');
    name_err.innerText = "";
}

if(email.value === ""){
    email.style.borderColor = "red";
    email_err.classList.add('err');
    email_err.innerText = "input email";
    }else{
        email.style.borderColor = "green";
        email_err.classList.add('success');
        email_err.innerText = "";
    }
   const passFunc = () => {
    if(password.value === ""){
        password.style.borderColor = "red";
        pass_err.classList.add('err');
        pass_err.innerText = "input password";

        
        }


    if( password.value.length > 0 && password.value.length <= 8){
        password.style.borderColor = "red";
        pass_err.classList.add('err');
        pass_err.innerText = "weak password";

        
        }
        
    if(password.value.length > 8 ){
            password.style.borderColor = "green";
            pass_err.classList.add('success');
            pass_err.innerText = "Strong password";
    }

   }
    
   const ConfirmFunc = () => {

    if(confirm_pass.value.length < 8 && confirm_pass.value !== password.value){
        confirm_pass.style.borderColor ="red";
            pass2_err. classList.add('err');
            pass2_err.innerText = "password mismatch";
    }
    

    if(confirm_pass.value === ""){
        confirm_pass.style.borderColor ="red";
            pass2_err. classList.add('err');
            pass2_err.innerText = "confirm password";
    }
    
    if(confirm_pass.value === password.value && confirm_pass.value.length > 8){
        confirm_pass.style.borderColor ="green";
            pass2_err. classList.add('success');
            pass2_err.innerText = "correct";
    }
   }
    
    

passFunc();
ConfirmFunc();
     // validate();    
});

const validate = () => {
    form.submit();
}

