
var id = sessionStorage.getItem('loggedInRevisorId');
var ro = new Array( JSON.parse (sessionStorage.getItem('loggedInRevisorObject')) );

if (id == null || ro == null) {
    location.href = "Login.html";
}

ro = formaterRevisor(ro)[0];

console.log(id);
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

        år = document.getElementById("år").value;
        måned = document.getElementById("måned").value;
        dag = document.getElementById("dag").value;


        var valgtDato = new Date (år, måned, dag)

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
                console.log(kundenavn);
                console.log(kommentar);
                console.log(mail);
                console.log(tlfnr);
                console.log(startTid);

            startTid = startTid.toLocaleTimeString();
            slutTid = slutTid.toLocaleTimeString();

            var mødeoversigt =  document.getElementById("mødeoversigt");

            var møde = document.createElement("div");
                møde.innerHTML = "Kundenavn: " + kundenavn + "<br />" + mail + "<br />" + tlfnr + "<br />" + startTid + " - " + slutTid + "<br />" + "Yderligere kommentar: " + kommentar;
                mødeoversigt.appendChild(møde);

            }
        }


    }



function logAf(){
    sessionStorage.removeItem('loggedInRevisorObject');
    sessionStorage.removeItem('loggedInRevisorId');
    window.location.href = 'Login.html';
}
