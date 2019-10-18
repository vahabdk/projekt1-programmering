function checkLogin(e) {
    e.preventDefault();

    var brugernavn = document.getElementById('brugernavn').value;
    var password = document.getElementById('password').value;
    var error = "Forkert brugernavn og/eller password";
    var loginSucces = "Login succesful";
    var brugernavnTest = localStorage.getItem("brugernavn");
    var passwordTest = localStorage.getItem("password");

    if (brugernavn != brugernavnTest || password != passwordTest)
    {
        document.getElementById("error").innerHTML = error;
    }
    else if (brugernavnTest == brugernavn && passwordTest == password)
        document.getElementById("loginSucces").innerHTML = loginSucces;
}

//gemmer data i local storage DOM
function getLogin() {
    var brugernavn = localStorage.getItem("brugernavn");
    var password = localStorage.getItem("password");
}

function generateLogin(){
    localStorage.setItem('brugernavn', 'vahab');
    localStorage.setItem('password', '123');
}

