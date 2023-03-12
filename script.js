function toggleFunction(){
    var form = document.getElementById("contactForm");
    form.classList.toggle("invisible");
}


//get form input, and then show it in the profile card section
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
    const availability = document.getElementById("availability").value;
    const usia = document.getElementById("usia").value;
    const lokasi = document.getElementById("lokasi").value;
    const exp = document.getElementById("exp").value;

    document.getElementById("show-name").innerHTML = name;
    document.getElementById("show-email").innerHTML = email;
    document.getElementById("show-role").innerHTML = role;
    document.getElementById("show-availability").innerHTML = availability;
    document.getElementById("show-usia").innerHTML = usia;
    document.getElementById("show-lokasi").innerHTML = lokasi;
    document.getElementById("show-exp").innerHTML = exp;

});
