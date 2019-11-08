class Revisor {
    constructor(navn, møder = [], startdag, slutdag, email, tlf, brugernavn, kodeord){
        this.revisorNavn = navn;
        this.møder = møder;
        this.startdag = startdag;
        this.slutdag = slutdag;

        this.email = email;
        this.tlf = tlf;
        this.brugernavn = brugernavn;
        this.kodeord = kodeord;
    }
    tilføjMøder (møde) {
        this.møder.push(møde);
        //her kan man tilføje møde til revisoren, admin/revisor adgang
    }
    //for at få vist hvor mange møder den pågældende revisor har,
    // for loop kører gennemn antal af møder booket i systemet og
    // retunere det tal fra det første start tid til den sidste slut tid
    printInfo(){
        console.log("RevisorInfo\nNavn: " + this.revisorNavn + "\nmøder:");
         for (var i=0; i<this.møder.length; i++){
             console.log("Møde antal" + i + "start: " + this.møder[i].startTime + "slut: " + this.møder[i].endTime);
         }

    }

    getInfo(){
        var text = this.revisorNavn + "\n";
        for (i = 0; i < this.møder.length; i++){
            text += this.møder[i].getInfo() + "\n"
        }
        return text;
    }

    getMøder(){
        return this.møder;
    }

    getStartdag(){
        return this.startdag;
    }

    getSlutdag(){
        return this.slutdag;
    }


    getNavn(){
        return this.revisorNavn;
    }

    getBrugernavn(){
        return this.brugernavn;
    }


}
