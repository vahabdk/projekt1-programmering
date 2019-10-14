class Revisor {
    constructor(navn){
        this.revisorNavn = navn;
        this.møder = [];
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
         for (var i = 0; i < this.møder.length; i++){
             console.log("Møde antal" + i + "start: " + this.møder[i].startTime + "slut: " + this.møder[i].endTime);
         }

    }
}

Revisor1 = new Revisor();
Revisor2 = new Revisor();

//det er muligt at tilføje flere revisorer til
