Window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
var oscillator;
var isPlaying = false; // during play, true

document.getElementById("play").addEventListener("click", playSound);
document.getElementById("stop").addEventListener("click", stopSound);
                                                 
function playSound() {
    if (isPlaying) return;
    oscillator = ctx.createOscillator(); // oscillator must be made by each play.
  
    var freqText = document.getElementById("freq").value; // get desired frequency.
    if (freqText == "") return;
    var freqNumber = Number(freqText);

    const waveforms = document.getElementsByName("waveform"); // get desired waveform.
    for (var i=0; i < waveforms.length; i++){
      if (waveforms[i].checked) {
         oscillator.type = waveforms[i].value;
         console.log(oscillator.type);
         break;
      }     
    }
  
    oscillator.frequency.setValueAtTime(freqNumber, ctx.currentTime);
    oscillator.connect(ctx.destination);
    oscillator.start();
    isPlaying = true;
}

function stopSound() {
    if (isPlaying){
      oscillator.stop();
      isPLaying = false;
    }
}
