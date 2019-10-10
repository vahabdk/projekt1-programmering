class Kalender {
    constructor(revisorhus){
        //Som standard vælges den nuværende måned
        this.måned = new Date();

        this.revisorhus = revisorhus;

        //Laver en array over navnene på månederne, så vi kan udskrive månednavn
        this.månedNavne = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August',
            'September', 'Oktober', 'November', 'December'];
        this.ugedage = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    }

    //Initialiserer kalenderen, ved at oprette de rette html-elementer
    initKalender() {

        //Udskriver hvilken måned og år vi befinder os i
        document.getElementById('år').innerText =  this.måned.getFullYear();
        document.getElementById('månedNavn').innerText = this.månedNavne[this.måned.getMonth()];

        //Finder første ugedag i den givende måned
        //Da getDay() angiver søndag som den 0. dag i ugen, sætter vi førsteDagIMåneden til 7, hvis det er en søndag
        //Source: https://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery
        var førsteDagIMåneden = new Date(this.måned.getFullYear(), this.måned.getMonth(), 1).getDay();
        if(førsteDagIMåneden == 0) førsteDagIMåneden = 7;

        //Antal dage i måneden. Fungerer ved at tage den 0. dag i den næste måned, som er den sidste dag i denne måned
        //Inspiration: https://stackoverflow.com/a/1184359
        var antalDageIMåneden = new Date(this.måned.getFullYear(), this.måned.getMonth() + 1, 0).getDate();
        console.log(antalDageIMåneden);
        console.log(førsteDagIMåneden);

        //Finder html-elementet som indeholder alle dagene, så vi kan tilføje de enkelte dage til dette element
        var dage = document.querySelector('.dage');

        //Gå gennem alle dage i måneden (og opret også elementer på de dage før d. første dag i måneden)
        for(var i=1; i<antalDageIMåneden + førsteDagIMåneden; i++) {

            //Opretter et html-element til at repræsentere hver dag i måneden
            //Kilde: https://www.w3schools.com/js/js_htmldom_nodes.asp
            var dag = document.createElement('div');
            dag.className = 'dag';

            //Hvis dagen er i måneden, udskrives datoen i elementet
            if (i >= førsteDagIMåneden) {
                dag.innerHTML = i - førsteDagIMåneden + 1;
                dag.className += ' iMåneden';
            } else {
                dag.className += ' ikkeImåneden';
            }

            //Tilføj det nye element til html-elementet med id: dage
            dage.appendChild(dag);
        }

        //Hent data for dagene, og formatér kalenderen ud fra dette
        this.hentDataForUgedage();
    }





    //Load tidspunkter og formater kalender for en måned
    loadMonth(){

    }

    //Opdater måneden når der trykkes på en af pilene til at skifte måned
    updateMonth(måned){

        //Ryd kalenderen
        document.querySelector('.dage').innerHTML = '';

        //Set måneden til den nuværende måned +/- 1 afhængig af hvilken pil der er trykket på
        this.måned.setMonth(måned);

        //Kald initKalender igen, så kalenderen intitialiseres med den nye måned
        this.initKalender();
    }

    updateÅr(difference){
        //Ryd kalenderen
        document.querySelector('.dage').innerHTML = '';

        //Set måneden til den nuværende måned +/- 1 afhængig af hvilken pil der er trykket på
        this.måned.setFullYear(this.måned.getFullYear() + difference);

        //Kald initKalender igen, så kalenderen intitialiseres med den nye måned
        this.initKalender();
    }


    //Hent data for dagene, og formatér kalenderen ud fra dette
    hentDataForUgedage() {
        //TODO: Find dage med ledige tider, og giv den classen 'ledig' og 'optaget'
    }

    //Opdatér tidsplanen så den viser de rette oplysninger
    opdaterTidsplan(element){

        //Gør tidsplanen synlig
        document.getElementById('tidsplan').style.display = 'flex';

        //Opret et Date objekt for den dato der trykkes på
        var elementDato = new Date(this.måned.getFullYear(), this.måned.getMonth(), element.innerText);

        //Vis ugedag på siden
        document.getElementById('tidsplanUgedag').innerText = this.ugedage[elementDato.getDay()];

        //Vis dato på siden
        document.getElementById('tidsplanDato').innerText = elementDato.getDate() + '. ' + this.månedNavne[elementDato.getMonth()];

        //TODO: Vis ledige tider
    }

}
