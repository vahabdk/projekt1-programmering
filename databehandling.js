//Lavet af FH
function getGemtRevisorHus() {
    var gemteRevisore = [];
    var gemtRevisorhus = JSON.parse(localStorage.getItem('gemtRevisorhus'));

    //Lav dummydata hvis der ikke er nogen data i forvejen
    if(gemtRevisorhus == null){
        //Angiver start og sluttidspunkter for revisoren
        var startPeter = 8;
        var slutPeter = 16;

        //Instansierer to revisorer
        var peter = new Revisor('Peter', [], startPeter, slutPeter, 'peter@lortemail.dk', '123', 'pter', '123');
        var kurt = new Revisor('Kurt', [], 8, 16, 'peter@lortemail.dk', '123', 'pter', '123');

        //instansierer nyt revisorhus og tilknytter to revisorer
        var rh = new Revisorhus('Revisorcentralen');
        rh.addRevisor(peter);
        rh.addRevisor(kurt);

        //Instansierer et en ny Kalender
        var k = new Kalender(rh, rh.getRevisorer()[0]);

        //Gør klar til at tilføje en række møder til Peter-objektet,
        var idag = new Date();
        idag.setDate(1);
        var udFyldDagen = false;
        var id = 0;

        //Tilføjer møder alle dage i måneden. Hver anden dag udfyldes dagen. De resterende dage er der plads til ét møde.
        for(var j=1; j<=k.getDageIMåneden(); j++){
            for(var i=startPeter; i<slutPeter - udFyldDagen; i++){
                var tidspunkt = new Date(idag.getFullYear(), idag.getMonth(), idag.getDate(), i, 0, 0, 0);
                peter.tilføjMøder(new langMøde(tidspunkt, id, 'kommentar', 'kundenavn', 'tlfnr', 'mail'));

                console.log(new langMøde(tidspunkt, id, 'kommentar', 'kundenavn', 'tlfnr', 'mail').getKommentar());
                id++;
            }
            //!false = true = 1, og !true = false = 0. Af den grund kan man gøre dette og samtidig benytte slutPeter - udFyldDagen i for loopet.
            udFyldDagen = !udFyldDagen;
            //Gå til næste dag
            idag.setDate(j + 1);
            console.log(peter.getMøder()[j-1]);
        }

        //Gem dummydataen i localstorage
        gemtRevisorhus = rh;
        localStorage.setItem('gemtRevisorhus', JSON.stringify(rh));
    }

    //Formater revisorerne så de får deres eventuelt tabte metoder tilbage
    gemteRevisore = formaterRevisor(gemtRevisorhus.revisorer);

    //Returner revisorhuset.
    return new Revisorhus(gemtRevisorhus.revisorhusInfo, gemteRevisore);
}

//Dette er skrevet som en selvstændig funktion, så den kan benyttes på revisor loginsiden, hvor den revisor
//som er logget ind, bliver gemt som et objekt
//Har et parameter: En eller flere revisorer i en array
function formaterRevisor(r) {
    var returnRevisore = [];

    //Gennemgå alle revisorerne og brug deres properties til at instansiere et nyt Revisor-objekt
    for (var i = 0; i < r.length; i++) {
        var revisor = r[i];
        var revisorNavn = revisor.revisorNavn;
        var startdag = revisor.startdag;
        var slutdag = revisor.slutdag;
        var email = revisor.email;
        var tlf = revisor.tlf;
        var brugernavn = revisor.brugernavn;
        var kodeord = revisor.kodeord;


        //Gør det samme for møderne som for Revisorerne.
        var møder = [];

        for (var j = 0; j < revisor.møder.length; j++) {
            var møde = revisor.møder[j];
            var id = møde.ID;
            var endtime = new Date(JSON.parse(JSON.stringify(møde.endTime))); //Inspiration: https://stackoverflow.com/a/11491993
            var startTime = new Date(JSON.parse(JSON.stringify(møde.startTime)));
            var kommentar = møde.kommentar;
            var kundenavn = møde.kundenavn;
            var mail = møde.mail;
            var tlfnr = møde.tlfnr;

            møder.push(new Møde(startTime, endtime, id, kommentar, kundenavn, mail, tlfnr));
        }
        returnRevisore.push(new Revisor(revisorNavn, møder, startdag, slutdag, email, tlf, brugernavn, kodeord));
    }

    console.log(returnRevisore);

    //Returner revisorerne som array
    return returnRevisore;
}