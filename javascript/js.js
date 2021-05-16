function errorcheck(value, message) {
    if (!value.checkValidity()) {
        document.getElementById(message).innerHTML = value.name
        console.log('woof');
    } else {
        document.getElementById(message).innerHTML = ""
        console.log('meow');
    }
}
