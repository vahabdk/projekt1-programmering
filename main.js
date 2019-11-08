//Opret variabel til at gemme kalender-objektet
var k;
var rh;

var gemtRevisorhus = JSON.parse(localStorage.getItem('gemtRevisorhus'));
if(gemtRevisorhus == null) {

    //Lav dummydata hvis der ikke er nogen data i forvejen
    var imorgen = new Date();
    imorgen.setDate(imorgen.getDate() + 1);

    var startPeter = 8;
    var slutPeter = 16;

    var møde2 = new kortMøde(imorgen);

    var peter = new Revisor('Peter', [], startPeter, slutPeter);
    var kurt = new Revisor('Kurt', [], 8, 16);

    var r1 = new Revisorhus('Revisorcentralen');
    r1.addRevisor(peter);
    r1.addRevisor(kurt)

    k = new Kalender(r1, r1.getRevisorer()[0]);


    var idag = new Date();
    idag.setDate(1);
    var udFyldDagen = false;
    for(var j=1; j<=k.getDageIMåneden(); j++){
        for(var i=startPeter; i<slutPeter - udFyldDagen; i++){
            peter.tilføjMøder(new langMøde(new Date(idag.getFullYear(), idag.getMonth(), idag.getDate(), i, 0, 0, 0)));
        }
        udFyldDagen = !udFyldDagen;
        idag.setDate(j + 1);
    }

    peter.tilføjMøder(new langMøde(new Date(2019, 9, 18, 14, 30, 0, 0)));

    k.refresh();

    localStorage.setItem('gemtRevisorhus', JSON.stringify(r1));
} else {

    //Hent den gemte data, og gør den til objekter igen
    rh = getGemtRevisorHus();

    k = new Kalender(gemtRevisorhus, rh.getRevisorer()[0]);

}

//Opdatere revisorer, så når der oprettes en ny revisorer, bliver den vist som en option
var revisorer = rh.getRevisorer();
for (var i = 0; i < revisorer.length; i++) {
    console.log(revisorer[i]);
    var nyRevisor = document.createElement("option");
    nyRevisor.value = i;
    nyRevisor.innerText = revisorer[i].getNavn();
    document.getElementById("revisorOption").appendChild(nyRevisor);
}




//Add Event listeners

//TIlføj eventhandler for måned-knapper, så kalenderen kan opdateres når der vælges en ny måned
var månedknapper = document.getElementsByClassName('månedKnap');
for (var i = 0; i<månedknapper.length; i++){
    månedknapper[i].addEventListener('click', function(){
        console.log('Knap klikket');
        k.updateMonth(this.getAttribute('data-måned'));
    });
}

//Tilføj clikhandler for de to pile, til at vælge et nyt år
document.getElementById('årVenstre').addEventListener('click', function(){
    k.updateÅr(-1);
});
document.getElementById('årHøjre').addEventListener('click', function(){
    k.updateÅr(1);
});

var månedknapper = document.getElementsByClassName('månedKnap');
for (var i = 0; i<månedknapper.length; i++){
    månedknapper[i].addEventListener('click', function(){
        k.updateMonth(this.getAttribute('data-måned'));
    });
}

//Tilføjer eventlistener til dynamisk tilføjede elementer (altså via javascript), hvilket ugedagene er.
//Kilde: https://stackoverflow.com/a/27373951
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('iMåneden')) {
        k.opdaterTidsplan(e.target);
    } else if (e.target.classList.contains('tidspunkt')) {
        document.getElementById('opretMødeContainer').style.display = 'block';
        nuværendeStarttidspunkt = e.target.getAttribute('data-start');
        nuværendeSluttidspunkt = e.target.getAttribute('data-slut');
    }
});
 //Når der klikkes på 'Book møde' knappen
document.getElementById('bookMødeSubmit').addEventListener('click', function(e){
   e.preventDefault();
   //Kilde: https://stackoverflow.com/a/1085810
   var valgRevisorElement = document.getElementById('revisorOption');
   var valgRevisor = valgRevisorElement.options[valgRevisorElement.selectedIndex].value;
   var kundenavn = document.getElementById('kundenavn');
   var kommentar = document.getElementById('kommentar');
   tilføjMødeTilStorage(rh, rh.getRevisorer()[valgRevisorElement], new Møde(nuværendeStarttidspunkt, nuværendeSluttidspunkt, kommentar, kundenavn));

});

//Når mødelængden ændres
document.getElementById('mødeOption').addEventListener('change', function(e){
    k.refresh();
});


//Opdaterer kalender alt efter hvilken revisor man trykker på
document.getElementById('revisorOption').addEventListener('change', function(e){
    var revisorIndex = this.value;
    k.setVisKalenderFor(rh.getRevisorer()[revisorIndex]);
    k.refresh();
});
