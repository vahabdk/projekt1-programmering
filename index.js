class Kalender {
    constructor(){

    }

    //Load tidspunkter og formater kalender for en måned
    loadMonth(){

    }

    //Updates the DOM when meetings are changed
    updateMonth(){

    }

}

class Revisorhus {
    constructor(revisorhusNavn){
        this.revisorhusNavn = revisorhusNavn;
        this.revisore = [];
    }


    //Becuase objects are mutable in JS, we can simply add a Revisor object to the
    //Revisorhus and in that way, a change at the revisor level (or Meeting level) will result in
    //the same change on the Revisorhus level
    addRevisor(navn) {
        //Tag et objekt som argument, og gem tider osv. i dette objekt
        //Ved at gemme i et objekt, kan vi lave ændringer i objektet, og
        //på den måde, nemt lave ændringer

        this.revisore.push(navn);
    }
    printInfo(){
        console.log("Revisorhusinfo\nNavn: " + this.revisorhusNavn + "\nIndeholdere revisore: ");
        for(var i=0; i<this.revisore.length; i++){
            this.revisore[i].printInfo();
        }
    }

    //Create new revisor and add it to this revisorhus
    newRevisor(){

    }

    //Create new meeting and assign to a revisor
    newMeeting(revisor, start, slut){

    }

}

class Revisor {
    constructor (navn) {
        this.revisorNavn = navn;
        this.meetings = [];
    }
    addMeeting (m) {
        console.log(this.meetings);
        this.meetings.push(m);

        //TODO:
        //Gem mødet i local storage
    }
    printInfo(){
        console.log("Revisorinfo\nNavn: " + this.revisorNavn + "\nMeetings:");
        for (var i=0; i<this.meetings.length; i++){
            console.log("Meeting number " + i + " starts at: " + this.meetings[i].startTime + " and end at: " + this.meetings[i].endTime);
        }
    }
}



class Møde {
    constructor (start, slut, kommentar, kundenavn){
        this.startTime = start;
        this.endTime = slut;
        this.kundenavn = kundenavn;
        this.kommentar = kommentar;

    }

    printTime(){
        console.log(' Mødet starter: ' + this.startTime + ' og slutter: ' + this.endTime);
    }


    mødeLængde(){
        return (this.endTime.getTime() - this.startTime.getTime()) / (1000 * 60 * 60);
    }


    printMødeLængde(){
        //kilde: https://stackoverflow.com/questions/13894632/get-time-difference-between-two-dates-in-seconds

        //getTime() afleverer tiden i millisekunder. Derfor må vi gange med 1000
        //1000 (ms) * 60 (sekunder) * 60 (minutter) for at få tiden i timer
        var differenceInHours = (this.endTime.getTime() - this.startTime.getTime()) / (1000 * 60 * 60);
        console.log('Mødet varer: ' + differenceInHours + ' timer');
    }

    //Inspiration: https://stackoverflow.com/a/11796776
    changeMeeting(args) {

    }
}
var today = new Date();

var start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0, 0, 0);
var slut = new Date(start.getTime() + 60 * 60 * 1000);
var møde1 = new Møde(start, slut);
møde1.printTime();

console.log(møde1.mødeLængde());

// dette for at gøre brugeren opmærksom på den tid der er til rådighed
if (møde1.mødeLængde() <= 0.5){
    console.log('30 minutter');
}
else {
    console.log('1 time');
}

class langMøde extends Møde {
    constructor(start) {
        //langMøde varer 1 time

        var slut = new Date(start.getTime() + 60 * 60 * 1000);
        super(start, slut);
    }
}
møde1 = new langMøde(start);


class kortMøde extends Møde {
    constructor(start) {
        //kort møde varer 30 minutter eller 1/2 time

        var slut = new Date(start.getTime() + 30 * 60 * 1000);
        super(start, slut);
    }
}
møde2 = new kortMøde(start);


class User {
    //Vi skal have navn (og evt. firmanavn) gemt
    constructor(){

    }

    //Ændr en aftale som er knyttet til brugeren
    editAppointment(m){

    }

}





var today = new Date();

var start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0, 0, 0);
var slut = new Date(start.getTime() + 60 * 60 * 1000);

meeting1 = new Meeting(start, slut);


var startMoms = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0, 0, 0);
moms = new MomsRegnskab(startMoms);


//Lave revisor
peter = new Revisor("Peter");
peter.addMeeting(moms);
peter.addMeeting(meeting1);
//peter.printInfo();

//Lav revisorhus
revisorCentralen = new Revisorhus('Revisorcentralen');
revisorCentralen.addRevisor(peter);
revisorCentralen.printInfo();

//peter.revisorNavn = 'John';
//revisorCentralen.printInfo();


function loadData(){
    //TODO
    //Skal kunne loade data fra både arrays og fra local data
    //Se: https://stackoverflow.com/a/2010948
}