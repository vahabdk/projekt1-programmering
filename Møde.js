class Møde {
    constructor (start, slut, kommentar, kundenavn){
        this.startTid = start;
        this.slutTid = slut;
        this.kundenavn = kundenavn;
        this.kommentar = kommentar;

    }


    getMødeLængde(){
        return (this.slutTid.getTime() - this.startTid.getTime()) / (1000 * 60 * 60);
    }
    getStartTid() {
        return this.startTid;
    }
    getSlutTid() {
        return this.slutTid;
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