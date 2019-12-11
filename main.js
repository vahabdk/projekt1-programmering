//Lavet af FH
// Opret variabel til at gemme kalender-objektet
var k;
var rh = getGemtRevisorHus();

k = new Kalender(rh, rh.getRevisorer()[0]);

//Add Event listeners

//TIlføj eventhandler for måned-knapper, så kalenderen kan opdateres når der vælges en ny måned
var månedknapper = document.getElementsByClassName('månedKnap');
for (var i = 0; i<månedknapper.length; i++){
    månedknapper[i].addEventListener('click', function(){
        console.log('Månedsknap klikket');
        k.opdaterMåned(this.getAttribute('data-måned'));
    });
}

//Tilføj event listener for de to pile, til at vælge et nyt år
document.getElementById('årVenstre').addEventListener('click', function(){
    k.opdaterÅr(-1);
});
document.getElementById('årHøjre').addEventListener('click', function(){
    k.opdaterÅr(1);
});

//Tilføjer eventlistener til dynamisk tilføjede elementer (altså via javascript), hvilket ugedagene er.
//Kilde: https://stackoverflow.com/a/27373951
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('iMåneden')) {
        k.opdaterTidsplan(e.target);
    } else if (e.target.classList.contains('tidspunkt')) {
        var tidspunkter = document.getElementsByClassName("tidspunkt");
        for (var i =0; i<tidspunkter.length; i++) {
            tidspunkter[i].classList.remove("aktiv");
        }
        document.getElementById('opretMødeContainer').style.display = 'block';
        nuværendeStarttidspunkt = JSON.parse(e.target.getAttribute('data-start'));
        nuværendeSluttidspunkt = JSON.parse(e.target.getAttribute('data-slut'));
        e.target.classList+= " aktiv";
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

   //funktionen gemtilLS i validation.js benyttes også når der klikkes.
});

//Når mødelængden ændres
document.getElementById('mødeOption').addEventListener('change', function(e){
    k.refresh();
});


//Lavet af MM

//Opdaterer revisorer, så når der oprettes en ny revisorer, bliver den vist som en option
var revisorer = rh.getRevisorer();
for (var i = 0; i < revisorer.length; i++) {
    console.log(revisorer[i]);
    var nyRevisor = document.createElement("option");
    nyRevisor.value = i;
    nyRevisor.innerText = revisorer[i].getNavn();
    document.getElementById("revisorOption").appendChild(nyRevisor);
}

//Opdaterer kalender alt efter hvilken revisor man trykker på
document.getElementById('revisorOption').addEventListener('change', function(e){
    var revisorIndex = this.value;
    k.setVisKalenderFor(rh.getRevisorer()[revisorIndex]);
    k.refresh();
});






