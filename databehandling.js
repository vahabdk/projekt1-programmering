function getGemtRevisorHus() {
    var gemteRevisore = [];
    var gemtRevisorhus = JSON.parse(localStorage.getItem('gemtRevisorhus'));

    gemteRevisore = formaterRevisor(gemtRevisorhus.revisorer);

    return new Revisorhus(gemtRevisorhus.revisorhusInfo, gemteRevisore);
}


function formaterRevisor(r) {
    returnRevisore = [];

    for (var i = 0; i < r.length; i++) {
        var revisor = r[i];
        var revisorNavn = revisor.revisorNavn;
        var startdag = revisor.startdag;
        var slutdag = revisor.slutdag;
        var email = revisor.email;
        var tlf = revisor.tlf;
        var brugernavn = revisor.brugernavn;
        var kodeord = revisor.kodeord;

        var møder = [];

        for (var j = 0; j < revisor.møder.length; j++) {
            var møde = revisor.møder[j];
            var endtime = new Date(JSON.parse(JSON.stringify(møde.endTime))); //Inspiration: https://stackoverflow.com/a/11491993
            var startTime = new Date(JSON.parse(JSON.stringify(møde.startTime)));
            var kommentar = møde.kommentar;
            var kundenavn = møde.kundenavn;
            var mail = møde.mail;
            var tlfnr = møde.tlfnr;

            møder.push(new Møde(startTime, endtime, kommentar, kundenavn, mail, tlfnr));
        }
        returnRevisore.push(new Revisor(revisorNavn, møder, startdag, slutdag, email, tlf, brugernavn, kodeord));
    }

    console.log(returnRevisore);

    return returnRevisore;
}


//Tilføj møde til storage, for det nuværende revisorhus og nuvæende revisor
function tilføjMødeTilStorage(møde){

}