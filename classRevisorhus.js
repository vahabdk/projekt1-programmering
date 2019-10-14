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

    removeRevisor(revisor) {
        this.revisor.remove(revisor);
    }

}

let revhus = new Revisorhus();
revhus.setRevisorhus("Birkholm Revision");

revhus.addRevisor("Kristian");
revhus.addRevisor("Jacob");
console.log(revhus.getRevisorer());