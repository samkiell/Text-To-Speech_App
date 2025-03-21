let text = document.getElementById("text");
let btn = document.getElementById("btn");

let speech = new SpeechSynthesisUtterance;

btn.onclick = function() {

    let speed = document.getElementById("speed");
    let pitch = document.getElementById("pitch");

    speech.text = text.value;
    speech.rate = speed.value;
    speech.volume = 1;
    speech.pitch = pitch.value;


    speechSynthesis.speak(speech);
}