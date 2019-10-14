class Revisorhus {

    setRevisorhus(revisorhusInfo) {
        this.revisorhusInfo = revisorhusInfo;
        this.revisorer = [];
    }
    //For at kunne ændre i nanvet på revisorhuset, tilføjes en get function
    getRevisorhusInfo() {
        return this.revisorhusInfo;
    }
    //For at kunne ændre i navnet tilføjes get en get function
    getRevisorer() {
        return this.revisorer;
    }
    //Laver en function for at kunne tilføje flere revisorer uden for denne klasse
    addRevisor(revisor) {
        this.revisorer.push(revisor);
    }

}

//Ti
let revhus = new Revisorhus();
revhus.setRevisorhus("Birkholm Revision");

revhus.addRevisor("Kristian");
revhus.addRevisor("Jacob");

console.log(revhus.getRevisorhusInfo() + " er et revisorhus med følgende revisorer: " + revhus.getRevisorer());