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


    getStartTid() {
        return this.startTime;
    }
    getSlutTid(){
        return this.endTime;
    }

    getKundenavn() {
        return this.kundenavn;
    }

    getKommentar() {
        return this.kommentar;
    }
}


class langMøde extends Møde {
    constructor(start) {
        //langMøde varer 1 time

        var slut = new Date(start.getTime() + 60 * 60 * 1000);
        super(start, slut);
    }
}

class kortMøde extends Møde {
    constructor(start) {
        //kort møde varer 30 minutter eller 1/2 time

        var slut = new Date(start.getTime() + 30 * 60 * 1000);
        super(start, slut);

    }
}
