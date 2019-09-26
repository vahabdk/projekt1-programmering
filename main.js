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



class Meeting {
    constructor (start, slut) {
        this.startTime = start;
        this.endTime = slut;
    }

    printTime(){
        console.log('Mødet starter: ' + this.startTime + ' og slutter: ' + this.endTime);
    }
    printMeetingDuration(){
        //Source: https://stackoverflow.com/questions/13894632/get-time-difference-between-two-dates-in-seconds

        //getTime() returns the time in milliseconds. Therefore we need to divide it by
        //1000 (ms) * 60 (seconds) * 60 (minutes) to get the time difference in hours
        var differenceInHours = (this.endTime.getTime() - this.startTime.getTime()) / (1000 * 60 * 60);
        console.log('Mødet varer: ' + differenceInHours + ' timer');
    }
}

class MomsRegnskab extends Meeting {
    constructor (start){
        //a momsregnskabs-meeting always takes 30 minutes

        //Creating a new date by passing milliseconds between 1970 january 1st as a argument
        var slut = new Date(start.getTime() + 30*60*1000);
        super(start, slut);
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