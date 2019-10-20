class Revisorhus {

    constructor(revisorhusInfo, revisorer = []) {
        this.revisorhusInfo = revisorhusInfo;
        this.revisorer = revisorer;
    }

    //For at udskrive al info omkring revisorer, hentes info fra klassen revisorer, som findes i et andet js dokument. getinfo skal erstattes med korrekt reference
    getInfo() {
        var text = "";
        text = this.revisorhusInfo + "<br/>";

        for (i = 0; i < this.revisorer.length; i++) {
            text += this.revisorer[i].getInfo() + "<br/>";
        }
        return text;
    }

    //Laver en function for at kunne kalde på revisorhuset
    getRevisorhusInfo() {
        return this.revisorhusInfo;
    }

    //For at kunne hente revisorerne samlet, tilføjes en get function
    getRevisorer() {
        return this.revisorer;
    }
    //Laver en function for at kunne tilføje flere revisorer så det derved er muligt at skrive add.revisor("navn");
    addRevisor(revisor) {
        this.revisorer.push(revisor);
    }
}

//Laver en reference til revisorhusklassen, så den kan påkaldes.
revhus = new Revisorhus("Birkholm Revision");

//Her anvendes den function som blev lavet oppe i klassen.
revhus.addRevisor("Kristian");
revhus.addRevisor("Jacob");
revhus.addRevisor("Andreas");

//Test af at det virker
//console.log(revhus.getRevisorhusInfo() + " er et revisorhus med følgende revisorer: " + revhus.getRevisorer());
