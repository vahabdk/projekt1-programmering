function getGemtRevisorHus() {
    var gemteRevisore = [];
    var gemtRevisorhus = JSON.parse(localStorage.getItem('gemtRevisorhus'));

    if(gemtRevisorhus == null){
        //Lav dummydata hvis der ikke er nogen data i forvejen
        var imorgen = new Date();
        imorgen.setDate(imorgen.getDate() + 1);

        var startPeter = 8;
        var slutPeter = 16;

        var møde2 = new kortMøde(imorgen);

        var peter = new Revisor('Peter', [], startPeter, slutPeter, 'peter@lortemail.dk', '123', 'pter', '123');
        var kurt = new Revisor('Kurt', [], 8, 16, 'peter@lortemail.dk', '123', 'pter', '123');

        var rh = new Revisorhus('Revisorcentralen');
        rh.addRevisor(peter);
        rh.addRevisor(kurt);

        var k = new Kalender(rh, rh.getRevisorer()[0]);

        var idag = new Date();
        idag.setDate(1);
        var udFyldDagen = false;
        var id = 0;
        for(var j=1; j<=k.getDageIMåneden(); j++){
            for(var i=startPeter; i<slutPeter - udFyldDagen; i++){
                peter.tilføjMøder(new langMøde(new Date(idag.getFullYear(), idag.getMonth(), idag.getDate(), i, 0, 0, 0),
                    id, 'kommentar', 'kundenavn', 'tlfnr', 'mail'));
                //console.log(peter.getMøder()[id]);
                id++;
            }
            udFyldDagen = !udFyldDagen;
            idag.setDate(j + 1);
            console.log(peter.getMøder()[j-1]);
        }

        peter.tilføjMøder(new langMøde(new Date(2019, 9, 18, 14, 30, 0, 0),
            id, 'kommentar', 'kundenavn', 'mail', 'tlfnr'));


        gemtRevisorhus = rh;
        localStorage.setItem('gemtRevisorhus', JSON.stringify(rh));
    }

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

    return returnRevisore;
}


//Tilføj møde til storage, for det nuværende revisorhus og nuvæende revisor
function tilføjMødeTilStorage(møde){

}