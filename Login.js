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

    var revisorer = getGemtRevisorHus().getRevisorer();
    for (var i=0; i<revisorer.length; i++)
    {
        if (brugernavn == revisorer[i].brugernavn && password == revisorer[i].kodeord) {
            console.log('rigtigt login');
            sessionStorage.setItem("loggedInRevisorObject", JSON.stringify(revisorer[i]));
            sessionStorage.setItem("loggedInRevisorId", i);

            location.href = "revisorLoginside.html";
            break;
        }

    }


    function showErrorMessage() {
    var error = "Forkert brugernavn og/eller password"
    document.getElementById("loginMessage").innerHTML = error;
}

}

//gemmer data i local storage DOM
function getLogin() {
    var brugernavn = localStorage.getItem("brugernavn");
    var password = localStorage.getItem("password");
}

function logAf(){
    sessionStorage.removeItem('loggedInRevisorObject');
    sessionStorage.removeItem('loggedInRevisorId');
    window.location.href = 'Login.html'
    console.log(loggedInRevisorObject);
}