Window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
var oscillator;
var isPlaying = false; // during play, true

document.getElementById("play").addEventListener("click", playSound);
document.getElementById("stop").addEventListener("click", stopSound);
                                                 
function playSound() {
    if (isPlaying) return;
    oscillator = ctx.createOscillator();
    oscillator.type = "sin";
    var freqText = document.getElementById("freq").value;
    if (freqText == "") return;
  
    var freqNumber = Number(freqText);
    oscillator.frequency.setValueAtTime(freqNumber, ctx.currentTime);
    oscillator.connect(ctx.destination);
    oscillator.start();
    isPlaying = true;
}

function stopSound() {
    oscillator?.stop();
    isPLaying = false;
}
