//Standard for loop
for (var i=0; i<10; i++){
    console.log(i);
}


//Hent et element
var tekst = '';
var tidspunkt = new Date;
tidspunkt = tidspunkt.toLocaleTimeString();

var mitElement = document.getElementById('testElement');
//Set en css property med denne variabel
mitElement.style.backgroundColor = 'red';

tekst += 'Det her er første linje<br>';
tekst += 'Det her er anden linje<br>';
tekst += 'Klokken er: ' + tidspunkt;

mitElement.innerText = 'hej';

mitElement.innerHTML = tekst;


//Loop gennem array
biler = ["BMW", "Toyota", "Mercedes", "Ferrari"];
antalBiler = biler.length;

for (var i=0; i<biler.length; i++){
    console.log('Bil nummer ' + i + ' er en: ' + biler[i]);
}

loopGennemArray(biler);

function loopGennemArray(a){
    for (var i=0; i<a.length; i++){
        console.log('Array nummer ' + i + ' har værdien: ' + a[i]);
    }
}


// Få reviserhuset, og loop gennem revisorne
var revisorhus = getGemtRevisorHus();
var revisore = revisorhus.getRevisorer();
var revisor = revisore[0];
document.getElementById('navn').innerHTML = revisor.getNavn();
document.getElementById('startTid').innerHTML = revisor.getStartdag();

for(var i=0; i<revisore.length; i++){
    console.log('Revisor nummer ' + i);
    console.log('Navn: ' + revisore[i].getNavn());
    console.log('Startdag: ' + revisore[i].getStartdag());
    console.log('Slutdag: ' + revisore[i].getSlutdag());
    console.log('--------------------------')
}


//Tag revisoren som er logget ind, og udskriv hans informationer til siden
var revisorLoggetIndIndex = 0;
var navn = revisore[revisorLoggetIndIndex].getNavn();
var start = revisore[revisorLoggetIndIndex].getStartdag();
var slut = revisore[revisorLoggetIndIndex].getSlutdag();
var møder = revisore[revisorLoggetIndIndex].getMøder();

document.getElementById('navn').innerText = navn;
document.getElementById('startTid').innerText = start;
document.getElementById('slutTid').innerText = slut;

for (var i=0; i<møder.length; i++){
    document.getElementById('møder').innerHTML += møder[i].getStartTid() + '<br>';
}

