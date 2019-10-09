class Revisor {
    constructor(navn) {
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