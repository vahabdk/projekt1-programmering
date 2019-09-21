class Revisorhus {
    constructor(revisorhusNavn){
        this.revisorhusNavn = revisorhusNavn;
        this.revisore = [];
    }

    addRevisor(navn) {
        this.revisore.append(navn);
    }
}

class Meeting {
    constructor (start, slut){
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
meeting1.printTime();
meeting1.printMeetingDuration();


var startMoms = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0, 0, 0);
moms = new MomsRegnskab(startMoms);
moms.printTime();
moms.printMeetingDuration();