function getGemtRevisorHus() {
    var gemteRevisore = [];
    var gemtRevisorhus = JSON.parse(localStorage.getItem('gemtRevisorhus'));

    for (var i = 0; i < gemtRevisorhus.revisorer.length; i++) {
        var revisor = gemtRevisorhus.revisorer[i];
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
            var endtime = new Date(møde.endTime);
            var startTime = new Date(møde.startTime);
            var kommentar = møde.kommentar;
            var kundenavn = møde.kundenavn;

            møder.push(new Møde(startTime, endtime, kommentar, kundenavn));
        }

        gemteRevisore.push(new Revisor(revisorNavn, møder, startdag, slutdag, email, tlf, brugernavn, kodeord));
    }

    return new Revisorhus(gemtRevisorhus.revisorhusInfo, gemteRevisore);
}

//Tilføj møde til storage, for det nuværende revisorhus og nuvæende revisor
function tilføjMødeTilStorage(møde){

}