//Lav dummydata
var imorgen = new Date();
imorgen.setDate(imorgen.getDate() + 1);

var startPeter = 8;
var slutPeter = 16;

var møde2 = new kortMøde(imorgen);

var peter = new Revisor('Peter', [], startPeter, slutPeter);

var idag = new Date();
for(var i=startPeter; i<slutPeter - 1; i++){
    peter.tilføjMøder(new langMøde(new Date(idag.getFullYear(), idag.getMonth(), idag.getDate(), i, 0, 0, 0)));
}

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