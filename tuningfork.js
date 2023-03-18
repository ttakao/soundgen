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
    alert("1");
    var freqText = document.getElementById("freq").value;
    
    var freqNumber = Number(freqText);
    alert(freqNumber);       
    oscillator.frequency.setValueAtTime(freqNumber, ctx.currentTime);
    oscillator.connect(ctx.destination);
    oscilator.start();
    isPlaying = true;
}

function stopSound() {
    oscillator?.stop();
    isPLaying = false;
}
