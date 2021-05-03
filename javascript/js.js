function errorcheck(value, message) {
    if (!value.checkValidity()) {
        document.getElementById(message).innerHTML = value.name
        console.log('woof');
    } else {
        document.getElementById(message).innerHTML = ""
        console.log('meow');
    }
}
function subjectcheck(value, message){
    if (value==1 && screen.width > 500) {
        document.getElementById(message).innerHTML = value.name
        console.log('woof');
    } else {
        document.getElementById(message).innerHTML = ""
        console.log('meow');
    }
}