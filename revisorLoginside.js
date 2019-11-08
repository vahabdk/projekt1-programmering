
var id = sessionStorage.getItem('loggedInRevisorId');
var ro = new Array( JSON.parse (sessionStorage.getItem('loggedInRevisorObject')) );

if (id == null || ro == null) {
    location.href = "Login.html";
}

ro = formaterRevisor(ro)[0];

console.log(id);
console.log(ro);

document.getElementById('revisorNavn').innerHTML = ro.getNavn();


