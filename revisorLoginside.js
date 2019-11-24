
var roid = sessionStorage.getItem('loggedInRevisorId');
var ro = new Array( JSON.parse (sessionStorage.getItem('loggedInRevisorObject')) );

if (roid == null || ro == null) {
    location.href = "Login.html";
}

ro = formaterRevisor(ro)[0];

console.log(roid);
console.log(ro);

//Henter og indsætter info om hvilken revisor der er logget ind
document.getElementById('revisorNavn').innerHTML = ro.getNavn();


var år;
var måned;
var dag;

//Henter de møder tilknyttet til den revisor der er logget ind
var møder = ro.getMøder();

//Laver en variabel som sættes til dagens dato
var idag = new Date ();

//Sætter selectelementernes defaultvalue til at være dagens dato
document.getElementById('år').value = idag.getFullYear();
document.getElementById('måned').value = idag.getMonth();
document.getElementById('dag').value = idag.getDate();

//Når man har valgt en dato i select, så skal den run funktionen myfunc
document.getElementById('år').addEventListener('change', myfunc);
document.getElementById('måned').addEventListener('change', myfunc);
document.getElementById('dag').addEventListener('change', myfunc);


myfunc();

    function myfunc() {
        document.getElementById("mødeoversigt").innerHTML = "";
        år = document.getElementById("år").value;
        måned = document.getElementById("måned").value;
        dag = document.getElementById("dag").value;


        var valgtDato = new Date (år, måned, dag);
        var erDerMøder = false;

        for (var i=0; i<møder.length; i++){
            console.log(møder[i].getStartTid());

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
                console.log(kundenavn);
                console.log(kommentar);
                console.log(mail);
                console.log(tlfnr);
                console.log(startTid);

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



function sletMøde(id) {

    for (var i = 0; i < ro.getMøder().length; i++) {
        if (ro.getMøder() [i].getID() == id) {
            var møderArray = ro.getMøder();
            møderArray.pop(i);
            var grh = getGemtRevisorHus();
            grh.getRevisorer()[roid].setMøder(møderArray);

            localStorage.setItem('gemtRevisorhus', JSON.stringify(grh));
            sessionStorage.setItem('loggedInRevisorObject', JSON.stringify(grh.getRevisorer()[roid]));

            //Find revisor som er logget ind, og erstat hans møder med møderArray
            //Til sidst gem hele revisorhuset igen i gemtRevisorhus
            myfunc();

            break;

        }

    }
}


function logAf(){
    sessionStorage.removeItem('loggedInRevisorObject');
    sessionStorage.removeItem('loggedInRevisorId');
    window.location.href = 'Login.html';
}
