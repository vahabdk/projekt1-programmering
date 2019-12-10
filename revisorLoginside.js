//Lavet af VR
var roid = sessionStorage.getItem('loggedInRevisorId');
var ro = new Array( JSON.parse (sessionStorage.getItem('loggedInRevisorObject')) );

if (roid == null || ro == null) {
    location.href = "Login.html";
}

ro = formaterRevisor(ro)[0];
//lavet af MM
//Henter og indsætter info om hvilken revisor der er logget ind
document.getElementById('revisorNavn').innerHTML = ro.getNavn();


var år;
var måned;
var dag;

//Henter de møder tilknyttet til den revisor der er logget ind
var møder = ro.getMøder();

//Sorterer møder efter dato
møder.sort(sorterEfterMødeDato);

//Laver en variabel som sættes til dagens dato
var idag = new Date ();

//Sætter selectelementernes defaultvalue til at være dagens dato
document.getElementById('år').value = idag.getFullYear();
document.getElementById('måned').value = idag.getMonth();
document.getElementById('dag').value = idag.getDate();

//Når man har valgt en dato i select, så skal den run funktionen hentMøder()
document.getElementById('år').addEventListener('change', hentMøder);
document.getElementById('måned').addEventListener('change', hentMøder);
document.getElementById('dag').addEventListener('change', hentMøder);


hentMøder();

    function hentMøder() {
        document.getElementById("mødeoversigt").innerHTML = "";
        år = document.getElementById("år").value;
        måned = document.getElementById("måned").value;
        dag = document.getElementById("dag").value;


        var valgtDato = new Date (år, måned, dag);
        var erDerMøder = false;

        for (var i=0; i<møder.length; i++){

            //Skaber variabler til mødets tider og dato
            var startTid = møder[i].getStartTid();
            var slutTid = møder[i].getSlutTid();
            var mødeDato = new Date (startTid.getFullYear(), startTid.getMonth(), startTid.getDate());


            //if-statement som siger, at hvis mødedato lig valgtdato, så udskriver den mødeobjektet
            if (valgtDato.getFullYear() == mødeDato.getFullYear() &&
            valgtDato.getMonth() == mødeDato.getMonth() && valgtDato.getDate() == mødeDato.getDate()) {
                var kundenavn = møder[i].getKundenavn();
                var kommentar = møder[i].getKommentar();
                var mail = møder[i].getMail();
                var tlfnr = møder[i].getTlfnr();
                var startTid = møder[i].getStartTid();
                var slutTid = møder[i].getSlutTid();
                var id = møder[i].getID();
                erDerMøder = true;
                /*
                console.log(kundenavn);
                console.log(kommentar);
                console.log(mail);
                console.log(tlfnr);
                console.log(startTid);

                 */

                //Gør mødestart/slut læseligt
                startTid = startTid.toLocaleTimeString().substring(0,5);
                slutTid = slutTid.toLocaleTimeString().substring(0,5);

                //Laver en variabel for div'en "mødeoversigt
                var mødeoversigt = document.getElementById("mødeoversigt");

                //Skaber et element til møderne for den dag, hvor kundens informationer indsættes i HTML
                var møde = document.createElement("div");
                møde.innerHTML = "Kundenavn: " + kundenavn + "<br />" + mail + "<br />" + tlfnr + "<br />" + startTid + " - " + slutTid + "<br />" + "Yderligere kommentar: " + kommentar + "<br />" + "<button id='sletMøde' onclick='sletMøde(" + id + ")'>Slet Møde</button>";
                møde.classList = "enkelteMøde";
                mødeoversigt.appendChild(møde);


            }
        }

        if(!erDerMøder) document.getElementById("mødeoversigt").innerHTML = 'Der er ingen møder denne dag :)';
    }


//Lavet af FH
function sletMøde(id) {

    for (var i = 0; i < ro.getMøder().length; i++) {
        if (ro.getMøder() [i].getID() == id) {
            console.log(ro.getMøder() [i]);

            var møderArray = ro.getMøder();
            møderArray.splice(i, 1);
            console.log(møderArray);

            var grh = getGemtRevisorHus();
            grh.getRevisorer()[roid].setMøder(møderArray);

            localStorage.setItem('gemtRevisorhus', JSON.stringify(grh));
            sessionStorage.setItem('loggedInRevisorObject', JSON.stringify(grh.getRevisorer()[roid]));

            hentMøder();

            break;
        }

    }
}


function logAf(){
    sessionStorage.removeItem('loggedInRevisorObject');
    sessionStorage.removeItem('loggedInRevisorId');
    window.location.href = 'Login.html';
}

//Sorterer efter mødedato
//Retunerer -1 hvis a kommer først og 1 hvis b kommer først
function sorterEfterMødeDato(a, b){
    var r = 1;

    if(a.getStartTid().getTime() < b.getStartTid().getTime()){
        r = -1;
    }
    return r;
}