var brugernavn = "brugernavn";
var password = "password";
var error = "Forkert brugernavn eller password";

//oprette bruger
this.brugernavn = document.getElementById(brugernavn);
this.password = document.getElementById(password);

//gemmer data i local storage DOM
function storeLogin(){
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    alert("Ny bruger er oprettet");
}

function checkLogin(form) {
    if(form.brugernavn.value != brugernavn)
        alert(error);
    if(form.password.value != password)
        alert(error);
    else if(form.brugernavn.value == brugernavn && form.password.value == password)
        window.location=("index.html");
}
