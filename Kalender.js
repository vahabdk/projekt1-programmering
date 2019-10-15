class Kalender {
    constructor(revisorhus, revisor){
        //Som standard vælges den nuværende måned
        this.måned = new Date();

        //Hvis der vælges en specifik dato, gemmes møderne i denne måned
        //Man kunne gennemgå alle møder overhovedet, men pga. performance, gør vi dette i stedet
        this.møderDenneMåned = [];

        this.revisorhus = revisorhus;
        this.visKalenderFor = revisor;

        //Laver en array over navnene på månederne, så vi kan udskrive månednavn
        this.månedNavne = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August',
            'September', 'Oktober', 'November', 'December'];
        this.ugedage = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];

        this.initKalender();
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
                dag.className += ' iMåneden ' + 'dag' + (i - førsteDagIMåneden + 1);
            } else {
                dag.className += ' ikkeImåneden';
            }

            //Tilføj det nye element til html-elementet med id: dage
            dage.appendChild(dag);
        }

        //Hent data for dagene, og formatér kalenderen ud fra dette
        this.hentDataForUgedage();
    }


    setRevisorHus(rh){
        this.revisorhus = rh;
    }
    setVisKalenderFor(revisor){
        this.visKalenderFor = revisor;
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
        //Find dage med ledige tider, og giv den classen 'ledig' og 'optaget'

        var revisorMøder = this.visKalenderFor.getMøder();
        this.møderDenneMåned = [];

        //Gennemgå møder
        for(var i=0; i<revisorMøder.length; i++) {

            //Filtrér først alle de møder fra, som ikke er i den måned vi kigger på
            if (revisorMøder[i].getStartTid().getMonth() == this.måned.getMonth()) {
                this.møderDenneMåned.push(revisorMøder[i]);
            }
        }

        //Gennemgå møder denne måned, og giv dem en class
        for (var i=0; i<this.møderDenneMåned.length; i++){
            var dato = this.møderDenneMåned[i].getStartTid().getDate();
            document.getElementsByClassName('dag' + dato)[0].classList.add('optaget');
        }
    }

    //Opdatér tidsplanen så den viser de rette oplysninger
    opdaterTidsplan(element){
        //Opret et Date objekt for den dato der trykkes på
        var elementDato = new Date(this.måned.getFullYear(), this.måned.getMonth(), element.innerText);

        var dag = element.innerText;
        var ugedag = this.ugedage[elementDato.getDay()];

        var tiderContainer = document.getElementById('tiderContainer');
        var mødeLængde = Number(document.getElementById('mødeOption').value);

        //Gør tidsplanen synlig
        document.getElementById('tidsplan').style.display = 'flex';

        //Nulstil tiderContaineren (oversigten overledige tider)
        tiderContainer.innerHTML = '';

        //Vis ugedag på siden
        document.getElementById('tidsplanUgedag').innerText = ugedag;

        //Vis dato (dag) på siden
        document.getElementById('tidsplanDato').innerText = elementDato.getDate() + '. ' +
            this.månedNavne[elementDato.getMonth()] + ' ' + elementDato.getFullYear();


        var tiderPåDagen = [];
        //for(var i=this.visKalenderFor.getStartdag(); i<this.visKalenderFor.getSlutdag(); i += mødeLængde){
        for(var i=this.visKalenderFor.getStartdag(); i<this.visKalenderFor.getSlutdag(); i += mødeLængde){
            tiderPåDagen.push(i);
            console.log(i);
        }

        //Gennemgå de møder der er
        for(var i=0; i<this.møderDenneMåned.length; i++){
            //Gennemgå de tider der er i dag
            if(this.møderDenneMåned[i].getStartTid().getDate() == dag) {
                //Fjern de tider, som allerede er optaget
                for (var j = 0; i < tiderPåDagen.length; i++) {
                    //console.log('Tidspunkt for møde denne måned: ' + this.møderDenneMåned[i].getStartTid().getHours());
                    var index = tiderPåDagen.indexOf(this.møderDenneMåned[i].getStartTid().getHours());
                    if(index != -1){
                        tiderPåDagen.splice(index, 1);
                    }
                }
            }
        }

        console.log(tiderPåDagen);

        //Hvis mødet er på dagen, fjernes tidspunktet fra tidsplanen
        /*if(this.møderDenneMåned[i].getStartTid().getDate() == dag && false){
            var startTidspunkt = tilToTal(this.møderDenneMåned[i].getStartTid().getHours()) + ':' + tilToTal(this.møderDenneMåned[i].getStartTid().getMinutes());
            var slutTidspunkt = tilToTal(this.møderDenneMåned[i].getSlutTid().getHours()) + ':' + tilToTal(this.møderDenneMåned[i].getSlutTid().getMinutes());

            var tidspunkt = document.createElement('span');
            tidspunkt.className = 'tidspunkt';
            tidspunkt.innerHTML = startTidspunkt + ' - ' + slutTidspunkt;
            tiderContainer.appendChild(tidspunkt);
        }*/

        //Sørger for der er 2 tal i et tal, så der fx står 08:00 i stedet for 8:0
        function tilToTal(t){
            if(t.toString().length == 1){
                return '0' + t;
            } else {
                return t;
            }
        }
    }

}
