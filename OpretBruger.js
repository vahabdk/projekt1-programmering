function kontrolInfo() {
    // alle indtast muligheder hentes via en getElementById. Værdierne hentes ved at bruge .value
    var fornavn = document.getElementById("Fornavn").value;
    var efternavn = document.getElementById("Efternavn").value;
    var email = document.getElementById("Email").value;
    var tlf = document.getElementById("Tlf").value;
    var startTime = document.getElementById("startTime").value;
    var startMinut = document.getElementById("startMinut").value;
    var slutTime = document.getElementById("slutTime").value;
    var slutMinut = document.getElementById("slutMinut").value;
    var brugernavn = document.getElementById("Brugernavn").value;
    var kodeord = document.getElementById("Kodeord").value;


    // for at definere en start tid skal time og minut kobles. Af hensyn til JS kalender koden,
    // konverteres 30 min til 0.5 time
    var startTid = startTime + ":" + startMinut;
    if (startMinut == 30){
        startMinut = 0.5
    }

    // for at definere en slut tid, skal time og minut valget kobles. Af hensyn til JS kalender koden,
    // konverteres 30 min til 0.5 time
    var slutTid = slutTime + ":" + slutMinut;
    if (slutMinut == 30){
        slutMinut = 0.5
    }

    //Test af at det virker
    console.log(fornavn+efternavn+email+tlf+startTid+slutTid+brugernavn+kodeord);

    //For at kontrollere input tilføjes to yderligere variabler
    function validation(){
        var formValid = true; alert("Revisor oprettet")
        var validationMessage = "";

        if(formValid) {

        } else {
            alert(validationMessage)
        }
        return (form_valid);

        if (fornavn == null){
            document.getElementById("fejlFornavn") = "Indtast fornavn"
        }
    }


    saveToDB();


    function saveToDB(){
        var nyRevisor;

        var gemtRevisorhus =JSON.parse(localStorage.getItem('gemtRevisorhus'));

        if(gemtRevisorhus != null){
            nyRevisor = new Revisor(fornavn + ' ' + efternavn, new Array(), Number(startTime) + Number(startMinut),
                Number(slutTime) + Number(slutMinut), email, tlf, brugernavn, kodeord);
            gemtRevisorhus.addRevisor(nyRevisor);

            localStorage = JSON.parse(localStorage.setItem('gemtRevisorhus', gemtRevisorhus));
        }
    }



}