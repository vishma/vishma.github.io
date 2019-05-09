var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    sessionStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!sessionStorage.getItem('name')) {
    setUserName();
} else {
var storedName = sessionStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    // setUserName();
    changeText();
}


function changeText() {
    document.getElementById("hhh").textContent = "changed";
}







