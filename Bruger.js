

class Bruger {
    constructor(navn, revisor){
        this.brugernavn = navn;
        this.revisor = revisor;
        this.moeder = [];
    }

    //Vis møder


    vismoeder (){
    console.log(moeder);
    for(var i=0; i<this.moeder.length; i++){
        console.log("Møde" + i + "\n" + this.moeder[i].startTime + "-" + this.moeder[i].endTime);
    }

}

}






