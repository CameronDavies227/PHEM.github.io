function errorcheck(value, message) {
    if (!value.checkValidity()) {
        document.getElementById(message).innerHTML = document.getElementById(message).title 
        console.log('woof');
    } else {
        document.getElementById(message).innerHTML = ""
        console.log('meow');
    }
}
