localStorage.setItem('brugernavn', 'vahab');
localStorage.setItem('password', '123');


// hvad er getElementById??

// hvad er addEventListener? Det er en HTML DOM metode - søg i bogen!!!

// https://eloquentjavascript.net/15_event.html

document.getElementById('submit').addEventListener('click', function(e) {
    checkLogin(e);
})

function checkLogin(e) {
    e.preventDefault();
    var brugernavn = document.getElementById('brugernavn').value;
    var password = document.getElementById('password').value;
    var brugernavnTest = localStorage.getItem("brugernavn");
    var passwordTest = localStorage.getItem("password");

    if (brugernavn == brugernavnTest && password == passwordTest) {
        showSuccesMessage()
    }
    else if (brugernavnTest != brugernavn || passwordTest != password) {
        showErrorMessage()
    }
}

function showErrorMessage() {
    var error = "Forkert brugernavn og/eller password";
    document.getElementById("loginMessage").innerHTML = error;

}

function showSuccesMessage() {
    var loginSucces = "Login succesful";
    document.getElementById("loginMessage").innerHTML = loginSucces;
}

//gemmer data i local storage DOM
function getLogin() {
    var brugernavn = localStorage.getItem("brugernavn");
    var password = localStorage.getItem("password");
}

