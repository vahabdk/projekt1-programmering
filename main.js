//Lav dummydata
var idag = new Date();
var imorgen = new Date;
imorgen.setDate(imorgen.getDate() + 1);

var møde1 = new langMøde(idag);
var møde2 = new kortMøde(imorgen);

var peter = new Revisor('Peter', [møde1, møde2]);
console.log(peter.getMøder());

var r1 = new Revisorhus('Revisorcentralen');
r1.addRevisor(peter);


var k = new Kalender(r1, r1.getRevisorer()[0]);






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
        console.log('Knap klikket');
        k.updateMonth(this.getAttribute('data-måned'));
    });
}

//Tilføjer eventlistener til dynamisk tilføjede elementer (altså via javascript), hvilket ugedagene er
//Kilde: https://stackoverflow.com/a/27373951
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('iMåneden')) {
        k.opdaterTidsplan(e.target);
    }
});