class Revisorhus {

    setRevisorhus(revisorhusInfo) {
        this.revisorhusInfo = revisorhusInfo;
        this.revisorer = [];
    }
    //For at kunne ændre i nanvet på revisorhuset, tilføjes en get function
    getRevisorhusInfo() {
        return this.revisorhusInfo;
    }
    //For at kunne ændre i navnet tilføjes en get function
    getRevisorer() {
        return this.revisorer;
    }
    //Laver en function for at kunne tilføje flere revisorer ved bare at skrive add.revisor("navn");
    addRevisor(revisor) {
        this.revisorer.push(revisor);
    }

}

//Her påkaldes getfunctionen med set
let revhus = new Revisorhus();
revhus.setRevisorhus("Birkholm Revision");

//Revisorerne benytter add functionen, som er lavet oppe i klassen
revhus.addRevisor("Kristian");
revhus.addRevisor("Jacob");

//Test af at det virker
console.log(revhus.getRevisorhusInfo() + " er et revisorhus med følgende revisorer: " + revhus.getRevisorer());