function errorcheck(value, message) {
    if (!value.checkValidity()) {
        document.getElementById(message).innerHTML = document.getElementById(message).title 
        console.log('woof');
    } else {
        document.getElementById(message).innerHTML = ""
        console.log('meow');
    }
}
function subjectcheck(value, message){
    if (value.value==1 && screen.width > 500) {
        document.getElementById(message).innerHTML = value.name
        console.log('woof');
    } else {
        document.getElementById(message).innerHTML = ""
        console.log('meow');
    }
}
function formcheck() {
    if (!document.getElementById("Firstname").checkValidity()) {
        document.getElementById("Firstname").innerHTML = document.getElementById("errorFN").title 
        console.log('woof');
    } else {
        document.getElementById("errorFN").innerHTML = ""
        console.log('meow');
    }

    if (!document.getElementById("Lastname").checkValidity()) {
        document.getElementById("Lastname").innerHTML = document.getElementById("errorLN").title 
        console.log('woof');
    } else {
        document.getElementById("errorLN").innerHTML = ""
        console.log('meow');
    }

    if (!document.getElementById("Email").checkValidity()) {
        document.getElementById("Email").innerHTML = document.getElementById("errorE").title 
        console.log('woof');
    } else {
        document.getElementById("errorE").innerHTML = ""
        console.log('meow');
    }

    if (!document.getElementById("Phone").checkValidity()) {
        document.getElementById("Phone").innerHTML = document.getElementById("errorP").title 
        console.log('woof');
    } else {
        document.getElementById("errorP").innerHTML = ""
        console.log('meow');
    }

    if (!document.getElementById("message-box").checkValidity()) {
        document.getElementById("message-box").innerHTML = document.getElementById("errorM").title 
        console.log('woof');
    } else {
        document.getElementById("errorM").innerHTML = ""
        console.log('meow');
    }
}