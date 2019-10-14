class Revisorhus {

    setRevisorhus(revisorhusInfo) {
        this.revisorhusInfo = revisorhusInfo;
        this.revisorer = [];
    }
    getRevisorhusInfo() {
        return this.revisorhusInfo;
    }

    getRevisorer() {
        return this.revisorer;
    }

    addRevisor(revisor) {
        this.revisorer.push(revisor);
    }


}

let revhus = new Revisorhus();
revhus.setRevisorhus("Birkholm Revision");

revhus.addRevisor("Kristian");
revhus.addRevisor("Jacob");

console.log(revhus.getRevisorhusInfo() + " er et revisorhus med følgende revisorer: " + revhus.getRevisorer());