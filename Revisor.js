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
}

møder = new Revisor();

//den er lavet for at teste om koden kører korrekt
console.log(Revisor.getInfo);

Revisor1 = new Revisor();
Revisor2 = new Revisor();

//det er muligt at tilføje flere revisorer til
