function kontrolInfo(){
    // alle indtast muligheder hentes via en getElementById. Værdierne hentes ved at bruge .value
    var fornavn = document.getElementById("Fornavn").value;
    var efternavn = document.getElementById("Efternavn").value;
    var email = document.getElementById("Email").value;
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
    //For at kontrollere input tilføjes to yderligere variabler
    var formValid = true;
    var validation_message = "";

//Test af at det virker
    console.log(fornavn+efternavn+email+startTid+slutTid+brugernavn+kodeord);

    if(formValid){

    }
}