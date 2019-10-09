class Kalender {
    constructor(){
        this.måned = new Date();
    }

    //Initialiserer kalenderen, ved at oprette de rette html-elementer
    initKalender() {

        const månedNavne = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August',
            'September', 'Oktober', 'November', 'December'];

        document.getElementById('månedNavn').innerText = månedNavne[this.måned.getMonth()] + " " + this.måned.getFullYear();

        //Source: https://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery
        var førsteDagIMåneden = new Date(this.måned.getFullYear(), this.måned.getMonth(), 1).getDay();
        if(førsteDagIMåneden == 0) førsteDagIMåneden = 7;

        //Antal dage i måneden. Fungerer ved at tage den 0. dag i den næste måned, som er den sidste dag i denne måned
        //Inspiration: https://stackoverflow.com/a/1184359
        var antalDageIMåneden = new Date(this.måned.getFullYear(), this.måned.getMonth() + 1, 0).getDate();
        console.log(antalDageIMåneden);
        console.log(førsteDagIMåneden);

        var dage = document.querySelector('.dage');

        //Gå gennem alle dage i måneden
        for(var i=1; i<antalDageIMåneden + førsteDagIMåneden; i++) {

            //https://www.w3schools.com/js/js_htmldom_nodes.asp
            var dag = document.createElement('div');
            dag.className = 'dag';

            if (i >= førsteDagIMåneden) {
                dag.innerHTML = i - førsteDagIMåneden + 1;
            }
            dage.appendChild(dag);
        }
    }





    //Load tidspunkter og formater kalender for en måned
    loadMonth(){

    }

    //Updates the DOM when meetings are changed
    updateMonth(retning){
        var difference = 1;
        if(retning == 'venstre'){
            difference = -1;
        }

        //Ryd kalenderen
        document.querySelector('.dage').innerHTML = '';

        this.måned.setMonth(this.måned.getMonth() + difference);

        this.initKalender();
    }

}


