const form = document.querySelector("form");
const fullname = document.querySelector("#fullname");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const button = document.querySelector("button");
const message = document.querySelector("#message");


function checkbutton() {
    
    if (checkboth(fullname.value, 5) && checkboth(subject.value, 10) && checkboth(address.value, 25) && Email(email.value)) {
        button.disabled = false;
    } 
    else {
        message.innerHTML = "";
        button.disabled = true;
    }
}


fullname.addEventListener("keyup", checkbutton);
subject.addEventListener("keyup", checkbutton);
email.addEventListener("keyup", checkbutton);
address.addEventListener("keyup", checkbutton);


function submit(event) {
    event.preventDefault();
    message.innerHTML = '<div class="message">Your form has been submittet</div>';
    form.reset();
}

form.addEventListener("submit", submit);

function Email(email) {
    const regEx = /\S+@\S+\.\S+/;
    const Match = regEx.test(email);
    return Match;
}

function checkboth(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

