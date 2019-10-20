function checkLogin(e) {
    e.preventDefault();

    var brugernavn = document.getElementById('brugernavn').value;
    var password = document.getElementById('password').value;
    var error = "Forkert brugernavn og/eller password";
    var loginSucces = "Login succesful";


    //Gennemgå de gemte revisore og log ind
    var gemteRevisore = JSON.parse(localStorage.getItem('revisore'));
    var loggedIn = false;
    for(var i=0; i<gemteRevisore.length; i++){
        if(gemteRevisore[i].brugernavn == brugernavn && gemteRevisore[i].kodeord == password){
            localStorage.setItem('revisorLoggedIn', JSON.stringify(gemteRevisore[i]));
            loggedIn = true;
            //TODO: Log ind
            console.log('Logged in: ')
            console.log(gemteRevisore[i]);
        }
    }
    if(!loggedIn){
        document.getElementById("error").innerHTML = error;
    }



    var brugernavnTest = localStorage.getItem("brugernavn");
    var passwordTest = localStorage.getItem("password");

    if (brugernavn != brugernavnTest || password != passwordTest)
    {
        document.getElementById("error").innerHTML = error;
    }
    else if (brugernavnTest == brugernavn && passwordTest == password)
        document.getElementById("loginSucces").innerHTML = loginSucces;
}



function generateLogin(){
    localStorage.setItem('brugernavn', 'vahab');
    localStorage.setItem('password', '123');
}

