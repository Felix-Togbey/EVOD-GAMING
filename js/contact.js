
const contactForm = document.querySelector("#contactForm");

const name = document.querySelector("#name");

const contactEmail = document.querySelector("#contactEmail");

const subject = document.querySelector("#subject");

const message = document.querySelector("#message");

const contactMessage = document.querySelector("#contactMessage");


contactForm.addEventListener("submit",(event) =>{
    event.preventDefault();

    const nameValue = name.value.trim();
    const messageValue=message.value.trim();

    if(nameValue ===""){
        contactMessage.textContent = "Please enter your name.";
        contactMessage.style.color = "red";
    }

    else if(!contactEmail.checkValidity()){
        contactMessage.textContent= "Please enter a valid email address.";
        contactMessage.style.color = "red";
    }

    else if(subject.value ===""){
        contactMessage.textContent = "Please choose a subject.";
        contactMessage.style.color = "red";
    }

    else if(messageValue===""){
        contactMessage.textContent = "Please enter your message.";
        contactMessage.style.color = "red";
    }

    else{
        contactMessage.textContent = "Your message has been successfully sent.";
        contactMessage.style.color = "green";
    }

    
})