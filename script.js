"use strict"

function erSynlig(elementId) {
    const elementBoks = document.getElementById(elementId).getBoundingClientRect();
    const halvtredspct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredspct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredspct > 0) {

        return true;

        } else {
            return false;
        }

}



function aktiverMultimedier() {
    for (let i = 0; i <= AVIdListe.length -1; i++) {
        if (erSynlig(AVIdListe[i])) {
            AVIndholdsliste[i].loop = true;
            AVIndholdsliste[i].play();
        } else {
            AVIndholdsliste[i].pause();
            AVIndholdsliste[i].currentTime = 0;
        }
    }
}


const AVIdListe = ["video"];
const AVIndholdsliste = ["video"];


AVIndholdsliste[3] = document.getElementById("video");
AVIndholdsliste[3] = document.getElementById("video");



window.addEventListener("scroll", function() {
    aktiverMultimedier(); ("video")
});


function openNav() {
  document.getElementById("overlay1").style.width = "50%";
}

function closeNav() {
  document.getElementById("overlay1").style.width = "0%";
}
